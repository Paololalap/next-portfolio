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
    <main className="mx-auto mt-8 max-w-2xl px-8 md:px-0">
      <FadeRight className="mt-10 flex items-center gap-x-5" index={0}>
        <figure className="relative min-h-24 min-w-24">
          <Image
            src="https://avatars.githubusercontent.com/u/84236606?v=4"
            alt="Paolo Lalap"
            className="rounded-full"
            priority
            fill
            sizes="(min-width: 380px) 80px, calc(11.67vw + 38px)"
          />
        </figure>
        <div className="flex w-full flex-col leading-8">
          <h1 className="text-3xl font-semibold capitalize text-foreground">
            Paolo <span className="text-muted-foreground">Lalap</span>
          </h1>
          <Typewriter texts={ROLES} />
          <Badge className="mt-1 size-fit justify-self-end border-0 text-primary-foreground">
            <Pulse />
            Available for part-time work
          </Badge>
        </div>
      </FadeRight>

      <FadeRight className="mt-10 text-muted-foreground" index={1}>
        <h2 className="mb-2 text-2xl text-foreground">About</h2>
        <p className="mb-8 text-lg">
          I&apos;m a front-end Developer/Engineer <ChevronLeftRight />,
          working mainly with Next.js, React, JavaScript, and many others{" "}
          <ChevronLeftRight />. Passionate about what I do <ChevronLeftRight />,
          I get fully involved in every project <ChevronLeftRight />, with a
          particular focus on design <ChevronLeftRight />.
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
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-inherit md:px-20 md:pb-20">
          <Suspense fallback={null}>
            <IconCloud iconSlugs={ICON_SLUGS} />
          </Suspense>
        </div>
      </FadeRight>
    </main>
  );
}
