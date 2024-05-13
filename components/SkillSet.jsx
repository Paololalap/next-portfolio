"use client";
import { Tilt } from "@jdion/tilt-react";
import { SKILLS } from "@/constants/SKILLS";

export default function SkillSet() {
  return (
    <ul className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {SKILLS.map((skill) => (
        <li key={skill.id}>
          <Tilt
            className={
              "group hidden rounded-md px-5 ring-1 ring-white transition-all hover:rounded-lg hover:ring-4 md:block"
            }
          >
            {skill.icon}
          </Tilt>
          <div
            className={
              "group block rounded-md px-5 ring-1 ring-white transition-all hover:rounded-lg hover:ring-4 md:hidden"
            }
          >
            {skill.icon}
          </div>
        </li>
      ))}
    </ul>
  );
}
