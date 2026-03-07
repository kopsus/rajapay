import { getProductCategories } from "@/lib/action/category";
import { getPackages } from "@/lib/action/product";
import { PriceDisplay } from "./price-display";

export const Price = async () => {
  const [categories, allProducts] = await Promise.all([
    getProductCategories(),
    getPackages(),
  ]);

  return (
    <div className="container-section rounded-t-[40px] border-t px-4 lg:px-0 bg-white">
      <PriceDisplay initialProducts={allProducts} categories={categories} />
    </div>
  );
};
