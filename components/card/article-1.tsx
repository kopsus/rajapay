import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

interface IArticle1 {
  item: {
    imgUrl: string;
    title: string;
    desc: string;
  };
  key: number;
}

export const Article1 = ({ item, key }: IArticle1) => {
  return (
    <div
      key={key}
      className="bg-white border rounded-2xl p-5 flex flex-col gap-5"
    >
      <Image
        src={item.imgUrl}
        alt={item.title}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto rounded-2xl"
      />
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-primary">{item.title}</p>
          <p className="line-clamp-1 text-sm text-[#4D5461]">{item.desc}</p>
        </div>
        <Button
          variant={"outline"}
          size={"lg"}
          className="border-primary text-primary font-medium rounded-full text-base hover:bg-primary hover:text-white"
        >
          Baca Artikel <ArrowUpRight />
        </Button>
      </div>
    </div>
  );
};
