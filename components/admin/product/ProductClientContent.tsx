"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Input } from "@/components/ui/input";
import { IProduct } from "@/types/product";
import { IProductCategory } from "@/types/category";
import { saveProduct, deleteProduct } from "@/lib/action/product";
import { DialogPost } from "./DialogPost";
import { ProductTable } from "./ProductTable";

export default function ProductClientContent({
  initialProducts,
  categories,
}: {
  initialProducts: IProduct[];
  categories: IProductCategory[];
}) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const [formData, setFormData] = useState<Partial<IProduct>>({
    nama: "",
    harga: 0,
    category_id: "",
    status: "Lancar",
    keterangan: "",
    kode: "",
  });

  const handleSave = async () => {
    if (!formData.nama || !formData.category_id)
      return alert("Nama dan Kategori wajib diisi");

    const res = await saveProduct({
      ...formData,
      id: editingId ?? "",
    } as IProduct);
    if (res.success) {
      setIsOpen(false);
      setEditingId(null);
      setFormData({
        nama: "",
        harga: 0,
        category_id: "",
        status: "Lancar",
        keterangan: "",
        kode: "",
      });
      router.refresh();
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Hapus produk ini?")) {
      const res = await deleteProduct(id);
      if (res.success) router.refresh();
    }
  };

  return (
    <div className="space-y-6 mx-auto">
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Manajemen Produk
          </h1>
          <p className="text-muted-foreground text-sm">
            Kelola harga dan stok paket data Anda.
          </p>
        </div>
        <Button
          onClick={() => {
            setEditingId(null);
            setIsOpen(true);
          }}
          className="rounded-full shadow-lg"
        >
          <Plus className="h-4 w-4" /> Tambah Produk
        </Button>
      </div>

      <Tabs defaultValue={categories[0].id} className="w-full">
        {/* TABS NAVIGATION DENGAN OVERFLOW FIX */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div
            className="flex-1 overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: "none" }}
          >
            <TabsList className="inline-flex h-10 items-center justify-center rounded-lg overflow-hidden bg-slate-100 p-1 text-slate-500">
              {categories.map((cat) => (
                <TabsTrigger key={cat.id} value={cat.id}>
                  {cat.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="relative w-full max-w-xs hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Cari nama atau kode..."
              className="pl-9 rounded-full bg-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* CONTENT */}
        {categories.map((cat) => (
          <TabsContent key={cat.id} value={cat.id} className="mt-0">
            <ProductTable
              products={initialProducts.filter(
                (p) =>
                  p.category_id === cat.id &&
                  (p.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    p.kode.toLowerCase().includes(searchQuery.toLowerCase())),
              )}
              onEdit={(p) => {
                setEditingId(p.id);
                setFormData(p);
                setIsOpen(true);
              }}
              onDelete={handleDelete}
            />
          </TabsContent>
        ))}
      </Tabs>

      {/* MODAL FORM TAMBAH/EDIT */}
      <DialogPost
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        formData={formData}
        setFormData={setFormData}
        handleSave={handleSave}
        editingId={editingId}
        categories={categories}
      />
    </div>
  );
}
