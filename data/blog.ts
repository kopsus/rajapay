import { IBlog } from "@/types/blog";

export const blogs: IBlog[] = [
  {
    id: "1",
    title: "Memulai dengan Next.js 14",
    content:
      "Next.js 14 membawa banyak peningkatan performa dan developer experience. Dengan App Router, Server Actions, dan optimasi terbaru, membangun aplikasi modern menjadi lebih mudah dan cepat.",
    createdAt: new Date("2025-01-10T08:00:00Z"),
    updatedAt: new Date("2025-01-10T08:00:00Z"),
  },
  {
    id: "2",
    title: "Memahami React Server Components",
    content:
      "React Server Components memungkinkan rendering di server tanpa mengirim seluruh JavaScript ke client. Ini membantu meningkatkan performa dan mengurangi bundle size secara signifikan.",
    createdAt: new Date("2025-01-15T10:30:00Z"),
    updatedAt: new Date("2025-01-16T09:00:00Z"),
  },
  {
    id: "3",
    title: "Tips Styling dengan Tailwind CSS",
    content:
      "Tailwind CSS memudahkan developer untuk membuat UI yang konsisten dan responsif. Dengan utility-first approach, kamu bisa membangun tampilan tanpa harus menulis CSS custom terlalu banyak.",
    createdAt: new Date("2025-01-20T13:45:00Z"),
    updatedAt: new Date("2025-01-22T11:20:00Z"),
  },
  {
    id: "4",
    title: "Membangun REST API dengan Node.js",
    content:
      "Node.js sangat populer untuk membangun REST API. Dengan Express.js atau framework lain, kamu dapat dengan cepat membuat endpoint yang scalable dan mudah dikelola.",
    createdAt: new Date("2025-01-25T07:15:00Z"),
    updatedAt: new Date("2025-01-25T07:15:00Z"),
  },
  {
    id: "5",
    title: "Optimasi SEO pada Aplikasi Web Modern",
    content:
      "SEO tetap menjadi faktor penting dalam pengembangan web. Pastikan menggunakan metadata yang tepat, struktur heading yang benar, serta optimasi performa untuk meningkatkan peringkat di mesin pencari.",
    createdAt: new Date("2025-02-01T09:00:00Z"),
    updatedAt: new Date("2025-02-05T14:10:00Z"),
  },
];
