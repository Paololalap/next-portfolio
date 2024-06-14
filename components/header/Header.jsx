"use client";

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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { HEADER_LINKS } from "@/constants/HEADER_LINKS";
import useMediaQuery from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";
import useStore from "@/stores/toggleAnimation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [hoveredButton, setHoveredButton] = useState(
    pathname === "/" ? "home" : pathname === "/work" ? "work" : "projects",
  );
  const { toggleAnimation, setToggleAnimation } = useStore();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
    isDesktop ? setToggleAnimation(true) : setToggleAnimation(false);
  }, [isDesktop, setToggleAnimation]);

  if (!isClient) return null;

  return (
    <header className="max-w-2xl px-8 mx-auto mt-8">
      <FadeDown className="flex items-center gap-x-2">
        <div className="flex items-center justify-between flex-1 px-2 py-1 border rounded-full border-border sm:flex-row sm:py-2">
          <nav className="relative items-center hidden text-base group sm:flex">
            <ul className="flex">
              {HEADER_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onMouseEnter={() =>
                      setHoveredButton(item.label.toLowerCase())
                    }
                    className={cn(
                      "group/button relative inline-flex h-8 items-center px-3 text-sm text-muted-foreground hover:no-underline focus:rounded-full focus:outline-0 focus:ring-0",
                      pathname === item.href && "text-foreground",
                    )}
                  >
                    <svg
                      className={cn(
                        "mr-1 size-5 transition-all duration-500 group-hover/button:text-foreground",
                        pathname === item.href && "text-foreground",
                      )}
                    >
                      <use href={`./icons/sprite.svg#tabler/${item.icon}`} />
                    </svg>
                    <span
                      className={cn(
                        "transition-all duration-500 group-hover/button:text-foreground",
                        pathname === item.href && "text-foreground",
                      )}
                    >
                      {item.label}
                    </span>
                    {pathname === item.href && !toggleAnimation && (
                      <span
                        className={cn(
                          "absolute left-1/2 top-7 h-[2px] w-[80%] -translate-x-1/2 bg-primary",
                        )}
                      ></span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <HoverLine activeButton={hoveredButton} />
          </nav>

          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger className="sm:hidden">
              <svg className="ml-1 size-7 text-foreground">
                <use href={`./icons/sprite.svg#tabler/menu-2-outline`} />
              </svg>
            </SheetTrigger>
            <SheetContent className="grid place-items-center">
              <ul className="space-y-3 text-lg text-center text-muted-foreground">
                {HEADER_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>

          <Link
            href={
              "https://docs.google.com/document/d/1s-nFidFVqCkBegfErJIRxrgxBYPIETfrEwpMAqsEGoc/edit"
            }
            tabIndex={"-1"}
            target="_blank"
          >
            <Button
              variant="ringHover"
              className={cn(
                "h-8 rounded-full px-3",
                !toggleAnimation &&
                  "transition-none hover:bg-primary hover:ring-0",
              )}
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
                <TooltipContent sideOffset={10}>
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
                  ? "This will disable animations, improving performance."
                  : "This will enable animations, which may affect performance."}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                onClick={() => {
                  setIsDialogOpen(false);
                  setToggleAnimation(!toggleAnimation);
                }}
              >
                {toggleAnimation ? "Disable" : "Enable"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </FadeDown>
    </header>
  );
}
