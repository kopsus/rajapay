import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { id as localeID } from "date-fns/locale";
import { getBlogById } from "@/lib/action/blog";

export default async function BlogDetailPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;

  const blog = await getBlogById(id);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen pb-20">
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b">
        <div className="mx-auto h-16 flex items-center justify-between">
          <Link href="/admin/blog">
            <Button variant="ghost" size="sm">
              <ChevronLeft className="mr-2 h-4 w-4" /> Kembali ke Dashboard
            </Button>
          </Link>
          <Link href={`/admin/blog/edit/${blog.id}`}>
            <Button variant="outline" size="sm">
              Edit Artikel
            </Button>
          </Link>
        </div>
      </div>

      <article className="mx-auto pt-12">
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight">
            {blog.title}
          </h1>

          <div className="flex items-center text-zinc-500 text-sm gap-4">
            <div className="flex items-center">
              <Calendar className="mr-1.5 h-4 w-4" />
              {format(new Date(blog.createdAt), "dd MMMM yyyy", {
                locale: localeID,
              })}
            </div>
          </div>
        </div>

        <hr className="mb-10" />

        <div
          className="prose prose-stone lg:prose-xl max-w-none 
            prose-headings:font-bold prose-headings:text-zinc-900
            prose-p:text-zinc-600 prose-p:leading-relaxed
            prose-img:rounded-2xl prose-img:shadow-lg"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </article>
    </div>
  );
}
