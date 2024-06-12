import Button from "@/components/button/SocialLinks";
import { SOCIAL_LINKS } from "@/constants/SOCIAL_LINKS.js";
import Link from "next/link";

export default function SocialLinks() {
  return (
    <ul>
      {SOCIAL_LINKS.map((link, index) => (
        <li key={index} className="inline-flex">
          <Link
            href={link.href}
            target="_blank"
            tabIndex="-1"
            className="space-x-1 transition-all group text-muted-foreground after:ml-3 hover:text-primary"
          >
            <Button
              className="p-0 text-base text-muted-foreground group-hover:text-primary"
              aria-label={link.text}
            >
              <svg
                className={
                  "inline size-6 self-center text-muted-foreground transition-all group-hover:text-primary"
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
