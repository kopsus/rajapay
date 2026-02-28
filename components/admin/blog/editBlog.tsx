"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Save, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlogEditor from "@/components/admin/blog/blog-editor";
import { IBlog } from "@/types/blog";
import { saveBlog } from "@/lib/action/blog";

export default function EditBlogClient({
  initialBlog,
}: {
  initialBlog: IBlog;
}) {
  const router = useRouter();

  // Isi state dengan data awal dari database
  const [title, setTitle] = useState(initialBlog.title);
  const [content, setContent] = useState(initialBlog.content);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleUpdate = async () => {
    if (!title || !content) {
      return alert("Semua field wajib diisi!");
    }

    setIsSubmitting(true);
    try {
      const res = await saveBlog({
        id: initialBlog.id,
        title,
        content,
      });

      if (res.success) {
        alert("Artikel berhasil diperbarui!");
        router.push(`/admin/blog/${initialBlog.id}`);
        router.refresh();
      }
    } catch {
      alert("Gagal memperbarui artikel");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={() => router.back()}>
          <ChevronLeft className="mr-2 h-4 w-4" /> Batal
        </Button>
        <Button
          onClick={handleUpdate}
          disabled={isSubmitting}
          className="min-w-32"
        >
          {isSubmitting ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Save className="mr-2 h-4 w-4" />
          )}
          Update Artikel
        </Button>
      </div>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Judul Artikel..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-transparent text-4xl md:text-5xl font-bold outline-none placeholder:text-muted-foreground/40 py-4"
        />
      </div>

      <BlogEditor content={content} onChange={setContent} />
    </div>
  );
}
