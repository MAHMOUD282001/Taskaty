"use client";

import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useLocalStorage } from "usehooks-ts";
import SidebarItem from "./sidebar-item";
import { TOrganization } from "@/app/types";
import { cn } from "@/lib/utils";

interface IProps {
  storageKey: string;
  isMobileSidebarOpen?: boolean;
  onMobileClose?: (value: boolean) => void;
}

function Sidebar({ storageKey, isMobileSidebarOpen, onMobileClose }: IProps) {
  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
    storageKey,
    {}
  );

  const { organization: currentOrganization, isLoaded: isOrgLoaded } =
    useOrganization();

  const { userMemberships, isLoaded: isOrgListLoaded } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  const defaultAccordionValue: string[] = Object.keys(expanded).reduce(
    (acc: string[], key: string) => {
      if (expanded[key]) {
        acc.push(key);
      }
      return acc;
    },
    []
  );

  const handleExpand = (id: string) => {
    setExpanded({
      ...expanded,
      [id]: !expanded[id],
    });
  };

  if (!isOrgListLoaded || !isOrgLoaded || userMemberships.isLoading) {
    return (
      <>
        <div className="flex items-center justify-between mb-2">
          <Skeleton className="h-10 w-[50%]" />
          <Skeleton className="h-10 w-10" />
        </div>
        <div className="space-y-2">
            <SidebarItem.Skileton />
            <SidebarItem.Skileton />
            <SidebarItem.Skileton />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="font-bold text-lg text-md flex items-center mb-1">
        <span
          className={cn(
            "pl-4 hidden md:block",
            isMobileSidebarOpen ? "block" : "hidden"
          )}
        >
          Workspaces
        </span>

        <Button
          size="icon"
          variant="ghost"
          className={cn("md:ml-auto", isMobileSidebarOpen ? "ml-auto" : "ml-0")}
          asChild
        >
          <Link href="/select-org">
            <Plus />
          </Link>
        </Button>
      </div>

      <Accordion
        type="multiple"
        defaultValue={defaultAccordionValue}
      >
        {userMemberships.data.map(({ organization }) => (
          <SidebarItem
            key={organization.id}
            isActive={organization.id === currentOrganization?.id}
            isExpanded={expanded[organization.id]}
            organization={organization as TOrganization}
            onExpand={handleExpand}
            isMobileSidebarOpen={isMobileSidebarOpen}
          />
        ))}
      </Accordion>
    </>
  );
}

export default Sidebar;
