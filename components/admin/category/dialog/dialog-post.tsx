import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface IDialogCategoryPost {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  name: string;
  setName: (name: string) => void;
  handleSave: () => void;
  editingId: string | null;
}

const DialogCategoryPost = ({
  isOpen,
  setIsOpen,
  name,
  setName,
  handleSave,
  editingId,
}: IDialogCategoryPost) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {editingId ? "Edit Kategori" : "Tambah Kategori"}
          </DialogTitle>
        </DialogHeader>
        <div className="py-4 space-y-2">
          <Label htmlFor="name">Nama Kategori</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Contoh: Tips Kesehatan"
          />
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Batal
          </Button>
          <Button onClick={handleSave} className="bg-blue-600">
            Simpan
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogCategoryPost;
