import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IAdmin } from "@/lib/action/auth";
import { Mail, Key } from "lucide-react";

interface IDialogPost {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  formData: IAdmin;
  setFormData: (formData: IAdmin) => void;
  editingId: string | null;
  handleSave: () => void;
}

export const DialogPost = ({
  isOpen,
  setIsOpen,
  formData,
  setFormData,
  editingId,
  handleSave,
}: IDialogPost) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {editingId ? "Edit Akun Admin" : "Tambah Admin Baru"}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Mail size={14} /> Email Address
            </Label>
            <Input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="admin@assamedik.com"
            />
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Key size={14} />
              {editingId
                ? "Password Baru (Kosongkan jika tidak diganti)"
                : "Password Awal"}
            </Label>
            <Input
              type="password"
              value={formData.password || ""}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder={editingId ? "••••••••" : "minimal 6 karakter"}
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSave} className="w-full">
            Simpan Akun
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
