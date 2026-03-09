"use client";

import { LogOut } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "../ui/sidebar";
import { Button } from "../ui/button";
import { logout } from "@/lib/action/auth";
import { useRouter } from "next/navigation";

export const HeaderAdmin = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };
  return (
    <div className="flex items-center justify-between px-4 border-b">
      <header className="flex h-16 shrink-0 items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
      </header>
      <Button
        variant="ghost"
        size="sm"
        onClick={handleLogout}
        className="text-red-500 hover:text-red-700 hover:bg-red-50 gap-2 rounded-full"
      >
        <LogOut size={18} />
        <span className="text-xs font-semibold">Keluar</span>
      </Button>
    </div>
  );
};
