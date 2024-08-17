"use client";

import { useStore } from "@/stores/toggleAnimation";
import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

interface FadeDownProps {
  children: ReactNode;
  className?: string;
}

const FadeDown: FC<FadeDownProps> = ({ children, className }) => {
  const { toggleAnimation } = useStore();

  return toggleAnimation ? (
    <motion.div
      initial={{ y: "-100vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={className}
    >
      {children}
    </motion.div>
  ) : (
    <div className={className}>{children}</div>
  );
};

export { FadeDown };
