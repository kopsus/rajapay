"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

import { IAdmin, saveAdmin } from "@/lib/action/auth";
import { DialogPost } from "./dialog/dialog-post";
import { TableAdmin } from "./table";

export default function AdminUserClient({
  initialData,
}: {
  initialData: IAdmin[];
}) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<IAdmin>({
    id: "",
    email: "",
    password: "",
  });

  const handleSave = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return alert("Format email tidak valid!");
    }

    if (!editingId && (!formData.password || formData.password.length < 6)) {
      return alert("Password baru minimal 6 karakter!");
    }

    const res = await saveAdmin(formData);
    if (res.success) {
      setIsOpen(false);
      setFormData({ id: "", email: "", password: "" });
      router.refresh();
    } else {
      alert(res.error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-white p-6 rounded-2xl border shadow-sm">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <ShieldCheck className="text-primary" /> Manajemen Admin
          </h1>
          <p className="text-sm text-muted-foreground">
            Kelola akun yang memiliki akses ke dashboard ini.
          </p>
        </div>
        <Button
          onClick={() => {
            setEditingId(null);
            setFormData({ id: "", email: "", password: "" });
            setIsOpen(true);
          }}
          className="rounded-full"
        >
          <Plus className="mr-2 h-4 w-4" /> Tambah Admin
        </Button>
      </div>

      <div className="border rounded-2xl bg-white overflow-hidden shadow-sm">
        <TableAdmin
          initialData={initialData}
          setEditingId={setEditingId}
          setFormData={setFormData}
          setIsOpen={setIsOpen}
        />
      </div>

      <DialogPost
        editingId={editingId}
        formData={formData}
        handleSave={handleSave}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setFormData={setFormData}
      />
    </div>
  );
}
