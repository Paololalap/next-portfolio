import { useMemo } from "react";

import { SocialLinksButton as Button } from "@/components/button/SocialLinks";
import { SocialLinks as Link } from "@/components/link/SocialLinks";
import { SOCIAL_LINKS } from "@/constants/SOCIAL_LINKS";

interface SocialLink {
  href: string;
  text: string;
  icon: React.ReactNode;
}

const SocialLinks = () => {
  // Memoize the mapped links to prevent unnecessary re-renders
  const memoizedLinks = useMemo(
    () =>
      SOCIAL_LINKS.map((link: SocialLink, index: number) => {
        return (
          <li key={index} className="inline-flex">
            <Link
              href={link.href}
              target="_blank"
              tabIndex={-1}
              className="space-x-1 transition-all group text-muted-foreground after:ml-3 hover:text-primary"
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
        );
      }),
    [],
  );

  return <ul>{memoizedLinks}</ul>;
};

export { SocialLinks };
