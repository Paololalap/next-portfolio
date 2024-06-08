import { SOCIAL_LINKS } from "@/constants/SOCIAL_LINKS.js";
import Link from "next/link";
import { Button } from "./ui/button";

export default function SocialLinks() {
  return (
    <ul>
      {SOCIAL_LINKS.map((link, index) => (
        <li key={index} className="inline-flex">
          <Link
            href={link.href}
            target="_blank"
            tabIndex="-1"
            className="group space-x-1 text-zinc-400 transition-all after:ml-3 hover:text-white"
          >
            <Button
              variant="linkHover1"
              className="p-0 text-base text-zinc-400 group-hover:text-white"
              aria-label={link.text}
            >
              <svg
                className={
                  "inline size-6 self-center text-zinc-400 transition-all group-hover:text-white"
                }
              >
                {link.icon}
              </svg>
              {link.text}
            </Button>
          </Link>
        </li>
      ))}
    </ul>
  );
}
