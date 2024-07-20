"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SocialLinksButton = ({ children, className, ...props }) => {
  return (
    <Button {...props} className={cn(className)} variant="linkHover1">
      {children}
    </Button>
  );
};

export { SocialLinksButton };
