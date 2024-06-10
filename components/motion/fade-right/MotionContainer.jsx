"use client";
import { motion } from "framer-motion";

export default function MotionContainer({
  children,
  className,
  transition = {},
  initial = {},
  animate = {},
}) {
  return (
    <motion.main
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {children}
    </motion.main>
  );
}
