"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SocialLinksButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const SocialLinksButton: React.FC<SocialLinksButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Button {...props} className={cn(className)} variant="linkHover1">
      {children}
    </Button>
  );
};

export { SocialLinksButton };
