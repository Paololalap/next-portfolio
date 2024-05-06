"use client";
import { Tilt } from "@jdion/tilt-react";
import { SKILLS } from "@/constants/SKILLS";

export default function SkillSet() {
  return (
    <div className="mt-5 grid size-full grid-cols-3 gap-4 md:grid-cols-4">
      {SKILLS.map((skill) => (
        <Tilt
          key={skill.id}
          className={
            "group w-full rounded-md border p-5 transition-all hover:rounded-lg hover:border-4"
          }
        >
          {skill.icon}
        </Tilt>
      ))}
    </div>
  );
}
