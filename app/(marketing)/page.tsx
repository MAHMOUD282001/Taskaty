import Link from "next/link";
import localFont from "next/font/local";
import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import { cn } from "@/lib/utils";
import { Comfortaa } from "next/font/google";

const headingFont = localFont({ src: "../../public/fonts/font.woff2" });

const textFont = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col gap-4">
      <div
        className={cn(
          "flex items-center justify-center flex-col gap-4",
          headingFont.className
        )}
      >
        <div className="p-4 border rounded-md shadow-sm flex items-center gap-2 bg-amber-100 text-amber-800 uppercase text-sm sm:text-xl">
          <Medal className="w-6 h-6" />
          No 1 task management app
        </div>

        <h1 className="text-2xl sm:text-4xl font-bold text-neutral-800">
          Taskaty helps team move
        </h1>

        <div className="text-2xl sm:text-4xl bg-gradient-to-r from-[#007AFF] to-[#312ECB] text-white px-4 py-2 rounded-md">
          Productivity forward
        </div>
      </div>

      <div
        className={cn(
          "text-sm md:text-lg text-neutral-500 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        Collebrate, manage projects, and reach new productivity peaks. From high
        rises to the office, Taskaty helps you move your team forward - whether
        you're remote or in person.
      </div>

      <Button variant="primary" className="mt-4" size="lg" asChild>
        <Link href="/sign-up">Get started for free</Link>
      </Button>
    </div>
  );
}
