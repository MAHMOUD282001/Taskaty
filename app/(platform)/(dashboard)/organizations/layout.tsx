"use client";

import { useState } from "react";
import Sidebar from "../_components/sidebar";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface IProps {
  children: React.ReactNode;
}

function OrganizationsLayout({ children }: IProps) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <main className="pt-24 md:max-w-screen-6xl mx-auto pr-4 md:px-4 h-screen">
      <div className="flex gap-x-7 h-full">
        <div
          className={cn(
            "w-12 md:w-72 shrink-0 border-r border-gray-200 p-3 transition-all duration-500",
            isMobileSidebarOpen ? "w-72" : "w-16"
          )}
        >
          <div
            onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            className={cn(
              "cursor-pointer md:hidden mb-5 flex justify-center items-center mt-5",
              isMobileSidebarOpen ? "justify-between" : "justify-center"
            )}
          >
            {isMobileSidebarOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}

            <Image
              src="/logo.svg"
              alt="logo"
              width={30}
              height={30}
              className={cn(isMobileSidebarOpen ? "block" : "hidden md:block")}
            />
          </div>
          <Sidebar
            storageKey="sidebar-state"
            onMobileClose={() => setIsMobileSidebarOpen(false)}
            isMobileSidebarOpen={isMobileSidebarOpen}
          />
        </div>
        <div className="p-3 w-full h-full flex items-center justify-center">{children}</div>
      </div>
    </main>
  );
}

export default OrganizationsLayout;
