import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
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
                {repo.description}
              </CardContent>
              <CardFooter className="flex w-full items-start">
                <div className="flex flex-wrap gap-y-2">
                  {repo.topics.map((topic, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="mr-2 capitalize text-[#a1a1aa]"
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-1 items-center justify-end gap-x-2">
                  {repo.homepage && (
                    <Link href={repo.homepage} className="group flex gap-x-1">
                      <ExternalLink className="text-[#71717a] transition-all group-hover:text-white" />
                      <span className="text-[#71717a] transition-all group-hover:text-white whitespace-nowrap">
                        Visit Link
                      </span>
                    </Link>
                  )}
                  <Link
                    target="_blank"
                    className="group flex gap-x-1"
                    href={`https://github.com/Paololalap/${repo.name}`}
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
                      className="text-[#71717a] transition-all group-hover:text-white"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                    <span className="text-[#71717a] transition-all group-hover:text-white whitespace-nowrap">
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
