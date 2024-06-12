'use client'

import useStore from "@/app/_store";
import { cn } from "@/lib/utils";

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
