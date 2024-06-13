"use client";

import { cn } from "@/lib/utils";
import useStore from "@/stores/reduceMotion";

export default function Pulse() {
  const { toggleAnimation } = useStore();

  return (
    <div
      className={cn(
        "mr-2 size-2 rounded-full bg-secondary",
        toggleAnimation && "animate-pulse",
      )}
    />
  );
}
