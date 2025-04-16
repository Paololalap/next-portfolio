import Image from "next/image";
import { Suspense } from "react";

import { ChevronLeftRight } from "@/components/ChevronLeftRight";
import { SocialLinks } from "@/components/SocialLinks";
import { Typewriter } from "@/components/TypeWriter";
import { Pulse } from "@/components/badge/Pulse";
import { FadeRight } from "@/components/motion/FadeRight";
import { Badge } from "@/components/ui/badge";
import { IconCloud } from "@/components/ui/icon-cloud";
import { ICON_SLUGS } from "@/constants/ICON_SLUGS";
import { ROLES } from "@/constants/ROLES";

export default function Homepage() {
  return (
    <main className="max-w-2xl px-8 mx-auto mt-8 md:px-0">
      <FadeRight className="flex items-center mt-10 gap-x-5" index={0}>
        <figure className="relative overflow-hidden rounded-full min-h-24 min-w-24">
          <Image
            src="/dp.jpg"
            alt="Paolo Lalap"
            className="scale-[200%]"
            priority
            fill
          />
        </figure>
        <div className="flex flex-col w-full leading-8">
          <h1 className="text-3xl font-semibold capitalize text-foreground">
            Paolo <span className="text-muted-foreground">Lalap</span>
          </h1>
          <Typewriter texts={ROLES} />
          <Badge className="mt-1 border-0 size-fit justify-self-end text-primary-foreground">
            <Pulse />
            Available for part-time work
          </Badge>
        </div>
      </FadeRight>

      <FadeRight className="mt-10 text-muted-foreground" index={1}>
        <h2 className="mb-2 text-2xl text-foreground">About</h2>
        <p className="mb-8 text-lg">
          I&apos;m a full-stack web developer mainly focused on front-end
          development <ChevronLeftRight />, working primarily with Next.js{" "}
          <ChevronLeftRight />, React, WordPress, and many other technologies{" "}
          <ChevronLeftRight />. Passionate about what I do <ChevronLeftRight />,
          I get fully involved in every project, with a particular focus on
          design. <ChevronLeftRight />.
        </p>
        <p className="mb-8 text-lg">
          This is my self-coded personal portfolio which features some of my
          Github projects <ChevronLeftRight />, my resume, and my technical
          skills <ChevronLeftRight />. Created this using Next.js, React,
          Tailwind, Shadcn-ui, Framer Motion, and Vercel <ChevronLeftRight />.
        </p>
        <SocialLinks />
      </FadeRight>

      <FadeRight index={2}>
        <h2 className="mt-10 text-2xl text-foreground">
          <span className="text-muted-foreground">Professional</span> Skill set
          and tools I use
        </h2>
        <div className="relative flex h-full w-full items-center  justify-center overflow-hidden bg-inherit px-[20px] md:px-20 md:pb-20">
          <Suspense fallback={null}>
            <IconCloud iconSlugs={ICON_SLUGS} />
          </Suspense>
        </div>
      </FadeRight>
    </main>
  );
}
