"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function SocialLinksButton({ children, className, ...props }) {
  return (
    <Button {...props} className={cn(className)} variant="linkHover1">
      {children}
    </Button>
  );
}
