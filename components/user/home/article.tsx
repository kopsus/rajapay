import { Article1 } from "@/components/card/article-1";
import { Button } from "@/components/ui/button";
import { getBlogs } from "@/lib/action/blog";
import Link from "next/link";

export const Article = async () => {
  const blogs = await getBlogs();

  return (
    <div className="container-section relative">
      <div className="pointer-events-none absolute left-0 top-0 w-64 h-64 md:w-96 md:h-96 bg-linear-to-r from-[#053771]/40 to-[#0A69D7]/40 rounded-full blur-3xl opacity-20 md:opacity-30 z-0" />
      <div className="pointer-events-none absolute right-0 bottom-0 w-64 h-64 md:w-96 md:h-96 bg-linear-to-r from-[#EF8659]/40 to-[#894D33]/40 rounded-full blur-3xl opacity-20 md:opacity-30 z-0" />
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
          <p className="text-primary text-3xl lg:text-5xl font-semibold leading-tight lg:leading-16">
            Nantikan Promo & Artikel kami
          </p>
          <p className="text-[#4D5461] text-sm lg:text-base">
            Jangan lewatkan promo menarik dari kami dan juga artikel-artikel
            yang tentunya membuat anda semakin update dengan informasi terbaru
            di masa ini
          </p>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {blogs.slice(0, 3).map((item, index) => (
              <Article1 item={item} key={index} />
            ))}
          </div>
          <Link href={"/article"}>
            <Button
              size={"lg"}
              className="font-semibold text-white rounded-full w-54.75 h-12 text-base"
            >
              Lihat Semua Artikel
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
