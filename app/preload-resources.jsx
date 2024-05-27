"use client";

import ReactDOM from "react-dom";

const resources = [
  "/icons/homepage-sprite.svg",
  "/icons/header-sprite.svg",
  "/icons/projects-page-sprite.svg",
];

export function PreloadResources() {
  resources.forEach((resource) => {
    ReactDOM.preload(resource, { as: "image" });
  });
  return null;
}
