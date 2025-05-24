"use client";

import { TOrganization } from "@/app/types";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Activity, CreditCard, Icon, Layout, Settings } from "lucide-react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

interface IProps {
  isActive: boolean;
  isExpanded: boolean;
  organization: TOrganization;
  onExpand: (id: string) => void;
  isMobileSidebarOpen?: boolean;
}

function SidebarItem({
  isActive,
  isExpanded,
  organization,
  onExpand,
  isMobileSidebarOpen,
}: IProps) {
  const router = useRouter();
  const pathname = usePathname();

  const routes = [
    {
      label: "Boards",
      href: `/organizations/${organization.id}`,
      icon: <Layout className="w-4 h-4" />,
    },
    {
      label: "Activity",
      href: `/organizations/${organization.id}/activity`,
      icon: <Activity className="w-4 h-4" />,
    },
    {
      label: "Settings",
      href: `/organizations/${organization.id}/settings`,
      icon: <Settings className="w-4 h-4" />,
    },
    {
      label: "Billing",
      href: `/organizations/${organization.id}/billing`,
      icon: <CreditCard className="w-4 h-4" />,
    },
  ];

  const handleRoute = (href: string) => {
    router.push(href);
  };

  return (
    <AccordionItem value={organization.id}>
      <AccordionTrigger
        onClick={() => onExpand(organization.id)}
        className={cn(
          "flex items-center text-start gap-x-2 p-2 text-neutral-800 rounded-md hover:bg-sky-500/10 transition no-underline hover:no-underline cursor-pointer",
          isActive && !isExpanded && "bg-sky-500/10 text-[#007AFF] ",
          "md:[&>svg]:block md:[&[data-state=open]>svg]:block md:[&[data-state=closed]>svg]:block",
          !isMobileSidebarOpen &&
            "[&>svg]:hidden [&[data-state=open]>svg]:hidden [&[data-state=closed]>svg]:hidden"
        )}
      >
        <div className="flex items-center gap-x-2">
          <div className="w-7 h-7 relative">
            <Image
              src={organization.imageUrl}
              alt="Organization"
              fill
              className="object-cover rounded-sm"
            />
          </div>
          <span
            className={cn(
              "font-semibold text-base",
              isMobileSidebarOpen ? "block" : "hidden",
              "md:block"
            )}
          >
            {organization.name}
          </span>
        </div>
      </AccordionTrigger>

      <AccordionContent>
        {routes.map((route) => (
          <div
            key={route.href}
            onClick={() => handleRoute(route.href)}
            className={cn(
              "w-full flex items-center md:justify-start md:pl-10 gap-x-2 font-normal p-2 mb-1 cursor-pointer text-neutral-800 rounded-md hover:bg-sky-500/10",
              pathname === route.href && "bg-sky-500/10 text-[#007AFF]",
              isMobileSidebarOpen ? "justify-start pl-10" : "justify-center"
            )}
          >
            {route.icon}
            <span
              className={cn(
                "font-semibold text-sm",
                isMobileSidebarOpen ? "block" : "hidden",
                "md:block"
              )}
            >
              {route.label}
            </span>
          </div>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
}

export default SidebarItem;


SidebarItem.Skileton = function Skileton() {
  return (
    <div className="flex items-center gap-x-2">
      <Skeleton className="w-10 h-10" />
      <Skeleton className="h-10 w-full" />
    </div>
  );
};