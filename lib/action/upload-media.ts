"use server";

import { writeFile } from "fs/promises";
import { join } from "path";

export async function uploadImage(
  formData: FormData,
): Promise<{ success: boolean; url?: string; error?: string }> {
  const file = formData.get("avatar") as File;

  if (!file) {
    return { success: false, error: "Tidak ada file yang dipilih" };
  }

  if (file.size > 2 * 1024 * 1024) {
    return { success: false, error: "Ukuran file terlalu besar (Max 2MB)" };
  }

  const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
  if (!allowedTypes.includes(file.type)) {
    return {
      success: false,
      error: "Format file tidak didukung (Gunakan JPG/PNG/WebP)",
    };
  }

  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const filename = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
    const uploadDir = process.env.UPLOAD_PATH!;
    const path = join(uploadDir, filename);

    await writeFile(path, buffer);

    return {
      success: true,
      url: `/uploads/${filename}`,
    };
  } catch (error) {
    console.error("Upload Error:", error);
    return { success: false, error: "Gagal menyimpan file ke server" };
  }
}
