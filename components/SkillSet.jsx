"use client";
import { Tilt } from "@jdion/tilt-react";
import { SKILLS } from "@/constants/SKILLS";

export default function SkillSet() {
  return (
    <ul className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {SKILLS.map((skill, index) => (
        <li key={index}>
          <Tilt
            className={
              "group rounded-md px-5 ring-1 ring-white transition-all hover:rounded-lg hover:ring-4"
            }
          >
            <svg className={"inline size-full self-center text-white"}>
              {skill.icon}
            </svg>
          </Tilt>
        </li>
      ))}
    </ul>
  );
}
