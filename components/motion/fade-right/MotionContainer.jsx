"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function MotionContainer({ children, className, ...rest}) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, x: -500 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.main
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true  }}
    >
      {children}
    </motion.main>
  );
}
