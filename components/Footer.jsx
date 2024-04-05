"use client";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { useEffect } from "react";

function CopyIcon() {
  return (
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
      className="size-4 text-zinc-400 opacity-0 transition-opacity delay-700 group-hover:visible group-hover:text-white group-hover:opacity-80"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
      <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
    </svg>
  );
}

function CheckIcon() {
  return (
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
      className="size-5 text-zinc-400 opacity-0 transition-opacity delay-700 group-hover:visible group-hover:text-white group-hover:opacity-80"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l5 5l10 -10" />
    </svg>
  );
}

const email = "paolomorales1502@gmail.com";

export default function Footer() {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const hasCopiedText = Boolean(copiedText);

  useEffect(() => {
    if (hasCopiedText) {
      const timer = setTimeout(() => {
        copyToClipboard(""); // Reset the copied text
      }, 5000); // 5000 milliseconds = 5 seconds

      return () => clearTimeout(timer); // Clear the timer on component unmount or re-render
    }
  }, [hasCopiedText, copyToClipboard]);

  return (
    <div className="mb-20 mt-10 w-max text-lg text-zinc-400">
      If you want to get in touch, feel free to{" "}
      <button
        className="group relative underline transition-all hover:text-white disabled:no-underline disabled:hover:text-zinc-400 "
        disabled={hasCopiedText}
        onClick={() => copyToClipboard(email)}
      >
        email me.
        <span className="invisible absolute -top-2 left-1/2 z-20 flex -translate-x-1/2 -translate-y-full items-center gap-x-1 whitespace-nowrap rounded-[4px] bg-black px-2 py-1 text-sm text-white opacity-0 transition-opacity delay-700 group-hover:visible group-hover:opacity-80">
          {hasCopiedText ? (
            <>
              <CheckIcon />
              Copied!
            </>
          ) : (
            <>
              <CopyIcon /> Copy to clipboard
            </>
          )}
        </span>
      </button>
    </div>
  );
}
