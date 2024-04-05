"use client";
import { Tilt } from "@jdion/tilt-react";

export default function Tools() {
  return (
    <div className="mt-5 grid grid-cols-4 gap-4">
      {/* VSCode */}
      <Tilt className="group w-full rounded-md border p-5 transition-all hover:rounded-lg hover:border-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-full text-white group-hover:text-[#0878ba]"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M16 3v18l4 -2.5v-13z" />
          <path d="M9.165 13.903l-4.165 3.597l-2 -1l4.333 -4.5m1.735 -1.802l6.932 -7.198v5l-4.795 4.141" />
          <path d="M16 16.5l-11 -10l-2 1l13 13.5" />
        </svg>
      </Tilt>

      {/* Vercel */}
      <Tilt className="w-full rounded-md border p-5 transition-all hover:rounded-lg hover:border-4 hover:bg-[#111] hover:invert">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-full text-white"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 19h18l-9 -15z" />
        </svg>
      </Tilt>
    </div>
  );
}
