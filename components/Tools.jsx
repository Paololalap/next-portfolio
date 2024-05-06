"use client";
import { Tilt } from "@jdion/tilt-react";
import { TOOLS } from "@/constants/TOOLS";

export default function Tools() {
  return (
    <div className="mt-5 grid size-full grid-cols-3 gap-4 md:grid-cols-4">
      {TOOLS.map((tool) => (
        <Tilt
          key={tool.id}
          className={
            "group w-full rounded-md border p-5 transition-all hover:rounded-lg hover:border-4"
          }
        >
          {tool.icon}
        </Tilt>
      ))}
    </div>
  );
}
