import ProductClientContent from "@/components/admin/product/ProductClientContent";
import { getProductCategories } from "@/lib/action/category";
import { getPackages } from "@/lib/action/product";

export default async function page() {
  const [products, categories] = await Promise.all([
    getPackages(),
    getProductCategories(),
  ]);

  return (
    <div className="space-y-6 bg-red-4000">
      <ProductClientContent
        initialProducts={products}
        categories={categories}
      />
    </div>
  );
}
