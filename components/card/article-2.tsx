import Image from "next/image";

export const Article2 = () => {
  return (
    <div className="flex items-center gap-4 min-h-34.5">
      <div className="min-w-37 w-37 h-full rounded-2xl overflow-hidden">
        <Image
          src={"/img/article-1.jpg"}
          alt="article"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full block object-cover"
        />
      </div>
      <div className="space-y-1">
        <p className="font-semibold text-lg text-primary">
          Tips Memilih Agen Paket Data All Operator untuk Usaha Rumahan
        </p>
        <p className="line-clamp-1 text-[#4D5461] text-sm">
          Jangan biarkan korosi dini menghancurkan aset gudang Anda. Pelajari
          perbedaan teknis ketebalan lapisan Aluminium-Zinc dan dampaknya
          terhadap Life-Cycle Cost bangunan di lingkungan dengan tingkat
          asiditas tinggi
        </p>
      </div>
    </div>
  );
};
