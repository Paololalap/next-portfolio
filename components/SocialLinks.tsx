import { SocialLinksButton as Button } from "@/components/button/SocialLinks";
import { SocialLinks as Link } from "@/components/link/SocialLinks";
import { SOCIAL_LINKS } from "@/constants/SOCIAL_LINKS";
import { FC, ReactNode } from "react";

interface SocialLink {
  href: string;
  text: string;
  icon: ReactNode;
}

const SocialLinks: FC = () => {
  return (
    <ul>
      {SOCIAL_LINKS.map((link: SocialLink, index: number) => (
        <li key={index} className="inline-flex">
          <Link
            href={link.href}
            target="_blank"
            tabIndex={-1}
            className="group space-x-1 text-muted-foreground transition-all after:ml-3 hover:text-primary"
          >
            <Button
              className="p-0 text-base text-muted-foreground group-hover:text-primary"
              aria-label={link.text}
            >
              <svg
                className={
                  "inline size-6 self-center text-muted-foreground group-hover:text-primary"
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
};

export { SocialLinks };