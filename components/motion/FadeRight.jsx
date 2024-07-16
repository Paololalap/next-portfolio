"use client";

import useStore from "@/stores/toggleAnimation";
import { motion } from "framer-motion";

export default function FadeRight({
  children,
  className,
  tag = "div",
  index,
  ...props
}) {
  const { toggleAnimation } = useStore();

  const MotionComp = motion[tag];
  const Comp = tag;

  return toggleAnimation ? (
    <MotionComp
      className={className}
      variants={{
        initial: { opacity: 0, x: -500 },
        whileInView: (index) => ({
          opacity: 1,
          x: 0,
          transition: { delay: index * 0.3 },
        }),
      }}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      custom={index}
      {...props}
    >
      {children}
    </MotionComp>
  ) : (
    <Comp className={className} {...props}>
      {children}
    </Comp>
  );
}
