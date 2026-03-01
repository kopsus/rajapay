"use server";

import { ResultSetHeader, RowDataPacket } from "mysql2";
import pool from "../db";
import { revalidatePath } from "next/cache";
import { IProductCategory } from "@/types/category";

export async function getProductCategories(): Promise<IProductCategory[]> {
  try {
    const [rows] = await pool.query<(IProductCategory & RowDataPacket)[]>(
      "SELECT * FROM categories ORDER BY name ASC",
    );
    return rows;
  } catch (error) {
    console.error("Error getProductCategories:", error);
    return [];
  }
}

export async function saveProductCategory(data: {
  id?: string;
  name: string;
}): Promise<{ success: boolean; error?: string }> {
  try {
    if (data.id) {
      await pool.query<ResultSetHeader>(
        "UPDATE categories SET name = ? WHERE id = ?",
        [data.name, data.id],
      );
    } else {
      const newId = crypto.randomUUID();
      await pool.query<ResultSetHeader>(
        "INSERT INTO categories (id, name) VALUES (?, ?)",
        [newId, data.name],
      );
    }
    revalidatePath("/admin/category");
    return { success: true };
  } catch {
    return { success: false, error: "Gagal menyimpan kategori" };
  }
}

export async function deleteProductCategory(
  id: string,
): Promise<{ success: boolean; error?: string }> {
  try {
    await pool.query<ResultSetHeader>("DELETE FROM categories WHERE id = ?", [
      id,
    ]);
    revalidatePath("/admin/category");
    return { success: true };
  } catch {
    return {
      success: false,
      error: "Gagal hapus. Kategori mungkin masih digunakan product.",
    };
  }
}
