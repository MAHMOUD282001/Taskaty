import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";

export function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 w-full z-50 h-24 bg-white flex items-center shadow-sm border-b px-4">
      <div className="md:max-w-screen-2xl mx-auto flex items-center justify-between w-full">
        <div className="flex items-center md:gap-5">
          <Logo />

          <Button variant={"primary"} size="sm" className="hidden md:block">
            Create
          </Button>

          <Button variant={"primary"} size="sm" className="md:hidden">
            <Plus />
          </Button>
        </div>

        <div className="flex items-center gap-5">
          <OrganizationSwitcher
            hidePersonal
            afterCreateOrganizationUrl={"/organizations/:id"}
            afterLeaveOrganizationUrl="/"
            afterSelectOrganizationUrl={"/organizations/:id"}
            appearance={{
              elements: {
                rootBox: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                },
              },
            }}
          />

          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: {
                  width: "30px",
                  height: "30px",
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
