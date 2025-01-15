import React, { ReactNode } from "react";
import { SidebarNav } from "@/components/back/side-bar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function BackLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <SidebarNav />
        <div className="w-full">{children}</div>
      </div>
    </SidebarProvider>
  );
}
