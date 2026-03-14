"use server";

import { IBlog } from "@/types/blog";
import { ResultSetHeader, RowDataPacket } from "mysql2";
import { revalidatePath } from "next/cache";
import pool from "../db";

function slugify(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // hapus karakter aneh
    .replace(/\s+/g, "-") // spasi jadi -
    .replace(/-+/g, "-"); // hindari --
}

export async function getBlogs(options?: {
  limit?: number;
  search?: string;
}): Promise<IBlog[]> {
  try {
    let query = `
      SELECT * 
      FROM blog
    `;

    const params: any[] = [];

    if (options?.search) {
      query += " WHERE title LIKE ? OR content LIKE ?";
      params.push(`%${options.search}%`, `%${options.search}%`);
    }

    query += " ORDER BY createdAt DESC";

    if (options?.limit) {
      query += " LIMIT ?";
      params.push(options.limit);
    }

    const [rows] = await pool.query<(RowDataPacket & IBlog)[]>(query, params);

    return rows;
  } catch (error) {
    console.error("Error getBlogs:", error);
    return [];
  }
}

export async function getBlogById(id: string): Promise<IBlog | null> {
  try {
    const [rows] = await pool.query<(RowDataPacket & IBlog)[]>(
      `
      SELECT * 
      FROM blog
      WHERE id = ?
      `,
      [id],
    );

    if (rows.length === 0) return null;

    return rows[0];
  } catch (error) {
    console.error("Error getBlogById:", error);
    return null;
  }
}

export async function getBlogBySlug(slug: string): Promise<IBlog | null> {
  const [rows] = await pool.query<(RowDataPacket & IBlog)[]>(
    `
    SELECT *
    FROM blog
    WHERE slug = ?
    `,
    [slug],
  );

  if (rows.length === 0) return null;

  return rows[0];
}

export async function saveBlog(
  data: Omit<IBlog, "createdAt" | "updatedAt">,
): Promise<{ success: boolean }> {
  try {
    const slug = slugify(data.title);

    if (data.id) {
      await pool.query<ResultSetHeader>(
        "UPDATE blog SET title = ?, slug = ?, content = ?, updatedAt = NOW() WHERE id = ?",
        [data.title, slug, data.content, data.id],
      );
    } else {
      const newId = crypto.randomUUID();

      await pool.query<ResultSetHeader>(
        "INSERT INTO blog (id, title, slug, content) VALUES (?, ?, ?, ?)",
        [newId, data.title, slug, data.content],
      );
    }

    revalidatePath("/admin/blog");
    revalidatePath("/");
    revalidatePath("/artikel");

    return { success: true };
  } catch (error) {
    console.error("Error saveBlog:", error);
    return { success: false };
  }
}

export async function deleteBlog(id: string): Promise<{ success: boolean }> {
  try {
    await pool.query<ResultSetHeader>("DELETE FROM blog WHERE id = ?", [id]);

    revalidatePath("/admin/blog");
    revalidatePath("/");
    revalidatePath("/artikel");
    return { success: true };
  } catch {
    return { success: false };
  }
}
