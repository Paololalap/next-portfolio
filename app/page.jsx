import ChevronLeftRight from "@/components/ChevronLeftRight";
import SkillSet from "@/components/SkillSet";
import SocialLinks from "@/components/SocialLinks";
import Tools from "@/components/Tools";
import Typewriter from "@/components/TypeWriter";
import LandingFooter from "@/components/footer/Landing";
import { ROLES } from "@/constants/ROLES";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="mx-auto mt-8 max-w-2xl">
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
        Professional <span className="text-[#D62828]">Skill set</span>
      </h2>
      <SkillSet />

      <h2 className="mt-10 text-2xl text-white">
        <span className="text-[#D62828]">Tools</span> I use
      </h2>
      <Tools />
      <LandingFooter />
    </main>
  );
}
