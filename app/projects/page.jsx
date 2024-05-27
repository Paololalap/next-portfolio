import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Projects",
};

async function fetchRepos() {
  const response = await fetch(
    "https://api.github.com/users/Paololalap/repos?sort=updated&direction=desc",
  );
  const repos = await response.json();
  return repos;
}

export default async function ProjectsPage() {
  const repos = await fetchRepos();
  return (
    <main className="mt-14">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight text-[#d4d4d8] first:mt-0">
        <span className="text-[#D62828]">Pro</span>jects
      </h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <Card className="mt-5 bg-transparent">
              <CardHeader>
                <CardTitle className="text-[#d4d4d8]">{repo.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-[#a1a1aa]">
                {repo.description || <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eligendi accusantium expedita odit porro maiores numquam quos. Nam aperiam debitis eos a cupiditate neque ducimus ipsa cum. Quisquam, eius expedita.</p>}
              </CardContent>
              <CardFooter className="flex w-full items-start">
                <ul className="flex flex-wrap gap-y-2 w-2/3">
                  {repo.topics.map((topic, index) => (
                    <li key={index}>
                      <Badge
                        variant="outline"
                        className="mr-2 capitalize text-[#a1a1aa]"
                      >
                        {topic}
                      </Badge>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-1 items-center justify-end gap-x-2">
                  {repo.homepage && (
                    <Link href={repo.homepage} className="group flex gap-x-1">
                      <svg className="text-[#71717a] transition-all size-6 group-hover:text-white">
                        <use
                          href={`./icons/projects-page-sprite.svg#tabler/external-link-outline`}
                        />
                      </svg>
                      <span className="whitespace-nowrap text-[#71717a] transition-all group-hover:text-white">
                        Visit Link
                      </span>
                    </Link>
                  )}
                  <Link
                    target="_blank"
                    className="group flex gap-x-1"
                    href={`https://github.com/Paololalap/${repo.name}`}
                  >
                    <svg className="text-[#71717a] transition-all size-6 group-hover:text-white">
                      <use
                        href={`./icons/projects-page-sprite.svg#tabler/brand-github-outline`}
                      />
                    </svg>
                    <span className="whitespace-nowrap text-[#71717a] transition-all group-hover:text-white">
                      Visit Github
                    </span>
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </main>
  );
}
