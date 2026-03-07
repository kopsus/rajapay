import { getExcerpt, getFirstImage } from "@/app/(user)/artikel/page";
import { Article2 } from "@/components/card/article-2";
import { getBlogs } from "@/lib/action/blog";
import Image from "next/image";
import Link from "next/link";

export const Features = async () => {
  const blogs = await getBlogs();
  const latestBlog = blogs[0];
  const image = getFirstImage(latestBlog.content);

  return (
    <div className="container-section rounded-t-4xl border-t">
      <div className="max-w-7xl mx-auto space-y-8">
        <p className="text-2xl font-semibold text-primary">Features</p>
        <div className="grid lg:grid-cols-2 gap-6 w-full">
          {latestBlog && (
            <Link
              href={`/artikel/${latestBlog.id}`}
              className="flex flex-col gap-4"
            >
              {image ? (
                <Image
                  src={image}
                  alt="article"
                  width={0}
                  height={0}
                  sizes="100vw"
                  unoptimized
                  className="w-full h-auto object-cover block rounded-4xl"
                />
              ) : (
                <div className="w-full h-64 lg:h-96 bg-gray-200 rounded-4xl" />
              )}
              <div className="space-y-2">
                <p className="font-semibold text-primary text-lg">
                  {latestBlog.title}
                </p>
                <p className="line-clamp-3 text-[#4D5461] text-sm">
                  {getExcerpt(latestBlog.content)}
                </p>
              </div>
            </Link>
          )}
          <div className="flex flex-col gap-3 max-h-130 overflow-y-auto">
            {blogs.slice(0, 5).map((item) => (
              <Article2 key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
