import { Article1 } from "@/components/card/article-1";

export const AllArticle = () => {
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
    <div className="container-section rounded-t-4xl border-t">
      <div className="max-w-7xl mx-auto space-y-8">
        <p className="text-2xl font-semibold text-primary">Semua Artikel</p>
        <div className="grid grid-cols-4 gap-6">
          {articleList.map((item, index) => (
            <Article1 item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
