"use client";

import { FC, useEffect, useState, useCallback, useMemo } from "react";

import { cn } from "@/lib/utils";

interface TypewriterProps {
  texts: string[];
  className?: string;
}

const Typewriter: FC<TypewriterProps> = ({ texts, className }) => {
  const [displayText, setDisplayText] = useState<string>("");
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [reverseMode, setReverseMode] = useState<boolean>(false);

  const updateText = useCallback(() => {
    if (!reverseMode && currentIndex < texts[currentTextIndex].length) {
      setDisplayText((prevText) => prevText + texts[currentTextIndex][currentIndex]);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else if (!reverseMode && currentIndex === texts[currentTextIndex].length) {
      setTimeout(() => {
        setReverseMode(true);
        setCurrentIndex((prevIndex) => prevIndex - 1);
      }, 1000);
    } else if (reverseMode && currentIndex >= 0) {
      setDisplayText((prevText) => prevText.slice(0, -1));
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setCurrentIndex(0);
      setDisplayText("");
      setReverseMode(false);
    }
  }, [texts, currentIndex, currentTextIndex, reverseMode]);

  useEffect(() => {
    const timer = setTimeout(updateText, 100);
    return () => clearTimeout(timer);
  }, [updateText]);

  const displayClass = useMemo(() => 
    cn(
      displayText
        ? "line-clamp-1 text-[18px] text-muted-foreground transition-all"
        : "text-transparent",
      className
    ),
    [displayText, className]
  );

  return (
    <span className={displayClass}>
      {displayText ? displayText : texts[currentTextIndex].charAt(0)}
    </span>
  );
};

export { Typewriter };
