"use client";

import useStore from "@/app/_store";
import { motion } from "framer-motion";

export default function MotionItem2({ children, className }) {
  const { toggleAnimation } = useStore();
  const item = {
    hidden: { x: -500, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { delay: 0.3 } },
  };

  return toggleAnimation ? (
    <motion.div
      variants={item}
      initial="hidden"
      animate="show"
      className={className}
    >
      {children}
    </motion.div>
  ) : (
    <div className={className}>{children}</div>
  );
}
