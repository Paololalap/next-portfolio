"use client";
import { motion } from "framer-motion";

export default function FadeDown({ children }) {
  return (
    <motion.div
      initial={{ y: "-100vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      {children}
    </motion.div>
  );
}
