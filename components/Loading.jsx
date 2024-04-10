import { Lobster } from "next/font/google";
import { cn } from "@/lib/utils";

const lobster = Lobster({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export default function LoadingPage() {
  return (
    <div
      className={cn(
        "absolute left-1/2 top-1/2 grid h-screen w-screen -translate-x-1/2 -translate-y-1/2 place-items-center bg-gradient-to-br from-gray-800 to-gray-950",
        lobster.className,
      )}
    >
      <p className={"mb-[10vh] w-screen pb-2 text-center text-4xl text-white"}>
        Loading...
      </p>
    </div>
  );
}
