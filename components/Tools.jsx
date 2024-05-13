"use client";
import { Tilt } from "@jdion/tilt-react";
import { TOOLS } from "@/constants/TOOLS";

export default function Tools() {
  return (
    <ul className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {TOOLS.map((tool, index) => (
        <li key={index}>
          <Tilt
            className={
              "group hidden rounded-md px-5 ring-1 ring-white transition-all hover:rounded-lg hover:ring-4 md:block"
            }
          >
            <svg className={"inline size-full self-center text-white"}>
              {tool.icon}
            </svg>
          </Tilt>
          <div
            className={
              "group rounded-md px-5 ring-1 ring-white transition-all hover:rounded-lg hover:ring-4 md:hidden"
            }
          >
            <svg className={"inline size-full self-center text-white"}>
              {tool.icon}
            </svg>
          </div>
        </li>
      ))}
    </ul>
  );
}
