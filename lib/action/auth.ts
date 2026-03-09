"use server";

import pool from "@/lib/db";
import { SignJWT } from "jose";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { RowDataPacket } from "mysql2";
import { revalidatePath } from "next/cache";

export interface IAdmin {
  id: string;
  email: string;
  password?: string;
}

const SECRET_KEY = new TextEncoder().encode(
  process.env.JWT_SECRET || "rajapay-secret-key",
);

export async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const [rows] = await pool.query<RowDataPacket[]>(
      "SELECT * FROM admin WHERE email = ?",
      [email],
    );

    const admin = rows[0];

    if (!admin || !(await bcrypt.compare(password, admin.password))) {
      return { success: false, error: "Email atau password salah" };
    }

    const token = await new SignJWT({ id: admin.id, email: admin.email })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("1d")
      .sign(SECRET_KEY);
    (await cookies()).set("session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });

    return { success: true };
  } catch {
    return { success: false, error: "Terjadi kesalahan server" };
  }
}

export async function logout() {
  (await cookies()).delete("session");
}

export async function getAdmins(): Promise<IAdmin[]> {
  try {
    const [rows] = await pool.query<RowDataPacket[]>(
      "SELECT id, email FROM admin",
    );

    return rows as IAdmin[];
  } catch (error) {
    console.error("Error getAdmins:", error);

    return [];
  }
}

export async function saveAdmin(data: IAdmin) {
  try {
    if (data.id && data.id !== "") {
      if (data.password && data.password.trim() !== "") {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        await pool.query(
          "UPDATE admin SET email = ?, password = ? WHERE id = ?",
          [data.email, hashedPassword, data.id],
        );
      } else {
        await pool.query("UPDATE admin SET email = ? WHERE id = ?", [
          data.email,
          data.id,
        ]);
      }
    } else {
      const newId = crypto.randomUUID();
      const hashedPassword = await bcrypt.hash(data.password || "admin123", 10);
      await pool.query(
        "INSERT INTO admin (id, email, password) VALUES (?, ?, ?)",
        [newId, data.email, hashedPassword],
      );
    }

    revalidatePath("/admin/users");
    return { success: true };
  } catch (error: any) {
    if (error.code === "ER_DUP_ENTRY")
      return { success: false, error: "Email sudah digunakan" };

    return { success: false, error: "Gagal menyimpan user" };
  }
}

export async function deleteAdmin(id: string) {
  try {
    await pool.query("DELETE FROM admin WHERE id = ?", [id]);
    revalidatePath("/admin/users");
    return { success: true };
  } catch {
    return { success: false };
  }
}
