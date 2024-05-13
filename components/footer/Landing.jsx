"use client";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { useEffect } from "react";

export default function LandingFooter() {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const hasCopiedText = Boolean(copiedText);

  useEffect(() => {
    if (hasCopiedText) {
      const timer = setTimeout(() => {
        copyToClipboard("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [hasCopiedText, copyToClipboard]);

  return (
    <div className="mt-10 text-lg text-zinc-400">
      If you want to get in touch, feel free to{" "}
      <button
        className="group relative underline transition-all hover:text-white disabled:no-underline disabled:hover:text-zinc-400 "
        disabled={hasCopiedText}
        onClick={() => copyToClipboard("paolomorales1502@gmail.com")}
      >
        email me.
        <span className="invisible absolute -top-2 left-1/2 z-20 hidden -translate-x-1/2 -translate-y-full items-center gap-x-1 whitespace-nowrap rounded-[4px] bg-black px-2 py-1 text-sm text-white opacity-0 transition-opacity delay-700 group-hover:visible group-hover:opacity-80 sm:flex">
          {hasCopiedText ? (
            <>
              <svg className={"mr-1 inline size-4 self-center text-white"}>
                <use
                  href={`./icons/homepage-sprite.svg#lucide/copy-check`}
                />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg className={"mr-1 inline size-4 self-center text-white"}>
                <use href={`./icons/homepage-sprite.svg#lucide/copy`} />
              </svg>
              Copy to clipboard
            </>
          )}
        </span>
      </button>
    </div>
  );
}
