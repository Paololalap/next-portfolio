"use client";

import useStore from "@/app/_store";
import { motion } from "framer-motion";

export default function FadeRight({
  children,
  className,
  tag = "div",
  index,
  ...props
}) {
  const { toggleAnimation } = useStore();

  const Comp = motion[tag];

  return toggleAnimation ? (
    <Comp
      className={className}
      variants={{
        initial: { opacity: 0, x: -500 },
        whileInView: (index) => ({
          opacity: 1,
          x: 0,
          transition: { delay: index >= 3 ? 0 : index * 0.3 },
        }),
      }}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      custom={index}
      {...props}
    >
      {children}
    </Comp>
  ) : (
    <Comp className={className} {...props}>
      {children}
    </Comp>
  );
}
