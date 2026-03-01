import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Package2 } from "lucide-react";
import { IProduct } from "@/types/product";
import { IProductCategory } from "@/types/category";

interface DialogPostProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  formData: Partial<IProduct>;
  setFormData: (data: Partial<IProduct>) => void;
  handleSave: () => void;
  editingId: string | null;
  categories: IProductCategory[];
}

export const DialogPost = (props: DialogPostProps) => {
  const {
    isOpen,
    setIsOpen,
    formData,
    setFormData,
    handleSave,
    editingId,
    categories,
  } = props;
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-125">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl font-bold text-primary">
            <Package2 className="size-5" />
            {editingId ? "Edit Produk" : "Tambah Produk Baru"}
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Kode Produk</Label>
              <Input
                value={formData.kode}
                onChange={(e) =>
                  setFormData({ ...formData, kode: e.target.value })
                }
                placeholder="ex: AX10GB"
              />
            </div>
            <div className="space-y-2">
              <Label>Harga (Rp)</Label>
              <Input
                type="number"
                value={formData.harga}
                onChange={(e) =>
                  setFormData({ ...formData, harga: Number(e.target.value) })
                }
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Nama Produk</Label>
            <Input
              value={formData.nama}
              onChange={(e) =>
                setFormData({ ...formData, nama: e.target.value })
              }
              placeholder="ex: Axis AIGO 10GB + Kuota Kota"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Kategori</Label>
              <Select
                value={formData.category_id}
                onValueChange={(val) =>
                  setFormData({ ...formData, category_id: val })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih Kategori" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((c) => (
                    <SelectItem key={c.id} value={c.id}>
                      {c.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Status</Label>
              <Select
                value={formData.status}
                onValueChange={(val: any) =>
                  setFormData({ ...formData, status: val })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Lancar">Lancar</SelectItem>
                  <SelectItem value="Gangguan">Gangguan</SelectItem>
                  <SelectItem value="Nonaktif">Nonaktif</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Keterangan Tambahan</Label>
            <Textarea
              value={formData.keterangan}
              onChange={(e) =>
                setFormData({ ...formData, keterangan: e.target.value })
              }
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Batal
          </Button>
          <Button onClick={handleSave}>Simpan Perubahan</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
