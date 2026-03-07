"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import DialogCategoryPost from "./dialog/dialog-post";
import { IProductCategory } from "@/types/category";
import {
  deleteProductCategory,
  saveProductCategory,
} from "@/lib/action/category";

export default function CategoryClient({
  initialData,
}: {
  initialData: IProductCategory[];
}) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [name, setName] = useState("");

  const handleSave = async () => {
    if (!name) return alert("Nama kategori wajib diisi!");

    const res = await saveProductCategory({ id: editingId || undefined, name });

    if (res.success) {
      setIsOpen(false);
      setName("");
      setEditingId(null);
      router.refresh();
    } else {
      alert(res.error);
    }
  };

  const handleDelete = async (id: string) => {
    if (
      confirm(
        "Hapus kategori ini? Artikel dengan kategori ini akan menjadi 'Uncategorized'.",
      )
    ) {
      const res = await deleteProductCategory(id);
      if (res.success) {
        router.refresh();
      } else {
        alert(res.error);
      }
    }
  };

  const openEdit = (cat: IProductCategory) => {
    setEditingId(cat.id);
    setName(cat.name);
    setIsOpen(true);
  };

  return (
    <>
      <div className="flex justify-end -mt-16">
        <Button
          onClick={() => {
            setEditingId(null);
            setName("");
            setIsOpen(true);
          }}
        >
          <Plus className="h-4 w-4" /> Tambah Kategori
        </Button>
      </div>

      {/* Simple List Table */}
      <div className="border rounded-xl bg-card overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-primary text-white font-medium border-b">
            <tr>
              <th className="p-4">Nama Kategori</th>
              <th className="p-4 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {initialData.map((cat) => (
              <tr key={cat.id} className="hover:bg-slate-50 transition-colors">
                <td className="p-4 font-medium">{cat.name}</td>
                <td className="p-4 text-right space-x-2">
                  <Button
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => openEdit(cat)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handleDelete(cat.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Dialog Form */}
      <DialogCategoryPost
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        name={name}
        setName={setName}
        handleSave={handleSave}
        editingId={editingId}
      />
    </>
  );
}
