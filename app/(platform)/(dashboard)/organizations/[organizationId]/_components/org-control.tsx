"use client";

import { useOrganizationList } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import { useEffect } from "react";

function OrgControl() {
  const { setActive } = useOrganizationList();
  const { organizationId } = useParams();
  
  useEffect(() => {
    if (!setActive) return;

    setActive({
      organization: organizationId as string,
    });
  }, [setActive, organizationId]);

  return null;
}

export default OrgControl;
