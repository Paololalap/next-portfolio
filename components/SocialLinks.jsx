import Link from "next/link";
import { SOCIAL_LINKS } from "@/constants/SOCIAL_LINKS";

export default function SocialLinks() {
  return (
    <ul>
      {SOCIAL_LINKS.map((link, index) => (
        <li key={index} className="inline-flex">
          <Link
            href={link.href}
            target="_blank"
            className="group space-x-1 text-zinc-400 transition-all after:ml-3 hover:text-white"
          >
            {link.icon}
            <span className="border-b-2 border-zinc-400 text-zinc-400 transition-all group-hover:border-white group-hover:text-white">
              {link.text}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
