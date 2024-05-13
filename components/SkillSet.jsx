"use client";
import { Tilt } from "@jdion/tilt-react";

export default function SkillSet() {
  return (
    <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      <Tilt
        className={
          "group grid place-items-center rounded-md px-5 ring-1 ring-white transition-all hover:rounded-lg hover:ring-4"
        }
      >
        <svg className={"inline size-full self-center text-white"}>
          <use
            href={`./icons/homepage-sprite.svg#tabler/brand-react-outline`}
          />
        </svg>
      </Tilt>
      <Tilt
        className={
          "group grid place-items-center rounded-md px-5 ring-1 ring-white transition-all hover:rounded-lg hover:ring-4"
        }
      >
        <svg className={"inline size-full self-center text-white"}>
          <use
            href={`./icons/homepage-sprite.svg#tabler/brand-nextjs-outline`}
          />
        </svg>
      </Tilt>
      <Tilt
        className={
          "group grid place-items-center rounded-md px-5 ring-1 ring-white transition-all hover:rounded-lg hover:ring-4"
        }
      >
        <svg className={"inline size-full self-center text-white"}>
          <use
            href={`./icons/homepage-sprite.svg#tabler/brand-tailwind-outline`}
          />
        </svg>
      </Tilt>
      <Tilt
        className={
          "group grid place-items-center rounded-md px-5 ring-1 ring-white transition-all hover:rounded-lg hover:ring-4"
        }
      >
        <svg className={"inline size-full self-center text-white"}>
          <use
            href={`./icons/homepage-sprite.svg#tabler/brand-git-outline`}
          />
        </svg>
      </Tilt>
      <Tilt
        className={
          "group grid place-items-center rounded-md px-5 ring-1 ring-white transition-all hover:rounded-lg hover:ring-4"
        }
      >
        <svg className={"inline size-full self-center text-white"}>
          <use
            href={`./icons/homepage-sprite.svg#tabler/brand-mongodb-outline`}
          />
        </svg>
      </Tilt>
      <Tilt
        className={
          "group grid place-items-center rounded-md px-5 ring-1 ring-white transition-all hover:rounded-lg hover:ring-4"
        }
      >
        <svg className={"inline size-full self-center text-white"}>
          <use
            href={`./icons/homepage-sprite.svg#tabler/brand-firebase-outline`}
          />
        </svg>
      </Tilt>
      <Tilt
        className={
          "group grid place-items-center rounded-md px-5 ring-1 ring-white transition-all hover:rounded-lg hover:ring-4"
        }
      >
        <svg className={"inline size-full self-center text-white"}>
          <use
            href={`./icons/homepage-sprite.svg#tabler/brand-css3-outline`}
          />
        </svg>
      </Tilt>
      <Tilt
        className={
          "group grid place-items-center rounded-md px-5 ring-1 ring-white transition-all hover:rounded-lg hover:ring-4"
        }
      >
        <svg className={"inline size-full self-center text-white"}>
          <use
            href={`./icons/homepage-sprite.svg#tabler/brand-html5-outline`}
          />
        </svg>
      </Tilt>
      <Tilt
        className={
          "group grid place-items-center rounded-md px-5 ring-1 ring-white transition-all hover:rounded-lg hover:ring-4"
        }
      >
        <svg className={"inline size-full self-center text-white"}>
          <use
            href={`./icons/homepage-sprite.svg#tabler/brand-nodejs-outline`}
          />
        </svg>
      </Tilt>
      <Tilt
        className={
          "group grid place-items-center rounded-md px-5 ring-1 ring-white transition-all hover:rounded-lg hover:ring-4"
        }
      >
        <svg className={"inline size-full self-center text-white"}>
          <use
            href={`./icons/homepage-sprite.svg#tabler/brand-npm-outline`}
          />
        </svg>
      </Tilt>
    </div>
  );
}
