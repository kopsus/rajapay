"use client";

import { Button } from "@/components/ui/button";
import { IBlog } from "@/types/blog";
import { ColumnDef } from "@tanstack/react-table";
import { Eye, Pencil, Trash2 } from "lucide-react";

export const columnsBlog = (
  onEdit: (blog: IBlog) => void,
  onDelete: (id: string) => void,
  onDetail: (id: string) => void,
): ColumnDef<IBlog>[] => [
  {
    accessorKey: "title",
    header: "Judul Artikel",
    cell: ({ row }) => (
      <div className="font-semibold text-primary">{row.getValue("title")}</div>
    ),
  },
  {
    id: "actions",
    header: () => <div className="text-right">Aksi</div>,
    cell: ({ row }) => (
      <div className="flex justify-end gap-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 text-blue-500 hover:text-blue-600"
          onClick={() => onEdit(row.original)}
        >
          <Pencil className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 text-blue-500 hover:text-blue-600"
          onClick={() => onDetail(row.original.id)}
        >
          <Eye className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 text-destructive hover:bg-destructive/10"
          onClick={() => onDelete(row.original.id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    ),
  },
];
