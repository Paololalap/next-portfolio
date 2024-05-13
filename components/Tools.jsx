"use client";
import { Tilt } from "@jdion/tilt-react";
import { TOOLS } from "@/constants/TOOLS";

export default function Tools() {
  return (
    <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {TOOLS.map((tool) => (
        <Tilt
          key={tool.id}
          className={
            "group rounded-md px-5 ring-1 ring-white transition-all hover:rounded-lg hover:ring-4"
          }
        >
          {tool.icon}
        </Tilt>
      ))}
    </div>
  );
}
