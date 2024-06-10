import MotionContainer from "@/components/motion/fade-right/MotionContainer";
import MotionItem from "@/components/motion/fade-right/MotionItem";
import MotionItem2 from "@/components/motion/fade-right/MotionItem2";
import MotionItem3 from "@/components/motion/fade-right/MotionItem3";
import MotionItem4 from "@/components/motion/fade-right/MotionItem4";
import MotionItem5 from "@/components/motion/fade-right/MotionItem5";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
  title: "Projects",
};

async function fetchRepos() {
  const response = await fetch(
    "https://api.github.com/users/Paololalap/repos?sort=updated&direction=desc",
    { cache: "no-store" },
  );
  const repos = await response.json();
  return repos;
}

export default async function ProjectsPage() {
  const repos = await fetchRepos();
  return (
    <MotionContainer className="mx-auto mt-14 max-w-2xl">
      <MotionItem>
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight text-foreground first:mt-0">
          <span className="text-muted-foreground">Pro</span>jects
        </h2>
      </MotionItem>
      <ul>
        <MotionItem2>
          {repos.slice(0, 1).map((repo) => (
            <li key={repo.id}>
              <Card className="mt-5 bg-card">
                <CardHeader>
                  <CardTitle className="text-foreground">{repo.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  {repo.description || (
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quibusdam eligendi accusantium expedita odit porro maiores
                      numquam quos. Nam aperiam debitis eos a cupiditate neque
                      ducimus ipsa cum. Quisquam, eius expedita.
                    </p>
                  )}
                </CardContent>
                <CardFooter className="flex w-full items-start">
                  <ul className="flex w-2/3 flex-wrap gap-y-2">
                    {repo.topics.map((topic, index) => (
                      <li key={index}>
                        <Badge
                          variant="outline"
                          className="mr-2 capitalize text-muted-foreground"
                        >
                          {topic}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-1 items-center justify-end gap-x-2">
                    {repo.homepage && (
                      <Link href={repo.homepage} className="group flex gap-x-1">
                        <svg className="size-6 text-muted-foreground transition-all group-hover:text-foreground">
                          <use
                            href={`./icons/sprite.svg#tabler/external-link-outline`}
                          />
                        </svg>
                        <span className="whitespace-nowrap text-muted-foreground transition-all group-hover:text-foreground">
                          Visit Link
                        </span>
                      </Link>
                    )}
                    <Link
                      target="_blank"
                      className="group flex gap-x-1"
                      href={`https://github.com/Paololalap/${repo.name}`}
                    >
                      <svg className="size-6 text-muted-foreground transition-all group-hover:text-foreground">
                        <use
                          href={`./icons/sprite.svg#tabler/brand-github-outline`}
                        />
                      </svg>
                      <span className="whitespace-nowrap text-muted-foreground transition-all group-hover:text-foreground">
                        Visit Github
                      </span>
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </li>
          ))}
        </MotionItem2>
        <MotionItem3>
          {repos.slice(1, 2).map((repo) => (
            <li key={repo.id}>
              <Card className="mt-5 bg-card">
                <CardHeader>
                  <CardTitle className="text-foreground">{repo.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  {repo.description || (
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quibusdam eligendi accusantium expedita odit porro maiores
                      numquam quos. Nam aperiam debitis eos a cupiditate neque
                      ducimus ipsa cum. Quisquam, eius expedita.
                    </p>
                  )}
                </CardContent>
                <CardFooter className="flex w-full items-start">
                  <ul className="flex w-2/3 flex-wrap gap-y-2">
                    {repo.topics.map((topic, index) => (
                      <li key={index}>
                        <Badge
                          variant="outline"
                          className="mr-2 capitalize text-muted-foreground"
                        >
                          {topic}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-1 items-center justify-end gap-x-2">
                    {repo.homepage && (
                      <Link href={repo.homepage} className="group flex gap-x-1">
                        <svg className="size-6 text-muted-foreground transition-all group-hover:text-foreground">
                          <use
                            href={`./icons/sprite.svg#tabler/external-link-outline`}
                          />
                        </svg>
                        <span className="whitespace-nowrap text-muted-foreground transition-all group-hover:text-foreground">
                          Visit Link
                        </span>
                      </Link>
                    )}
                    <Link
                      target="_blank"
                      className="group flex gap-x-1"
                      href={`https://github.com/Paololalap/${repo.name}`}
                    >
                      <svg className="size-6 text-muted-foreground transition-all group-hover:text-foreground">
                        <use
                          href={`./icons/sprite.svg#tabler/brand-github-outline`}
                        />
                      </svg>
                      <span className="whitespace-nowrap text-muted-foreground transition-all group-hover:text-foreground">
                        Visit Github
                      </span>
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </li>
          ))}
        </MotionItem3>
        <MotionItem4>
          {repos.slice(2, 3).map((repo) => (
            <li key={repo.id}>
              <Card className="mt-5 bg-card">
                <CardHeader>
                  <CardTitle className="text-foreground">{repo.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  {repo.description || (
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quibusdam eligendi accusantium expedita odit porro maiores
                      numquam quos. Nam aperiam debitis eos a cupiditate neque
                      ducimus ipsa cum. Quisquam, eius expedita.
                    </p>
                  )}
                </CardContent>
                <CardFooter className="flex w-full items-start">
                  <ul className="flex w-2/3 flex-wrap gap-y-2">
                    {repo.topics.map((topic, index) => (
                      <li key={index}>
                        <Badge
                          variant="outline"
                          className="mr-2 capitalize text-muted-foreground"
                        >
                          {topic}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-1 items-center justify-end gap-x-2">
                    {repo.homepage && (
                      <Link href={repo.homepage} className="group flex gap-x-1">
                        <svg className="size-6 text-muted-foreground transition-all group-hover:text-foreground">
                          <use
                            href={`./icons/sprite.svg#tabler/external-link-outline`}
                          />
                        </svg>
                        <span className="whitespace-nowrap text-muted-foreground transition-all group-hover:text-foreground">
                          Visit Link
                        </span>
                      </Link>
                    )}
                    <Link
                      target="_blank"
                      className="group flex gap-x-1"
                      href={`https://github.com/Paololalap/${repo.name}`}
                    >
                      <svg className="size-6 text-muted-foreground transition-all group-hover:text-foreground">
                        <use
                          href={`./icons/sprite.svg#tabler/brand-github-outline`}
                        />
                      </svg>
                      <span className="whitespace-nowrap text-muted-foreground transition-all group-hover:text-foreground">
                        Visit Github
                      </span>
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </li>
          ))}
        </MotionItem4>
        <MotionItem5>
          {repos.slice(3).map((repo) => (
            <li key={repo.id}>
              <Card className="mt-5 bg-card">
                <CardHeader>
                  <CardTitle className="text-foreground">{repo.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  {repo.description || (
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quibusdam eligendi accusantium expedita odit porro maiores
                      numquam quos. Nam aperiam debitis eos a cupiditate neque
                      ducimus ipsa cum. Quisquam, eius expedita.
                    </p>
                  )}
                </CardContent>
                <CardFooter className="flex w-full items-start">
                  <ul className="flex w-2/3 flex-wrap gap-y-2">
                    {repo.topics.map((topic, index) => (
                      <li key={index}>
                        <Badge
                          variant="outline"
                          className="mr-2 capitalize text-muted-foreground"
                        >
                          {topic}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-1 items-center justify-end gap-x-2">
                    {repo.homepage && (
                      <Link href={repo.homepage} className="group flex gap-x-1">
                        <svg className="size-6 text-muted-foreground transition-all group-hover:text-foreground">
                          <use
                            href={`./icons/sprite.svg#tabler/external-link-outline`}
                          />
                        </svg>
                        <span className="whitespace-nowrap text-muted-foreground transition-all group-hover:text-foreground">
                          Visit Link
                        </span>
                      </Link>
                    )}
                    <Link
                      target="_blank"
                      className="group flex gap-x-1"
                      href={`https://github.com/Paololalap/${repo.name}`}
                    >
                      <svg className="size-6 text-muted-foreground transition-all group-hover:text-foreground">
                        <use
                          href={`./icons/sprite.svg#tabler/brand-github-outline`}
                        />
                      </svg>
                      <span className="whitespace-nowrap text-muted-foreground transition-all group-hover:text-foreground">
                        Visit Github
                      </span>
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </li>
          ))}
        </MotionItem5>
      </ul>
    </MotionContainer>
  );
}
