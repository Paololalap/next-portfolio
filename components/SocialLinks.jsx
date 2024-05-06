import Link from "next/link";
import { SOCIAL_LINKS } from "@/constants/SOCIAL_LINKS";

export default function SocialLinks() {
  return (
    <div className="flex gap-x-5">
      {SOCIAL_LINKS.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          target="_blank"
          className="group flex w-max gap-x-2 text-zinc-400 transition-all hover:text-white"
        >
          {link.icon}
          <span className="border-b-2 border-zinc-400 text-zinc-400 transition-all group-hover:border-white group-hover:text-white">
            {link.text}
          </span>
        </Link>
      ))}
    </div>
  );
}
