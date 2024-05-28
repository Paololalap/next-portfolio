"use client";

import { useEffect } from "react";
import ReactDOM from "react-dom";

export function PreloadResources() {
  useEffect(() => {
    ReactDOM.preload("/icons/sprite.svg", {
      as: "image",
    });
  }, []);

  return null;
}
