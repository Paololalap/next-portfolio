"use client";
import { Tilt } from "@jdion/tilt-react";

export default function Tools() {
  return (
    <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      <Tilt
        className={
          "group rounded-md px-5 ring-1 ring-white transition-all hover:rounded-lg hover:ring-4"
        }
      >
        <svg className={"inline size-full self-center text-white"}>
          <use
            href={`./icons/homepage-sprite.svg#tabler/brand-vscode-outline`}
          />
        </svg>
      </Tilt>
      <Tilt
        className={
          "group rounded-md px-5 ring-1 ring-white transition-all hover:rounded-lg hover:ring-4"
        }
      >
        <svg className={"inline size-full self-center text-white"}>
          <use
            href={`./icons/homepage-sprite.svg#tabler/brand-vercel-outline`}
          />
        </svg>
      </Tilt>
      <Tilt
        className={
          "group rounded-md px-5 ring-1 ring-white transition-all hover:rounded-lg hover:ring-4"
        }
      >
        <svg className={"inline size-full self-center text-white"}>
          <use
            href={`./icons/homepage-sprite.svg#tabler/brand-gitlab-outline`}
          />
        </svg>
      </Tilt>
      <Tilt
        className={
          "group rounded-md px-5 ring-1 ring-white transition-all hover:rounded-lg hover:ring-4"
        }
      >
        <svg className={"inline size-full self-center text-white"}>
          <use
            href={`./icons/homepage-sprite.svg#tabler/brand-tabler-outline`}
          />
        </svg>
      </Tilt>
    </div>
  );
}
