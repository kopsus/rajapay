import EditBlogClient from "@/components/admin/blog/editBlog";
import { getBlogById } from "@/lib/action/blog";
import { notFound } from "next/navigation";

export default async function EditPostPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;
  const [blog] = await Promise.all([getBlogById(id)]);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <EditBlogClient initialBlog={blog} />
    </div>
  );
}
