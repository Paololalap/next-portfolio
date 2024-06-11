"use client";

import useStore from "@/app/_store";
import HoverLine from "@/components/HoverLine";
import FadeDown from "@/components/motion/FadeDown";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
  const { toggleAnimation, setToggleAnimation } = useStore();
  const [isClient, setIsClient] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <header className="max-w-2xl mx-auto mt-8">
      <FadeDown className="flex items-center gap-x-2">
        <div className="flex items-center justify-between flex-1 px-2 py-1 border rounded-full border-border sm:flex-row sm:py-2">
          <nav className="relative items-center hidden text-base group sm:flex">
            <ul className="flex">
              <li>
                <Link
                  href={"/"}
                  className="relative inline-flex items-center h-8 px-3 text-sm group/button text-muted-foreground hover:no-underline focus:rounded-full focus:outline-0 focus:ring-0"
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
                  className="relative inline-flex items-center h-8 px-3 text-sm group/button text-muted-foreground hover:no-underline focus:rounded-full focus:outline-0 focus:ring-0"
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
                  className="relative inline-flex items-center h-8 px-3 text-sm group/button text-muted-foreground hover:no-underline focus:rounded-full focus:outline-0 focus:ring-0"
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
            className="p-0 bg-transparent hover:bg-transparent sm:hidden"
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
              className="h-8 px-3 rounded-full"
              aria-label="Resume"
            >
              <svg className="mr-1 size-5">
                <use href={`./icons/sprite.svg#tabler/file-outline`} />
              </svg>
              Resume
            </Button>
          </Link>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger className="hidden sm:block">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Switch checked={toggleAnimation} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    {toggleAnimation ? "Reduce Animation" : "Enable Animation"}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-xl">
                {toggleAnimation ? "Reduce Animation?" : "Enable Animation?"}
              </DialogTitle>
              <DialogDescription className="text-base">
                {toggleAnimation
                  ? "This action will disable animations, resulting in improved performance, and will require a browser restart to take effect."
                  : "This action will enable animations, resulting in decreased performance, and will require a browser restart to take effect."}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                onClick={() => {
                  setIsDialogOpen(false);
                  setToggleAnimation(!toggleAnimation);
                  window.location.reload();
                }}
              >
                Restart
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </FadeDown>
      {showMenu || (
        <>
          <svg
            className="fixed top-0 left-0 z-20 mt-10 ml-10 cursor-pointer size-9 text-foreground sm:hidden"
            onClick={() => setShowMenu((prev) => !prev)}
            aria-label="exit button"
          >
            <use href={`./icons/sprite.svg#tabler/x-outline`} />
          </svg>
          <nav className="fixed z-10 grid w-screen min-h-screen text-lg text-center -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 place-items-center bg-background text-muted-foreground sm:hidden">
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
