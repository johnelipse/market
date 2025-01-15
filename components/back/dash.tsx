import React from "react";
import { OverviewCards } from "@/components/back/over-view-cards";
import { RecentOrders } from "@/components/back/recent-orders";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <div>
        <SidebarInset>
          <main className="flex-1 space-y-6 p-6">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome back to your store overview
              </p>
            </div>
            <OverviewCards />
            <RecentOrders />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
