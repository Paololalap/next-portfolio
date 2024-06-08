"use client";

import { SKILLS } from "@/constants/SKILLS.js";
import { Tilt } from "@jdion/tilt-react";

export default function SkillSet() {
  return (
    <ul className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {SKILLS.map((skill, index) => (
        <li key={index}>
          <Tilt
            className={
              "group hidden rounded-md px-5 ring-1 ring-white transition-all hover:rounded-lg hover:ring-4 md:block"
            }
          >
            <svg className={"inline size-full self-center text-white"}>
              {skill.icon}
            </svg>
          </Tilt>
          <div
            className={
              "group rounded-md px-5 ring-1 ring-white transition-all hover:rounded-lg hover:ring-4 md:hidden"
            }
          >
            <svg className={"inline size-full self-center text-white"}>
              {skill.icon}
            </svg>
          </div>
        </li>
      ))}
    </ul>
  );
}
