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
    <main>
      <div className="mt-10 flex items-center gap-x-5">
        <div className="relative size-20">
          <Image
            src="https://avatars.githubusercontent.com/u/84236606?v=4"
            alt="Paolo Lalap"
            className="rounded-full"
            priority
            fill
            sizes="(min-width: 380px) 80px, calc(11.67vw + 38px)"
          />
        </div>
        <div className="flex flex-col leading-8">
          <h1 className="text-3xl font-semibold capitalize text-white">
            Paolo <span className="text-[#D62828]">Lalap</span>
          </h1>
          <Typewriter texts={ROLES} />
        </div>
      </div>
      <div className="mt-10 text-zinc-400">
        <p className="mb-8 text-lg">
          I am a Freelance Front-end Developer based on the Philippines{" "}
          <ChevronLeftRight />, and I&apos;m very passionate and dedicated to my
          work <ChevronLeftRight />
          . With experience in HTML, CSS, React.js, Next.js, Tailwind CSS, React
          Native, JavaScript, MongoDB, Firebase, and Git <ChevronLeftRight />.
        </p>
        <p className="mb-8 text-lg">
          I am currently undergoing (Intern) at the Open University of the
          Philippines <ChevronLeftRight />, where my role entails being a
          FullStack Developer responsible for designing and developing websites
          and platforms <ChevronLeftRight />, ensuring smooth functionality
          across various devices and browsers <ChevronLeftRight />.
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