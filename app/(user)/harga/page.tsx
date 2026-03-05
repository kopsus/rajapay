import { Join } from "@/components/user/home/join";
import { HeroPrice } from "@/components/user/price/hero";
import { Price } from "@/components/user/price/price";

const page = () => {
  return (
    <div>
      <HeroPrice />
      <Price />
      <Join />
    </div>
  );
};

export default page;
