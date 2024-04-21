import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import SkillSet from "@/components/SkillSet";
import Tools from "@/components/Tools";
import Footer from "@/components/Footer";
import Typewriter from "@/components/TypeWriter";
import ChevronLeftRight from "@/components/ChevronLeftRight";

export default function HomePage() {
  const texts = [
    "Front-end Web Developer",
    "FullStack NextJs Developer",
    "ReactJs Developer",
  ];
  return (
    <main>
      <div className="mt-10 flex items-center gap-x-5">
        <Avatar className="size-20">
          <AvatarImage src="https://avatars.githubusercontent.com/u/84236606?v=4" />
        </Avatar>
        <div className="flex flex-col leading-8">
          <h1 className="text-3xl font-semibold capitalize text-white">
            Paolo <span className="text-[#D62828]">Lalap</span>
          </h1>
          <Typewriter texts={texts} />
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
      <div className="flex gap-x-5">
        <Link
          href={"https://github.com/paololalap"}
          target="_blank"
          className="group flex w-max gap-x-2 text-zinc-400 transition-all hover:text-white"
        >
          {/* Github Outline */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-zinc-400 transition-all group-hover:hidden"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>

          {/* Github */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#ffffff"
            className="hidden group-hover:block"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" />
          </svg>

          <span className="border-b-2 border-zinc-400 text-zinc-400 transition-all group-hover:border-white group-hover:text-white">
            Github
          </span>
        </Link>
        <Link
          href={"https://www.linkedin.com/in/paolo-lalap-0196aa212/"}
          target="_blank"
          className="group flex w-max gap-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-zinc-400 transition-all group-hover:text-white"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          <span className="border-b-2 border-zinc-400 text-zinc-400 transition-all group-hover:border-white group-hover:text-white">
            LinkedIn
          </span>
        </Link>
        <Link
          href={"mailto:paolomorales1502@gmail.com"}
          target="_blank"
          className="group flex w-max gap-x-2 text-zinc-400 transition-all hover:text-white"
        >
          {/* Mail Outline */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-zinc-400 transition-all group-hover:hidden"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>

          {/* Mail Filled */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#ffffff"
            className="hidden group-hover:block"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" />
            <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" />
          </svg>
          <span className="border-b-2 border-zinc-400 text-zinc-400 transition-all group-hover:border-white group-hover:text-white">
            Email
          </span>
        </Link>
      </div>
      <h2 className="mt-10 text-2xl text-white">
        Professional <span className="text-[#D62828]">Skillset</span>
      </h2>
      <SkillSet />

      <h2 className="mt-10 text-2xl text-white">
        <span className="text-[#D62828]">Tools</span> I use
      </h2>
      <Tools />
      <Footer />
    </main>
  );
}
