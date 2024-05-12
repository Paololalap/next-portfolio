"use client";
import { Tilt } from "@jdion/tilt-react";
import { SKILLS } from "@/constants/SKILLS";

export default function SkillSet() {
  return (
    <div className="mt-5 grid grid-cols-3 gap-4 md:grid-cols-4">
      {SKILLS.map((skill) => (
        <Tilt
          key={skill.id}
          className={
            "group rounded-md ring-1 ring-white px-5 transition-all hover:rounded-lg hover:ring-4"
          }
        >
          {skill.icon}
        </Tilt>
      ))}
    </div>
  );
}
