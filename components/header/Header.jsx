"use client";

import HoverLine from "@/components/HoverLine";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [hoveredButton, setHoveredButton] = useState(
    pathname === "/" ? "home" : pathname === "/work" ? "work" : "projects",
  );
  const [showMenu, setShowMenu] = useState(true);

  return (
    <header className="max-w-2xl mx-auto mt-8">
      <div className="flex items-center justify-between px-2 py-1 border rounded-full border-zinc-400 sm:flex-row sm:py-2">
        <nav className="relative items-center hidden text-base group sm:flex">
          <ul className="flex">
            <li>
              <Link
                href={"/"}
                className="relative inline-flex items-center h-8 px-3 text-sm group/button text-zinc-400 hover:no-underline focus:rounded-full focus:outline-0 focus:ring-0"
                onMouseEnter={() => setHoveredButton("home")}
              >
                <svg
                  className={cn(
                    "mr-1 size-5 transition-all duration-500 group-hover/button:text-white",
                    pathname === "/" && "text-white",
                  )}
                >
                  <use href={`./icons/sprite.svg#tabler/home-outline`} />
                </svg>
                <span
                  className={cn(
                    "transition-all duration-500 group-hover/button:text-white",
                    pathname === "/" && "text-white",
                  )}
                >
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link
                href={"/work"}
                tabIndex={"-1"}
                onMouseEnter={() => setHoveredButton("work")}
                className="relative inline-flex items-center h-8 px-3 text-sm group/button text-zinc-400 hover:no-underline focus:rounded-full focus:outline-0 focus:ring-0"
              >
                <svg
                  className={cn(
                    "mr-1 size-5 transition-all duration-500 group-hover/button:text-white",
                    pathname === "/work" && "text-white",
                  )}
                >
                  <use href={`./icons/sprite.svg#tabler/briefcase-2-outline`} />
                </svg>{" "}
                <span
                  className={cn(
                    "transition-all duration-500 group-hover/button:text-white",
                    pathname === "/work" && "text-white",
                  )}
                >
                  Work
                </span>
              </Link>
            </li>
            <li>
              <Link
                href={"/projects"}
                tabIndex={"-1"}
                onMouseEnter={() => setHoveredButton("projects")}
                className="relative inline-flex items-center h-8 px-3 text-sm group/button text-zinc-400 hover:no-underline focus:rounded-full focus:outline-0 focus:ring-0"
              >
                <svg
                  className={cn(
                    "mr-1 size-5 transition-all duration-500 group-hover/button:text-white",
                    pathname === "/projects" && "text-white",
                  )}
                >
                  <use href={`./icons/sprite.svg#tabler/folder-outline`} />
                </svg>{" "}
                <span
                  className={cn(
                    "transition-all duration-500 group-hover/button:text-white",
                    pathname === "/projects" && "text-white",
                  )}
                >
                  Projects
                </span>
              </Link>
            </li>
          </ul>
          <HoverLine activeButton={hoveredButton} />
        </nav>

        <Button
          className="p-0 bg-transparent hover:bg-transparent sm:hidden"
          aria-label="menu"
          onClick={() => setShowMenu(!showMenu)}
        >
          <svg className="ml-1 text-white size-7">
            <use href={`./icons/sprite.svg#tabler/menu-2-outline`} />
          </svg>
        </Button>

        <Link
          href={
            "https://docs.google.com/document/d/1s-nFidFVqCkBegfErJIRxrgxBYPIETfrEwpMAqsEGoc/edit"
          }
          tabIndex={"-1"}
          target="_blank"
        >
          <Button
            variant="gooeyLeft"
            className="h-8 px-3 rounded-full bg-inherit"
            ariaLabel="Resume"
          >
            <svg className="mr-1 size-5">
              <use href={`./icons/sprite.svg#tabler/file-outline`} />
            </svg>
            Resume
          </Button>
        </Link>
      </div>
      {showMenu || (
        <>
          <svg
            className="fixed top-0 left-0 z-20 mt-10 ml-10 text-white cursor-pointer size-9 sm:hidden"
            onClick={() => setShowMenu((prev) => !prev)}
            aria-label="exit button"
          >
            <use href={`./icons/sprite.svg#tabler/x-outline`} />
          </svg>
          <nav className="fixed z-10 grid w-screen min-h-screen text-lg text-center -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 place-items-center bg-gradient-to-br from-gray-800 to-gray-950 text-zinc-400 sm:hidden">
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
