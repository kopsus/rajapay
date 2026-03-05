import { AllArticle } from "@/components/user/article/all-article";
import { Features } from "@/components/user/article/features";
import { HeroArticle } from "@/components/user/article/hero";
import { Join } from "@/components/user/home/join";

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
