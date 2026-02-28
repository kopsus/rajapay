"use client";

import { useRouter } from "next/navigation";
import { DataTableBlog } from "@/components/admin/blog/table/data-table";
import { columnsBlog } from "@/components/admin/blog/table/columns";
import { IBlog } from "@/types/blog";

export default function BlogTableWrapper({
  initialData,
}: {
  initialData: IBlog[];
}) {
  const router = useRouter();

  const handleEdit = (blog: IBlog) => {
    router.push(`/admin/blog/edit/${blog.id}`);
  };

  const handleDetail = (id: string) => {
    router.push(`/admin/blog/${id}`);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Yakin ingin menghapus artikel ini?")) {
      // const res = await deleteBlog(id);
      // if (res.success) {
      //   router.refresh();
      // }
    }
  };

  return (
    <DataTableBlog
      columns={columnsBlog(handleEdit, handleDelete, handleDetail)}
      data={initialData}
    />
  );
}
