"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import HoverLine from "@/components/HoverLine";

export default function Header() {
  const pathname = usePathname();
  const [hoveredButton, setHoveredButton] = useState(
    pathname === "/" ? "home" : pathname === "/work" ? "work" : "projects",
  );
  const [showMenu, setShowMenu] = useState(true);

  return (
    <header className="mx-auto mt-8 max-w-2xl">
      <div className="flex items-center justify-between rounded-full border border-zinc-400 px-2 py-1 sm:flex-row sm:py-2">
        <nav className="group relative hidden items-center text-base sm:flex">
          <ul className="flex">
            <li>
              <Link
                href={"/"}
                className="group/button relative inline-flex h-8 items-center px-3 text-sm text-zinc-400 hover:no-underline focus:rounded-full focus:outline-0 focus:ring-0"
                onMouseEnter={() => setHoveredButton("home")}
              >
                <svg
                  className={
                    "mr-1 size-5 transition-all duration-500 group-hover/button:text-white"
                  }
                >
                  <use href={`./icons/sprite.svg#tabler/home-outline`} />
                </svg>
                <span className="transition-all duration-500 group-hover/button:text-white">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link
                href={"/work"}
                tabIndex={"-1"}
                onMouseEnter={() => setHoveredButton("work")}
                className="group/button relative inline-flex h-8 items-center px-3 text-sm text-zinc-400 hover:no-underline focus:rounded-full focus:outline-0 focus:ring-0"
              >
                <svg
                  className={
                    "mr-1 size-5 transition-all duration-500 group-hover/button:text-white"
                  }
                >
                  <use href={`./icons/sprite.svg#tabler/briefcase-2-outline`} />
                </svg>{" "}
                <span className="transition-all duration-500 group-hover/button:text-white">
                  Work
                </span>
              </Link>
            </li>
            <li>
              <Link
                href={"/projects"}
                tabIndex={"-1"}
                onMouseEnter={() => setHoveredButton("projects")}
                className="group/button relative inline-flex h-8 items-center px-3 text-sm text-zinc-400 hover:no-underline focus:rounded-full focus:outline-0 focus:ring-0"
              >
                <svg
                  className={
                    "mr-1 size-5 transition-all duration-500 group-hover/button:text-white"
                  }
                >
                  <use href={`./icons/sprite.svg#tabler/folder-outline`} />
                </svg>{" "}
                <span className="transition-all duration-500 group-hover/button:text-white">
                  Projects
                </span>
              </Link>
            </li>
          </ul>
          <HoverLine activeButton={hoveredButton} />
        </nav>

        <Button
          className="bg-transparent p-0 hover:bg-transparent sm:hidden"
          aria-label="menu"
          onClick={() => setShowMenu(!showMenu)}
        >
          <svg className="ml-1 size-7 text-white">
            <use href={`./icons/sprite.svg#tabler/menu-2-outline`} />
          </svg>
        </Button>

        <Link
          href={
            "https://docs.google.com/document/d/1s-nFidFVqCkBegfErJIRxrgxBYPIETfrEwpMAqsEGoc/edit"
          }
          tabIndex={"-1"}
          target="_blank"
          className="group/button group inline-flex h-8 items-center rounded-full px-3 text-sm text-zinc-400 outline outline-2 -outline-offset-1 outline-[#f1f5f9] transition-all hover:bg-[#f1f5f9] hover:no-underline focus:rounded-full focus:outline-0 focus:ring-0 sm:hover:text-black sm:hover:outline sm:hover:outline-2 sm:hover:outline-white"
        >
          <svg className="mr-1 size-5">
            <use href={`./icons/sprite.svg#tabler/file-outline`} />
          </svg>
          Resume
        </Link>
      </div>
      {showMenu || (
        <>
          <svg
            className="fixed left-0 top-0 z-20 ml-10 mt-10 size-9 cursor-pointer text-white sm:hidden"
            onClick={() => setShowMenu((prev) => !prev)}
            aria-label="exit button"
          >
            <use href={`./icons/sprite.svg#tabler/x-outline`} />
          </svg>
          <nav className="fixed left-1/2 top-1/2 z-10 grid min-h-screen w-screen -translate-x-1/2 -translate-y-1/2 place-items-center bg-gradient-to-br from-gray-800 to-gray-950 text-center text-lg text-zinc-400 sm:hidden">
            <ul className="space-y-3">
              <li>
                <Link href={"/"} onClick={() => setShowMenu((prev) => !prev)}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/work"}
                  onClick={() => setShowMenu((prev) => !prev)}
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href={"/projects"}
                  onClick={() => setShowMenu((prev) => !prev)}
                >
                  Projects
                </Link>
              </li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}
