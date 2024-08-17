"use client";

import { useEffect } from "react";
import { preload } from "react-dom";

const PreloadResources = () => {
  useEffect(() => {
    preload("/icons/sprite.svg", {
      as: "image",
    });
  }, []);

  return null;
};

export { PreloadResources };
