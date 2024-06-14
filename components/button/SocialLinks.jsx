"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useStore from "@/stores/toggleAnimation";

export default function SocialLinksButton({ children, className, ...props }) {
  const { toggleAnimation } = useStore();
  return (
    <Button
      {...props}
      className={cn(className, !toggleAnimation && "after:transition-none")}
      variant="linkHover1"
    >
      {children}
    </Button>
  );
}
