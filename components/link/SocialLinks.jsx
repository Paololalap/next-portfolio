'use client'
import { cn } from "@/lib/utils";
import useStore from "@/stores/toggleAnimation";
import Link from "next/link";

export default function SocialLinks({ children, className, ...props }) {
  const { toggleAnimation } = useStore();
  return (
    <Link
      className={cn(className, !toggleAnimation && "transition-none")}
      {...props}
    >
      {children}
    </Link>
  );
}
