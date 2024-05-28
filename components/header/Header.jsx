"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import HoverLine from "../HoverLine";

export default function Header() {
  const pathname = usePathname();
  const [hoveredButton, setHoveredButton] = useState(
    pathname === "/" ? "home" : pathname === "/work" ? "work" : "projects",
  );
  const [showMenu, setShowMenu] = useState(true);

  return (
    <header className="mx-auto mt-8 max-w-2xl">
      <div className="flex items-center justify-between rounded-full border border-zinc-400 px-2 py-1 sm:flex-row">
        <nav className="group relative hidden items-center text-base sm:flex">
          <ul className="flex">
            <li>
              <Link href={"/"} tabIndex={"-1"}>
                <Button
                  variant="link"
                  size="sm"
                  aria-label="homepage"
                  className="group/button relative h-8 text-sm text-zinc-400 hover:no-underline focus:rounded-full focus:outline-0 focus:ring-0"
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
                </Button>
              </Link>
            </li>
            <li>
              <Link href={"/work"} tabIndex={"-1"}>
                <Button
                  variant="link"
                  aria-label="work page"
                  onMouseEnter={() => setHoveredButton("work")}
                  size="sm"
                  className="group/button relative h-8 text-sm text-zinc-400 transition-all hover:no-underline focus:rounded-full focus:outline-0 focus:ring-0"
                >
                  <svg
                    className={
                      "mr-1 size-5 transition-all duration-500 group-hover/button:text-white"
                    }
                  >
                    <use
                      href={`./icons/sprite.svg#tabler/briefcase-2-outline`}
                    />
                  </svg>{" "}
                  <span className="transition-all duration-500 group-hover/button:text-white">
                    Work
                  </span>
                </Button>
              </Link>
            </li>
            <li>
              <Link href={"/projects"} tabIndex={"-1"}>
                <Button
                  variant="link"
                  aria-label="projects page"
                  onMouseEnter={() => setHoveredButton("projects")}
                  size="sm"
                  className="group/button relative h-8 text-sm text-zinc-400 transition-all hover:no-underline focus:rounded-full focus:outline-0 focus:ring-0"
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
                </Button>
              </Link>
            </li>
          </ul>
          <HoverLine activeButton={hoveredButton} />
        </nav>

        <Button
          className="bg-transparent p-0 hover:bg-transparent"
          aria-label="menu"
          onClick={() => setShowMenu(!showMenu)}
        >
          <svg className="ml-1 size-7 text-white sm:hidden">
            <use href={`./icons/sprite.svg#tabler/menu-2-outline`} />
          </svg>
        </Button>

        <Link
          href={
            "https://drive.google.com/file/d/1Y0kBNwx54JOkEsnlTTD7fE6lsauZxyz2/view"
          }
          tabIndex={"-1"}
          target="_blank"
        >
          <Button
            variant="secondary"
            aria-label="resume"
            size="sm"
            className="group h-8 rounded-full outline outline-2 -outline-offset-1 outline-white transition-all hover:bg-[#f1f5f9] sm:hover:bg-inherit sm:hover:text-white sm:hover:outline sm:hover:outline-2 sm:hover:outline-white"
          >
            <svg className="mr-1 size-5">
              <use href={`./icons/sprite.svg#tabler/file-outline`} />
            </svg>
            Resume
          </Button>
        </Link>
      </div>
      <div>
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
      </div>
    </header>
  );
}
