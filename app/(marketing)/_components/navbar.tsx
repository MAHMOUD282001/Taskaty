import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 w-full z-50 h-16 bg-white flex items-center shadow-sm border-b px-4">
      <div className="md:max-w-screen-2xl mx-auto flex items-center justify-between w-full">
        <Logo />

        <div className="space-x-4 md:block md:w-auto flex justify-between items-center w-full">
          <Button size="sm" variant={"outline"} asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
          
          <Button size="sm" asChild>
            <Link href="/register">Get Taskaty for free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
