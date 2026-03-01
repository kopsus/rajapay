import CategoryClient from "@/components/admin/category/category-client";
import { getProductCategories } from "@/lib/action/category";

export default async function page() {
  const categories = await getProductCategories();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Manajemen Kategori</h1>
          <p className="text-muted-foreground text-sm">
            Kelola kategori untuk pengelompokan produk
          </p>
        </div>
      </div>

      <CategoryClient initialData={categories} />
    </div>
  );
}
