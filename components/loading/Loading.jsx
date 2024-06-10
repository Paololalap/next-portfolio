import { lobster } from "@/fonts/fonts";
import { cn } from "@/lib/utils";

export default function LoadingPage() {
  return (
    <div
      className={cn(
        lobster.variable,
        "font-lobster absolute left-1/2 top-1/2 grid h-screen w-screen -translate-x-1/2 -translate-y-1/2 place-items-center bg-background",
      )}
    >
      <p
        className={
          "mb-[10vh] w-screen pb-2 text-center text-4xl text-foreground"
        }
      >
        Loading...
      </p>
    </div>
  );
}
