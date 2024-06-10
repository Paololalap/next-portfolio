"use client";

import HoverLine from "@/components/HoverLine";
import FadeDown from "@/components/motion/FadeDown";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [hoveredButton, setHoveredButton] = useState(
    pathname === "/" ? "home" : pathname === "/work" ? "work" : "projects",
  );
  const [showMenu, setShowMenu] = useState(true);
  const [toggleAnimation, setToggleAnimation] = useState(
    localStorage.getItem("toggleAnimation") === "true",
  );

  useEffect(() => {
    localStorage.setItem("toggleAnimation", toggleAnimation.toString());
  }, [toggleAnimation]);

  return (
    <header className="mx-auto mt-8 max-w-2xl">
      <FadeDown className="flex items-center gap-x-2">
        <div className="flex flex-1 items-center justify-between rounded-full border border-border px-2 py-1 sm:flex-row sm:py-2">
          <nav className="group relative hidden items-center text-base sm:flex">
            <ul className="flex">
              <li>
                <Link
                  href={"/"}
                  className="group/button relative inline-flex h-8 items-center px-3 text-sm text-foreground hover:no-underline focus:rounded-full focus:outline-0 focus:ring-0"
                  onMouseEnter={() => setHoveredButton("home")}
                >
                  <svg
                    className={cn(
                      "mr-1 size-5 transition-all duration-500 group-hover/button:text-foreground",
                      pathname === "/" && "text-foreground",
                    )}
                  >
                    <use href={`./icons/sprite.svg#tabler/home-outline`} />
                  </svg>
                  <span
                    className={cn(
                      "transition-all duration-500 group-hover/button:text-foreground",
                      pathname === "/" && "text-foreground",
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
                  className="group/button relative inline-flex h-8 items-center px-3 text-sm text-muted-foreground hover:no-underline focus:rounded-full focus:outline-0 focus:ring-0"
                >
                  <svg
                    className={cn(
                      "mr-1 size-5 transition-all duration-500 group-hover/button:text-foreground",
                      pathname === "/work" && "text-foreground",
                    )}
                  >
                    <use
                      href={`./icons/sprite.svg#tabler/briefcase-2-outline`}
                    />
                  </svg>{" "}
                  <span
                    className={cn(
                      "transition-all duration-500 group-hover/button:text-foreground",
                      pathname === "/work" && "text-foreground",
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
                  className="group/button relative inline-flex h-8 items-center px-3 text-sm text-muted-foreground hover:no-underline focus:rounded-full focus:outline-0 focus:ring-0"
                >
                  <svg
                    className={cn(
                      "mr-1 size-5 transition-all duration-500 group-hover/button:text-foreground",
                      pathname === "/projects" && "text-foreground",
                    )}
                  >
                    <use href={`./icons/sprite.svg#tabler/folder-outline`} />
                  </svg>{" "}
                  <span
                    className={cn(
                      "transition-all duration-500 group-hover/button:text-foreground",
                      pathname === "/projects" && "text-foreground",
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
            className="bg-transparent p-0 hover:bg-transparent sm:hidden"
            aria-label="menu"
            onClick={() => setShowMenu(!showMenu)}
          >
            <svg className="ml-1 size-7 text-foreground">
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
              variant="ringHover"
              className="h-8 rounded-full px-3"
              aria-label="Resume"
            >
              <svg className="mr-1 size-5">
                <use href={`./icons/sprite.svg#tabler/file-outline`} />
              </svg>
              Resume
            </Button>
          </Link>
        </div>
        <Switch
          checked={toggleAnimation}
          onCheckedChange={setToggleAnimation}
        />
      </FadeDown>
      {showMenu || (
        <>
          <svg
            className="fixed left-0 top-0 z-20 ml-10 mt-10 size-9 cursor-pointer text-foreground sm:hidden"
            onClick={() => setShowMenu((prev) => !prev)}
            aria-label="exit button"
          >
            <use href={`./icons/sprite.svg#tabler/x-outline`} />
          </svg>
          <nav className="fixed left-1/2 top-1/2 z-10 grid min-h-screen w-screen -translate-x-1/2 -translate-y-1/2 place-items-center bg-background text-center text-lg text-muted-foreground sm:hidden">
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
