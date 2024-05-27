"use client";

import { RESOURCES } from "@/constants/RESOURCES.js";
import ReactDOM from "react-dom";

export function PreloadResources() {
  RESOURCES.forEach((resource) => {
    ReactDOM.preload(resource, { as: "image" });
  });
  return null;
}
