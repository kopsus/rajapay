import { Article1 } from "@/components/card/article-1";
import { getBlogs } from "@/lib/action/blog";

export const AllArticle = async () => {
  const blogs = await getBlogs();

  return (
    <div className="container-section rounded-t-4xl border-t">
      <div className="max-w-7xl mx-auto space-y-8">
        <p className="text-2xl font-semibold text-primary">Semua Artikel</p>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {blogs.map((item, index) => (
            <Article1 item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
