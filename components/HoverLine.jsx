"use client";

import { cn } from "@/lib/utils";

export default function HoverLine({ className, activeButton }) {
  const getPosition = () => {
    switch (activeButton) {
      case "home":
        return "left-[17%] w-[23%]";
      case "work":
        return "left-[48%] w-[21%]";
      case "projects":
        return "left-[81%] w-[29%]";
      default:
        return "hidden";
    }
  };

  return (
    <span
      className={cn(
        "absolute top-7 h-[2px] w-[30%] -translate-x-1/2 bg-primary transition-all duration-500",
        className,
        getPosition(),
      )}
    ></span>
  );
}
