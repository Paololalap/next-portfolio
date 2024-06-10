import ChevronLeftRight from "@/components/ChevronLeftRight";
import SocialLinks from "@/components/SocialLinks";
import Typewriter from "@/components/TypeWriter";
import MotionContainer from "@/components/motion/fade-right/MotionContainer";
import MotionItem from "@/components/motion/fade-right/MotionItem";
import MotionItem2 from "@/components/motion/fade-right/MotionItem2";
import MotionItem3 from "@/components/motion/fade-right/MotionItem3";
import { Badge } from "@/components/ui/badge";
import IconCloud from "@/components/ui/icon-cloud";
import { ICON_SLUGS } from "@/constants/ICON_SLUGS";
import { ROLES } from "@/constants/ROLES";
import Image from "next/image";

export default function HomePage() {
  return (
    <MotionContainer
      className="max-w-2xl mx-auto mt-8"
    >
      <MotionItem className="flex items-center mt-10 gap-x-5">
        <div className="relative min-h-24 min-w-24">
          <Image
            src="https://avatars.githubusercontent.com/u/84236606?v=4"
            alt="Paolo Lalap"
            className="rounded-full"
            priority
            fill
            sizes="(min-width: 380px) 80px, calc(11.67vw + 38px)"
          />
        </div>
        <div className="flex flex-col w-full leading-8">
          <h1 className="text-3xl font-semibold text-white capitalize">
            Paolo <span className="text-[#D62828]">Lalap</span>
          </h1>
          <Typewriter texts={ROLES} />
          <Badge className="mt-1 text-green-800 capitalize bg-green-100 border-0 w-fit">
            <div className="mr-2 bg-green-800 rounded-full size-2 animate-pulse" />
            Available for Work
          </Badge>
        </div>
      </MotionItem>

      <MotionItem2 className="mt-10 text-zinc-400">
        <h2 className="mb-2 text-2xl text-white">About</h2>
        <p className="mb-8 text-lg">
          I&apos;ve been a front-end developer for 2 years <ChevronLeftRight />,
          working mainly with Next.js, React, JavaScript, and many others{" "}
          <ChevronLeftRight />. Passionate about what I do <ChevronLeftRight />,
          I get fully involved in every project <ChevronLeftRight />, with a
          particular focus on design <ChevronLeftRight />.
        </p>
        <p className="mb-8 text-lg">
          This is my self-coded personal portfolio which features some of my
          Github projects <ChevronLeftRight />, my resume, and my technical
          skills <ChevronLeftRight />. Created this using Next.js, React,
          Tailwind, Shadcn-ui, and Vercel <ChevronLeftRight />.
        </p>
        <SocialLinks />
      </MotionItem2>

      <MotionItem3>
        <h2 className="mt-10 text-2xl text-white">
          <span className="text-[#D62828]">Professional</span> Skill set and
          tools I use
        </h2>
        <div className="relative flex items-center justify-center w-full h-full overflow-hidden bg-inherit md:px-20 md:pb-20">
          <IconCloud iconSlugs={ICON_SLUGS} />
        </div>
      </MotionItem3>
    </MotionContainer>
  );
}
