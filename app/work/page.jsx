import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Work",
};

export default function WorkPage() {
  return (
    <main className="mt-14 p-0">
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight text-[#d4d4d8] first:mt-0">
          Employment History
        </h2>
      <Card className="mt-5 bg-[#27272b]">
        <CardHeader>
          <div className="flex justify-between">
            <CardDescription className="text-[#a1a1aa]">
              Laguna, PH
            </CardDescription>
            <CardDescription className="text-[#a1a1aa]">
              Feb 2024 - Present
            </CardDescription>
          </div>
          <CardTitle className="w-2/3 text-[#d4d4d8]">
            FullStack Web Developer Intern <span className="text-[#71717a]">at</span>{" "}
            Open University
          </CardTitle>
        </CardHeader>
        <CardContent className="text-[#a1a1aa]">
          <p>
            Tasked with creating and building websites and platforms, as well as
            implementing backend features to ensure smooth operation across
            various devices and popular web browsers.
          </p>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-y-2">
          <Badge variant="outline" className="mr-2 text-[#a1a1aa]">
            NextJs
          </Badge>
          <Badge variant="outline" className="mr-2 text-[#a1a1aa]">
            MongoDB
          </Badge>
          <Badge variant="outline" className="mr-2 text-[#a1a1aa]">
            Tailwind
          </Badge>
          <Badge variant="outline" className="mr-2 text-[#a1a1aa]">
            NodeJs
          </Badge>
          <Badge variant="outline" className="mr-2 text-[#a1a1aa]">
            Gitlab
          </Badge>
          <Badge variant="outline" className="mr-2 text-[#a1a1aa]">
            Git
          </Badge>
          <Badge variant="outline" className="mr-2 text-[#a1a1aa]">
            Next-Auth
          </Badge>
          <Badge variant="outline" className="mr-2 text-[#a1a1aa]">
            Shadcn
          </Badge>
          <Badge variant="outline" className="mr-2 text-[#a1a1aa]">
            React-hook form
          </Badge>
        </CardFooter>
      </Card>
    </main>
  );
}
