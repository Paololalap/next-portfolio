"use client";

import useStore from "@/app/_store";
import { motion } from "framer-motion";

export default function MotionItem({
  children,
  className,
  Tag = "div",
  ...props
}) {
  const { toggleAnimation } = useStore();

  const childVariants = {
    hidden: { opacity: 0, x: -500 },
    show: { opacity: 1, x: 0 },
  };

  const Comp = motion[Tag];

  return toggleAnimation ? (
    <Comp
      className={className}
      variants={childVariants}
      {...props}
    >
      {children}
    </Comp>
  ) : (
    <div className={className}>{children}</div>
  );
}
