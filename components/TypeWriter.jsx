"use client";
import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";

export default function Typewriter({ texts, className }) {
  const [displayText, setDisplayText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < texts[currentTextIndex].length) {
        setDisplayText(
          (prevText) => prevText + texts[currentTextIndex][currentIndex],
        );
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        // Move to the next text after a delay
        setTimeout(() => {
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setCurrentIndex(0);
          setDisplayText("");
        }, 1500); // Delay before displaying the next text
      }
    }, 100); // Adjust the speed of typing here (milliseconds)

    // Clear timeout on component unmount
    return () => clearTimeout(timer);
  }, [texts, currentIndex, currentTextIndex]);

  return (
    <span
      className={cn(
        displayText
          ? "line-clamp-1	text-[18px] text-gray-400"
          : "text-transparent",
        className,
      )}
    >
      {displayText ? displayText : "|"}
    </span>
  );
}
