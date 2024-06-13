"use client";

import { ROLES } from "@/constants/ROLES";
import { cn } from "@/lib/utils";
import useStore from "@/stores/reduceMotion";
import { useEffect, useState } from "react";

export default function Typewriter({ texts, className }) {
  const { toggleAnimation } = useStore();
  const [displayText, setDisplayText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reverseMode, setReverseMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!reverseMode && currentIndex < texts[currentTextIndex].length) {
        // Typing forward
        setDisplayText(
          (prevText) => prevText + texts[currentTextIndex][currentIndex],
        );
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else if (
        !reverseMode &&
        currentIndex === texts[currentTextIndex].length
      ) {
        // All characters displayed, switch to reverse mode
        setTimeout(() => {
          setReverseMode(true);
          setCurrentIndex((prevIndex) => prevIndex - 1);
        }, 1000);
      } else if (reverseMode && currentIndex >= 0) {
        // Typing in reverse
        setDisplayText((prevText) => prevText.slice(0, -1));
        setCurrentIndex((prevIndex) => prevIndex - 1);
      } else {
        // Move to the next text after a delay and reset
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setCurrentIndex(0);
        setDisplayText("");
        setReverseMode(false); // Reset reverse mode
      }
    }, 100); // Adjust the speed of typing here (milliseconds)

    // Clear timeout on component unmount
    return () => clearTimeout(timer);
  }, [texts, currentIndex, currentTextIndex, reverseMode]);

  if (toggleAnimation) {
    return (
      <span
        className={cn(
          displayText
            ? "line-clamp-1 text-[18px] text-muted-foreground transition-all"
            : "text-transparent",
          className,
        )}
      >
        {displayText ? displayText : texts[currentTextIndex].charAt(0)}
      </span>
    );
  } else {
    return (
      <div
        className={cn(
          "line-clamp-1 text-[18px] text-muted-foreground",
          className,
        )}
      >
        <p>{ROLES[0]}</p>
      </div>
    );
  }
}
