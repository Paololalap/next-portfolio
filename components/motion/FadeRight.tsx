"use client";

import {
  ForwardRefComponent,
  HTMLMotionProps,
  motion,
  SVGMotionProps,
} from "framer-motion";
import { createElement, ReactNode, useMemo } from "react";

import { useStore } from "@/stores/toggleAnimation";

type MotionProps = HTMLMotionProps<any> | SVGMotionProps<any>;

type ElementTag = keyof JSX.IntrinsicElements;

type MotionComponent = ForwardRefComponent<any, any>;

type FadeRightProps<T extends ElementTag> = {
  children: ReactNode;
  className?: string;
  tag?: T;
  index?: number;
} & MotionProps;

const FadeRight = <T extends ElementTag = "div">({
  children,
  className,
  tag = "div" as T,
  index,
  ...props
}: FadeRightProps<T>) => {
  const { toggleAnimation } = useStore();

  const MotionComp = motion[tag as keyof typeof motion] as MotionComponent;

  const variants = useMemo(() => ({
    initial: { opacity: 0, x: -500 },
    whileInView: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3 },
    }),
  }), []);

  if (toggleAnimation) {
    return (
      <MotionComp
        className={className}
        variants={variants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        custom={index}
        {...props}
      >
        {children}
      </MotionComp>
    );
  }

  const Comp = tag;
  return createElement(Comp, { className, ...props }, children);
};

export { FadeRight };
