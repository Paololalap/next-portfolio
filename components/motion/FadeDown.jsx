"use client";
import { motion } from "framer-motion";

export default function FadeDown({ children, className }) {
  return (
    <motion.div
      initial={{ y: "-100vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
