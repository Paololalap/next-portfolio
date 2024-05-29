import ChevronLeftRight from "@/components/ChevronLeftRight";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LAGUNA, SYDNEY } from "@/constants/WORK";

export const metadata = {
  title: "Work",
};

export default function WorkPage() {
  return (
    <main className="mx-auto mt-14 max-w-2xl">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight text-[#d4d4d8] first:mt-0">
        Employment <span className="text-[#D62828]">History</span>
      </h2>
      <Card className="mt-5 bg-transparent">
        <CardHeader>
          <div className="flex justify-between">
            <CardDescription className="text-[#a1a1aa]">
              Sydney, Australia (Remote)
            </CardDescription>
            <CardDescription className="text-[#a1a1aa]">
              (Project Based)
            </CardDescription>
          </div>
          <CardTitle className="w-2/3 text-[#d4d4d8]">
            FullStack Web Developer
          </CardTitle>
        </CardHeader>
        <CardContent className="text-[#a1a1aa]">
          <p>
            Tasked with creating websites to replicate designs in Figma{" "}
            <ChevronLeftRight /> ensuring that all elements match those in Figma
            and are also responsive <ChevronLeftRight />. Additionally,
            responsible for implementing backend functionality{" "}
            <ChevronLeftRight />, such as authentication <ChevronLeftRight />.
          </p>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-y-2">
          {SYDNEY.map((list, index) => (
            <Badge
              key={index}
              variant="outline"
              className="mr-2 text-[#a1a1aa]"
            >
              {list}
            </Badge>
          ))}
        </CardFooter>
      </Card>

      <Card className="mt-5 bg-transparent">
        <CardHeader>
          <div className="flex justify-between">
            <CardDescription className="text-[#a1a1aa]">
              Laguna, Philippines (Onsite)
            </CardDescription>
            <CardDescription className="text-[#a1a1aa]">
              Feb 2024 - May 2024
            </CardDescription>
          </div>
          <CardTitle className="w-2/3 text-[#d4d4d8]">
            FullStack Web Developer Intern{" "}
            <span className="text-[#71717a]">at</span> Open University
          </CardTitle>
        </CardHeader>
        <CardContent className="text-[#a1a1aa]">
          <p>
            Tasked with creating and building websites and platforms{" "}
            <ChevronLeftRight />, as well as implementing backend features to
            ensure smooth operation across various devices and popular web
            browsers <ChevronLeftRight />.
          </p>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-y-2">
          {LAGUNA.map((list, index) => (
            <Badge
              key={index}
              variant="outline"
              className="mr-2 text-[#a1a1aa]"
            >
              {list}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </main>
  );
}
