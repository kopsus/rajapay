import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteAdmin, IAdmin } from "@/lib/action/auth";
import { Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface ITableAdmin {
  initialData: IAdmin[];
  setEditingId: (editingId: string | null) => void;
  setFormData: (formData: IAdmin) => void;
  setIsOpen: (isOpen: boolean) => void;
}

export const TableAdmin = ({
  initialData,
  setEditingId,
  setFormData,
  setIsOpen,
}: ITableAdmin) => {
  const router = useRouter();
  return (
    <Table>
      <TableHeader className="bg-slate-50">
        <TableRow>
          <TableHead>Email Admin</TableHead>
          {/* <TableHead>Dibuat Pada</TableHead> */}
          <TableHead className="text-right">Aksi</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {initialData.map((admin) => (
          <TableRow key={admin.id}>
            <TableCell className="font-medium">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                  {admin.email[0].toUpperCase()}
                </div>
                {admin.email}
              </div>
            </TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end gap-2">
                <Button
                  size="icon"
                  onClick={() => {
                    setEditingId(admin.id);
                    setFormData(admin);
                    setIsOpen(true);
                  }}
                >
                  <Pencil size={15} />
                </Button>
                <Button
                  size="icon"
                  variant="destructive"
                  onClick={async () => {
                    if (confirm("Hapus admin ini?")) {
                      await deleteAdmin(admin.id);
                      router.refresh();
                    }
                  }}
                >
                  <Trash2 size={15} />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
