"use client";

import { cn } from "@/lib/utils";
import { useStore } from "@/stores/toggleAnimation";
import Link, { LinkProps } from "next/link";
import { FC, ReactNode } from "react";

interface SocialLinksProps extends LinkProps {
  children: ReactNode;
  className?: string;
  target?: string;
  tabIndex?: number;
}

const SocialLinks: FC<SocialLinksProps> = ({
  children,
  className,
  ...props
}) => {
  const { toggleAnimation } = useStore();
  return (
    <Link
      className={cn(className, !toggleAnimation && "transition-none")}
      {...props}
    >
      {children}
    </Link>
  );
};

export { SocialLinks };
