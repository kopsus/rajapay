import { getBlogById, getBlogs } from "@/lib/action/blog";
import { format } from "date-fns";
import { id as localeId } from "date-fns/locale";
import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Article2 } from "@/components/card/article-2";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const [article, allArticles] = await Promise.all([
    getBlogById(id),
    getBlogs({ limit: 6 }),
  ]);

  if (!article) {
    notFound();
  }

  const relatedArticles = allArticles
    .filter((item) => item.id !== id)
    .slice(0, 5);

  return (
    <div className="bg-white min-h-screen max-w-7xl mx-auto py-6 lg:py-10 px-6 lg:px-14">
      <div className="flex flex-col gap-6">
        <Link href="/artikel">
          <Button
            variant="ghost"
            className="gap-2 text-slate-500 hover:text-primary pl-0"
          >
            <ArrowLeft size={18} />
            Kembali ke Artikel
          </Button>
        </Link>

        <div className="space-y-4 ">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-slate-400 text-sm">
              <Calendar size={14} />
              {format(new Date(article.createdAt), "dd MMMM yyyy", {
                locale: localeId,
              })}
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
            {article.title}
          </h1>
        </div>
      </div>

      {/* Konten Artikel */}
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <article className="lg:col-span-7">
            <div
              className="prose prose-lg max-w-none prose-slate prose-headings:text-slate-900 prose-img:rounded-3xl prose-img:shadow-lg"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </article>

          <aside className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b pb-4">
                <p className="font-bold text-xl text-slate-900 uppercase tracking-tight">
                  Artikel Lainnya
                </p>
              </div>

              <div className="flex flex-col gap-6">
                {relatedArticles.length > 0 ? (
                  relatedArticles.map((item) => (
                    <Article2 key={item.id} data={item} />
                  ))
                ) : (
                  <p className="text-slate-400 italic text-sm">
                    Belum ada artikel lainnya.
                  </p>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Page;
