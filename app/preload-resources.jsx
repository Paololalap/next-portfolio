"use client";

import { useEffect } from "react";
import ReactDOM from "react-dom";

const PreloadResources = () => {
  useEffect(() => {
    ReactDOM.preload("/icons/sprite.svg", {
      as: "image",
    });
  }, []);

  return null;
};

export { PreloadResources };
