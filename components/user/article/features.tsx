import { Article2 } from "@/components/card/article-2";
import Image from "next/image";

export const Features = () => {
  return (
    <div className="container-section rounded-t-4xl border-t">
      <div className="max-w-7xl mx-auto space-y-8">
        <p className="text-2xl font-semibold text-primary">Features</p>
        <div className="grid lg:grid-cols-2 gap-6 w-full">
          <div className="flex flex-col gap-4">
            <Image
              src={"/img/article-1.jpg"}
              alt="article"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto object-cover block rounded-4xl"
            />
            <div className="space-y-2">
              <p className="font-semibold text-primary text-lg">
                Tips Memilih Agen Paket Data All Operator untuk Usaha Rumahan
              </p>
              <p className="line-clamp-3 text-[#4D5461] text-sm">
                Jangan biarkan korosi dini menghancurkan aset gudang Anda.
                Pelajari perbedaan teknis ketebalan lapisan Aluminium-Zinc dan
                dampaknya terhadap Life-Cycle Cost bangunan di lingkungan dengan
                tingkat asiditas tinggi
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 max-h-130 overflow-y-auto">
            <Article2 />
            <Article2 />
            <Article2 />
            <Article2 />
            <Article2 />
            <Article2 />
          </div>
        </div>
      </div>
    </div>
  );
};
