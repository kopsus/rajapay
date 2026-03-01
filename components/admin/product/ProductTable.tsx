import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { IProduct } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

export function ProductTable({
  products,
  onEdit,
  onDelete,
}: {
  products: IProduct[];
  onEdit: (p: IProduct) => void;
  onDelete: (id: string) => void;
}) {
  if (products.length === 0) {
    return (
      <div className="text-center py-20 border-2 border-dashed rounded-xl text-muted-foreground">
        Tidak ada produk di kategori ini.
      </div>
    );
  }

  return (
    <div className="border rounded-xl bg-white overflow-hidden shadow-sm">
      <Table>
        <TableHeader className="bg-slate-50">
          <TableRow>
            <TableHead className="w-25">Kode</TableHead>
            <TableHead>Nama Produk</TableHead>
            <TableHead>Harga</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.id}
              className="hover:bg-slate-50/50 transition-colors"
            >
              <TableCell className="font-mono text-xs text-slate-500">
                {product.kode}
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="font-semibold text-slate-800">
                    {product.nama}
                  </span>
                  <span className="text-xs text-slate-400 line-clamp-1">
                    {product.keterangan || "-"}
                  </span>
                </div>
              </TableCell>
              <TableCell className="font-bold text-primary">
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(product.harga)}
              </TableCell>
              <TableCell>
                <Badge
                  variant={
                    product.status === "Lancar" ? "default" : "secondary"
                  }
                >
                  {product.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-1">
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => onEdit(product)}
                  >
                    <Pencil size={14} className="text-slate-500" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => onDelete(product.id)}
                  >
                    <Trash2 size={14} className="text-red-500" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
