"use client";
import { motion } from "framer-motion";

export default function SpringFromLeft({ children, className }) {
  return (
    <motion.main
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ delay: 0.5}}
      className={className}
    >
      {children}
    </motion.main>
  );
}
