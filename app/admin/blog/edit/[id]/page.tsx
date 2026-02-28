import EditBlogClient from "@/components/admin/blog/editBlog";
import { blogs } from "@/data/blog";
// import { getBlogById } from "@/lib/action/blog";
import { notFound } from "next/navigation";

export default async function EditPostPage(props: {
  params: Promise<{ id: string }>;
}) {
  // const { id } = await props.params;

  // const [blog, categories] = await Promise.all([
  //   getBlogById(id),
  // ]);

  // if (!blog) {
  //   notFound();
  // }

  return (
    <div className="min-h-screen bg-muted/30">
      <EditBlogClient initialBlog={blogs[0]} />
    </div>
  );
}
