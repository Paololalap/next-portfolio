import ChevronLeftRight from "@/components/ChevronLeftRight";
import FadeRight from "@/components/motion/FadeRight";
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
    <main className="max-w-2xl mx-auto px-8 md:px-0 mt-14">
      <FadeRight index={0}>
        <h2 className="pb-2 text-3xl font-semibold tracking-tight scroll-m-20 text-foreground first:mt-0">
          Employment <span className="text-muted-foreground">History</span>
        </h2>
      </FadeRight>
      <FadeRight index={1}>
        <Card className="mt-5">
          <CardHeader>
            <div className="flex justify-between">
              <CardDescription className="text-muted-foreground">
                Sydney, Australia (Remote)
              </CardDescription>
              <CardDescription className="text-muted-foreground">
                (Project Based)
              </CardDescription>
            </div>
            <CardTitle className="w-2/3 text-foreground">
              FullStack Web Developer
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p>
              Tasked with creating websites to replicate designs in Figma{" "}
              <ChevronLeftRight /> ensuring that all elements match those in
              Figma and are also responsive <ChevronLeftRight />. Additionally,
              responsible for implementing backend functionality{" "}
              <ChevronLeftRight />, such as authentication <ChevronLeftRight />.
            </p>
          </CardContent>
          <CardFooter className="flex flex-wrap gap-y-2">
            {SYDNEY.map((list, index) => (
              <Badge
                key={index}
                variant="outline"
                className="mr-2 text-muted-foreground"
              >
                {list}
              </Badge>
            ))}
          </CardFooter>
        </Card>
      </FadeRight>

      <FadeRight index={2}>
        <Card className="mt-5">
          <CardHeader>
            <div className="flex justify-between">
              <CardDescription className="text-muted-foreground">
                Laguna, Philippines (Onsite)
              </CardDescription>
              <CardDescription className="text-muted-foreground">
                Feb 2024 - May 2024
              </CardDescription>
            </div>
            <CardTitle className="w-2/3 text-foreground">
              FullStack Web Developer Intern{" "}
              <span className="text-muted-foreground">at</span> Open University
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
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
                className="mr-2 text-muted-foreground"
              >
                {list}
              </Badge>
            ))}
          </CardFooter>
        </Card>
      </FadeRight>
    </main>
  );
}
