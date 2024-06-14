import FadeRight from "@/components/motion/FadeRight";
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
    <main className="max-w-2xl px-8 mx-auto mt-14 md:px-0">
      <FadeRight>
        <h2 className="pb-2 text-3xl font-semibold tracking-tight scroll-m-20 text-foreground first:mt-0">
          <span className="text-muted-foreground">Pro</span>jects
        </h2>
      </FadeRight>
      <ul>
        {repos.map((repo, index) => (
          <FadeRight key={repo.id} Tag="li" index={index}>
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
              <CardFooter className="flex items-start w-full">
                <ul className="flex flex-wrap w-2/3 gap-y-2">
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
                <div className="flex items-center justify-end flex-1 gap-x-2">
                  {repo.homepage && (
                    <Link href={repo.homepage} className="flex group gap-x-1">
                      <svg className="transition-all size-6 text-muted-foreground group-hover:text-foreground">
                        <use
                          href={`./icons/sprite.svg#tabler/external-link-outline`}
                        />
                      </svg>
                      <span className="transition-all whitespace-nowrap text-muted-foreground group-hover:text-foreground">
                        Visit Link
                      </span>
                    </Link>
                  )}
                  <Link
                    target="_blank"
                    className="flex group gap-x-1"
                    href={`https://github.com/Paololalap/${repo.name}`}
                  >
                    <svg className="transition-all size-6 text-muted-foreground group-hover:text-foreground">
                      <use
                        href={`./icons/sprite.svg#tabler/brand-github-outline`}
                      />
                    </svg>
                    <span className="transition-all whitespace-nowrap text-muted-foreground group-hover:text-foreground">
                      Visit Github
                    </span>
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </FadeRight>
        ))}
      </ul>
    </main>
  );
}
