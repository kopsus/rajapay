import { Article1 } from "@/components/card/article-1";
import { Button } from "@/components/ui/button";

export const Article = () => {
  const articleList = [
    {
      imgUrl: "/img/article-1.jpg",
      title: "Tips Memilih Agen Paket Data All Operator untuk Usaha Rumahan",
      desc: " Jangan biarkan korosi dini menghancurkan aset gudang Anda. Pelajari perbedaan teknis ketebalan lapisan Aluminium-Zinc dan  dampaknya terhadap Life-Cycle Cost bangunan di lingkungan dengan tingkat asiditas tinggi",
    },
    {
      imgUrl: "/img/article-2.webp",
      title: "Tips Memilih Agen Paket Data All Operator untuk Usaha Rumahan",
      desc: " Jangan biarkan korosi dini menghancurkan aset gudang Anda. Pelajari perbedaan teknis ketebalan lapisan Aluminium-Zinc dan dampaknya terhadap Life-Cycle Cost bangunan di lingkungan dengan tingkat asiditas tinggi",
    },
    {
      imgUrl: "/img/article-3.jpg",
      title: "Tips Memilih Agen Paket Data All Operator untuk Usaha Rumahan",
      desc: " Jangan biarkan korosi dini menghancurkan aset gudang Anda. Pelajari perbedaan teknis ketebalan lapisan Aluminium-Zinc dan  dampaknya terhadap Life-Cycle Cost bangunan di lingkungan dengan tingkat asiditas tinggi",
    },
  ];

  return (
    <div className="container-section relative">
      <div className="pointer-events-none absolute left-0 top-0 w-64 h-64 md:w-96 md:h-96 bg-linear-to-r from-[#053771]/40 to-[#0A69D7]/40 rounded-full blur-3xl opacity-20 md:opacity-30 z-0" />
      <div className="pointer-events-none absolute right-0 bottom-0 w-64 h-64 md:w-96 md:h-96 bg-linear-to-r from-[#EF8659]/40 to-[#894D33]/40 rounded-full blur-3xl opacity-20 md:opacity-30 z-0" />
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
          <p className="text-primary text-5xl font-semibold leading-16">
            Nantikan Promo & Artikel kami
          </p>
          <p className="text-[#4D5461]">
            Jangan lewatkan promo menarik dari kami dan juga artikel-artikel
            yang tentunya membuat anda semakin update dengan informasi terbaru
            di masa ini
          </p>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="grid grid-cols-3 gap-6">
            {articleList.map((item, index) => (
              <Article1 item={item} key={index} />
            ))}
          </div>
          <Button
            size={"lg"}
            className="font-semibold text-white rounded-full w-54.75 h-12 text-base"
          >
            Lihat Semua Artikel
          </Button>
        </div>
      </div>
    </div>
  );
};
