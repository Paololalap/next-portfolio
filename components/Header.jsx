"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HoverLine from "./HoverLine";
import { useState } from "react";

export default function Header() {
  const [hoveredButton, setHoveredButton] = useState("");
  const [showMenu, setShowMenu] = useState(true);

  return (
    <>
      <header className="flex items-center justify-between rounded-full border border-zinc-400 px-2 py-1 sm:flex-row">
        {/* For Desktop */}
        <nav className="group relative hidden h-9 items-center justify-center text-base sm:flex">
          {/* Home */}
          <Link href={"/"} tabIndex={"-1"}>
            <Button
              variant="link"
              size="sm"
              className="group/button relative h-8 text-sm text-zinc-400 hover:no-underline focus:rounded-full focus:outline-0 focus:ring-0"
              onMouseEnter={() => setHoveredButton("home")}
            >
              <svg
                dataslot="icon"
                fill="none"
                strokeWidth={1.5}
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="mr-1 size-4 transition-all duration-500 group-hover/button:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <span className="transition-all duration-500 group-hover/button:text-white">
                Home
              </span>
            </Button>
          </Link>
          {/* Work */}
          <Link href={"/work"} tabIndex={"-1"}>
            <Button
              variant="link"
              onMouseEnter={() => setHoveredButton("work")}
              size="sm"
              className="group/button relative h-8 text-sm text-zinc-400 transition-all hover:no-underline focus:rounded-full focus:outline-0 focus:ring-0"
            >
              <svg
                dataslot="icon"
                fill="none"
                strokeWidth={1.5}
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="mr-1 size-4 transition-all duration-500 group-hover/button:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                />
              </svg>
              <span className="transition-all duration-500 group-hover/button:text-white">
                Work
              </span>
            </Button>
          </Link>

          {/* Projects */}
          <Link href={"/projects"} tabIndex={"-1"}>
            <Button
              variant="link"
              onMouseEnter={() => setHoveredButton("projects")}
              size="sm"
              className="group/button relative h-8 text-sm text-zinc-400 transition-all hover:no-underline focus:rounded-full focus:outline-0 focus:ring-0"
            >
              <svg
                dataslot="icon"
                fill="none"
                strokeWidth={1.5}
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="mr-1 size-4 transition-all duration-500 group-hover/button:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                />
              </svg>
              <span className="transition-all duration-500 group-hover/button:text-white">
                Projects
              </span>
            </Button>
          </Link>
          <HoverLine activeButton={hoveredButton} />
        </nav>

        {/* Menu Icon */}
        <Button
          className="bg-transparent p-0 hover:bg-transparent"
          onClick={() => setShowMenu(!showMenu)}
        >
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
            className="ml-1 size-7 text-white sm:hidden"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </Button>

        {/* Resume Button */}
        <Link
          href={
            "https://drive.google.com/file/d/1fTNcxsEKYmU1vpNaa8NocsxBGXverF_G/view?usp=sharing"
          }
          tabIndex={"-1"}
          target="_blank"
        >
          <Button
            variant="secondary"
            size="sm"
            className="group h-8 rounded-full outline outline-2 -outline-offset-1 outline-white transition-all hover:bg-[#f1f5f9] sm:hover:bg-inherit sm:hover:text-white sm:hover:outline sm:hover:outline-2 sm:hover:outline-white"
          >
            <svg
              dataslot="icon"
              fill="none"
              strokeWidth={1.5}
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="mr-1 size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>
            Resume
          </Button>
        </Link>
      </header>
      <header>
        {/* Open Menu Mobile */}
        {showMenu || (
          <>
            {/* X Icon */}
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
              className="fixed left-0 top-0 z-20 ml-10 mt-10 size-9 cursor-pointer text-white sm:hidden"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
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
    </>
  );
}
