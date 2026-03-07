"use server";

import pool from "@/lib/db";
import { IProduct } from "@/types/product";
import { ResultSetHeader, RowDataPacket } from "mysql2";
import { revalidatePath } from "next/cache";

export async function getPackages(categoryId?: number): Promise<IProduct[]> {
  try {
    let query = "SELECT * FROM products";
    const params: any[] = [];

    if (categoryId) {
      query += " WHERE category_id = ?";
      params.push(categoryId);
    }

    query += " ORDER BY nama ASC";

    const [rows] = await pool.query<(IProduct & RowDataPacket)[]>(
      query,
      params,
    );
    return rows;
  } catch (error) {
    console.error("Error getPackages:", error);
    return [];
  }
}

export async function saveProduct(
  data: Omit<IProduct, "id"> & { id?: string },
) {
  try {
    if (data.id) {
      await pool.query<ResultSetHeader>(
        `UPDATE products SET 
          nama = ?, 
          harga = ?, 
          category_id = ?,
          status = ?,
          keterangan = ?,
          kode = ?,
          updatedAt = NOW()
        WHERE id = ?`,
        [
          data.nama,
          data.harga,
          data.category_id,
          data.status,
          data.keterangan,
          data.kode,
          data.id,
        ],
      );
    } else {
      const newId = crypto.randomUUID();
      await pool.query<ResultSetHeader>(
        `INSERT INTO products 
          (id, 
          nama, 
          harga, 
          category_id,
          status,
          keterangan,
          kode,
          createdAt) 
        VALUES (?, ?, ?, ?, ?, ?, ?, NOW())`,
        [
          newId,
          data.nama,
          data.harga,
          data.category_id,
          data.status,
          data.keterangan,
          data.kode,
        ],
      );
    }

    revalidatePath("/admin/product");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Error saveProduct:", error);
    return { success: false, error: "Gagal menyimpan produk" };
  }
}

export async function deleteProduct(id: string): Promise<{ success: boolean }> {
  try {
    await pool.query<ResultSetHeader>("DELETE FROM products WHERE id = ?", [
      id,
    ]);
    revalidatePath("/admin/product");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Error deleting product:", error);
    return { success: false };
  }
}
