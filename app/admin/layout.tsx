import { HeaderAdmin } from "@/components/admin/header";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <HeaderAdmin />
        <div className="p-8">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
