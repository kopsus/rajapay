import { AllArticle } from "@/components/user/article/all-article";
import { Features } from "@/components/user/article/features";
import { HeroArticle } from "@/components/user/article/hero";
import { Join } from "@/components/user/home/join";

export const getExcerpt = (html: string | undefined) => {
  if (!html) return "";
  const cleanText = html.replace(/<[^>]*>?/gm, "").replace(/&nbsp;/g, " ");
  return cleanText.substring(0);
};

export const getFirstImage = (html: string | undefined) => {
  if (!html) return null;
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/);
  return match ? match[1] : null;
};

const page = () => {
  return (
    <div>
      <HeroArticle />
      <Features />
      <AllArticle />
      <Join />
    </div>
  );
};

export default page;
