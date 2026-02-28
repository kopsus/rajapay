import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlogTableWrapper from "@/components/admin/blog/table/table-wrapper";
import { blogs } from "@/data/blog";

export default function page() {
  return (
    <div className="flex flex-1 flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Blog CMS</h1>
          <p className="text-muted-foreground text-sm">
            Kelola konten artikel kamu di sini.
          </p>
        </div>
        <Link href="/admin/blog/add">
          <Button className="shadow-md">
            <Plus className="mr-2 h-4 w-4" /> Add New Post
          </Button>
        </Link>
      </div>

      <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
        <BlogTableWrapper initialData={blogs} />
      </div>
    </div>
  );
}
