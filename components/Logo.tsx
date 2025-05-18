import { cn } from "@/lib/utils";
import { Comfortaa } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const textFont = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

function Logo() {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition hidden md:flex md:items-center md:gap-2">
        <Image src="/logo.svg" alt="logo" width={30} height={30} />
        <p className={cn("text-lg text-neutral-800", textFont.className)}>
          Taskaty
        </p>
      </div>
    </Link>
  );
}

export default Logo;
