import Link from "next/link";

import { ChevronLeftRight } from "@/components/ChevronLeftRight";
import { FadeRight } from "@/components/motion/FadeRight";
import { ProjectLink } from "@/components/ProjectLink";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ADDITIONAL_PROJECTS } from "@/constants/ADDITIONAL_PROJECTS";
import { PROJECTS } from "@/constants/PROJECTS";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <main className="mx-auto mt-14 max-w-2xl px-8 md:px-0">
      <FadeRight index={0}>
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight text-foreground first:mt-0">
          <span className="text-muted-foreground">Pro</span>jects
        </h2>
        <p className="mt-5">
          I have worked on a variety of projects; some of them as a hobby, some
          as a proof of concept and others to solve my own pain points. Here are
          some of the projects that I have worked on.
        </p>
      </FadeRight>
      <ul>
        {PROJECTS.map((project, index) => (
          <FadeRight key={project.title} tag="li" index={index + 1}>
            <Card className="mt-5">
              <CardHeader>
                <CardTitle className="text-foreground">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="line-clamp-4 hover:line-clamp-none">
                  {project.description
                    .split("<ChevronLeftRight />")
                    .map((text, i) => (
                      <span key={i}>
                        {text}
                        {i <
                          project.description.split("<ChevronLeftRight />")
                            .length -
                            1 && <ChevronLeftRight />}
                      </span>
                    ))}
                </p>
              </CardContent>
              <CardFooter className="flex w-full items-start md:items-center">
                <ul className="flex w-2/3 flex-wrap gap-y-2">
                  {project.technologies.map((tech) => (
                    <li key={tech}>
                      <Badge
                        variant="outline"
                        className="mr-2 text-muted-foreground"
                      >
                        {tech}
                      </Badge>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-1 flex-col items-end gap-2 md:flex-row md:items-center md:justify-end">
                  <Link
                    href={project.link}
                    className="group/link flex gap-x-1"
                    target="_blank"
                  >
                    <svg className="size-6 text-muted-foreground transition-all group-hover/link:text-foreground">
                      <use
                        href={`./icons/sprite.svg#tabler/external-link-outline`}
                      />
                    </svg>
                    <span className="whitespace-nowrap text-muted-foreground transition-all group-hover/link:text-foreground">
                      Visit Link
                    </span>
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </FadeRight>
        ))}
      </ul>
      <FadeRight tag="section">
        <p className="mt-5">
          Here are some more projects that I have worked on. You can find the
          complete list of projects on my{" "}
          <Link
            className="underline hover:opacity-90"
            href="https://github.com/paololalap"
            target="_blank"
          >
            GitHub profile
          </Link>
          .
        </p>
        <ul className="mt-5 space-y-2">
          {ADDITIONAL_PROJECTS.map((project, index) => (
            <ProjectLink key={index} {...project} />
          ))}
        </ul>
      </FadeRight>
    </main>
  );
}
