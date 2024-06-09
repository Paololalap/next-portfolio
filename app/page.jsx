import ChevronLeftRight from "@/components/ChevronLeftRight";
import SocialLinks from "@/components/SocialLinks";
import Typewriter from "@/components/Typewriter";
import SpringFromLeft from "@/components/motion/SpringFromLeft";
import IconCloud from "@/components/ui/icon-cloud";
import { ICON_SLUGS } from "@/constants/ICON_SLUGS";
import { ROLES } from "@/constants/ROLES";
import Image from "next/image";

export default function HomePage() {
  return (
    <SpringFromLeft className="mx-auto mt-8 max-w-2xl">
      <div className="mt-10 flex items-center gap-x-5">
        <div className="relative min-h-20 min-w-20">
          <Image
            src="https://avatars.githubusercontent.com/u/84236606?v=4"
            alt="Paolo Lalap"
            className="rounded-full"
            priority
            fill
            sizes="(min-width: 380px) 80px, calc(11.67vw + 38px)"
          />
        </div>
        <div className="flex w-full flex-col leading-8">
          <h1 className="text-3xl font-semibold capitalize text-white">
            Paolo <span className="text-[#D62828]">Lalap</span>
          </h1>
          <Typewriter texts={ROLES} />
        </div>
      </div>

      <div className="mt-10 text-zinc-400">
        <p className="mb-8 text-lg">
          I am a Freelancer based in the Philippines <ChevronLeftRight />, and
          I&apos;m very passionate and dedicated to my work <ChevronLeftRight />
          . With experience in HTML, CSS, React.js, Next.js, Tailwind CSS, React
          Native, JavaScript, MongoDB, Firebase, and Git <ChevronLeftRight />.
        </p>
        <p className="mb-8 text-lg">
          This is my self-coded personal portfolio which features some of my
          Github projects <ChevronLeftRight />, my resume, and my technical
          skills <ChevronLeftRight />. Created this using Next.js, React,
          Tailwind, Shadcn-ui, and Vercel <ChevronLeftRight />.
        </p>
      </div>
      <SocialLinks />
      <h2 className="mt-10 text-2xl text-white">
        <span className="text-[#D62828]">Professional</span> Skill set and tools
        I use
      </h2>
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-inherit px-20 pb-20">
        <IconCloud iconSlugs={ICON_SLUGS} />
      </div>
    </SpringFromLeft>
  );
}
