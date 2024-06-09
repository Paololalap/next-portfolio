"use client";
import { motion } from "framer-motion";

export default function SpringFromTop({ children }) {
  return (
    <motion.div
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
    >
      {children}
    </motion.div>
  );
}
