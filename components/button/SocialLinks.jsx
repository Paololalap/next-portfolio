"use client";

import useStore from "@/app/_store";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function SocialLinksButton({ children, ...props }) {
  const { toggleAnimation } = useStore();
  return (
    <Button {...props} className={cn(!toggleAnimation && "px-0 after:transition-none", 'px-0')} variant="linkHover1">
      {children}
    </Button>
  );
}
