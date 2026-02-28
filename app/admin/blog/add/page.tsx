"use client";

import { useState } from "react";
import BlogEditor from "@/components/admin/blog/blog-editor";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Loader2, Save } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { saveBlog } from "@/lib/action/blog";

export default function NewPostPage() {
  const router = useRouter();
  const params = useParams();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSave = async () => {
    if (!title || !content) {
      return alert("Judul, Kategori, dan Konten wajib diisi!");
    }

    setIsSubmitting(true);
    try {
      const res = await saveBlog({
        id: params?.id as string,
        title,
        content,
      });

      if (res.success) {
        alert("Postingan berhasil disimpan!");
        router.push("/admin/blog");
        router.refresh();
      }
    } catch {
      alert("Terjadi kesalahan saat menyimpan");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto space-y-6">
        {/* Header Navigasi */}
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={() => router.back()}>
            <ChevronLeft className="mr-2 h-4 w-4" /> Kembali
          </Button>
          <Button
            onClick={handleSave}
            disabled={isSubmitting}
            className="min-w-32"
          >
            {isSubmitting ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Save className="mr-2 h-4 w-4" />
            )}
            {params?.id ? "Update Post" : "Publish Post"}
          </Button>
        </div>

        {/* Input Judul & Kategori */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Judul Artikel..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-transparent text-4xl md:text-5xl font-bold outline-none placeholder:text-muted-foreground/40 py-4"
          />
        </div>

        {/* Editor Area */}
        <BlogEditor content={content} onChange={setContent} />
      </div>
    </div>
  );
}
