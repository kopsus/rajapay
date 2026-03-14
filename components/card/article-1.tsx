"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { IBlog } from "@/types/blog";
import { getExcerpt, getFirstImage } from "@/app/(user)/artikel/page";
import Link from "next/link";

interface IArticle1 {
  item: IBlog;
  key?: number;
}

export const Article1 = ({ item, key }: IArticle1) => {
  const image = getFirstImage(item.content);

  return (
    <div
      key={key}
      className="bg-white border rounded-2xl p-5 flex flex-col gap-5"
    >
      {image ? (
        <Image
          src={image}
          alt={item.title}
          width={0}
          height={0}
          sizes="100vw"
          unoptimized
          className="w-full h-auto rounded-2xl"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 rounded-2xl" />
      )}
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-primary line-clamp-2">
            {item.title}
          </p>
          <p className="line-clamp-1 text-sm text-[#4D5461]">
            {getExcerpt(item.content)}
          </p>
        </div>
        <Link href={`/artikel/${item.slug}`} className="w-full">
          <Button
            variant={"outline"}
            size={"lg"}
            className="w-full border-primary text-primary font-medium rounded-full text-base hover:bg-primary hover:text-white"
          >
            Baca Artikel <ArrowUpRight />
          </Button>
        </Link>
      </div>
    </div>
  );
};
