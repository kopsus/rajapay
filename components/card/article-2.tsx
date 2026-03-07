import { getExcerpt, getFirstImage } from "@/app/(user)/artikel/page";
import { IBlog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

export const Article2 = ({ data }: { data: IBlog }) => {
  if (!data) return null;
  const image = getFirstImage(data.content);

  return (
    <Link
      href={`/artikel/${data.id}`}
      className="flex items-center gap-4 min-h-34.5"
    >
      <div className="min-w-37 w-37 h-full rounded-2xl overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={data.title}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full block object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200" />
        )}
      </div>
      <div className="space-y-1">
        <p className="font-semibold line-clamp-2 lg:text-lg text-primary">
          {data.title}
        </p>
        <p className="line-clamp-3 text-[#4D5461] text-sm">
          {getExcerpt(data.content)}
        </p>
      </div>
    </Link>
  );
};
