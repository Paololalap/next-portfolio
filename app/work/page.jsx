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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { WORK_EXPERIENCE } from "@/constants/WORK_EXPERIENCE";

export const metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <main className="mx-auto mt-14 max-w-2xl px-8 md:px-0">
      <FadeRight index={0} tag="div">
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight text-foreground first:mt-0">
          Employment <span className="text-muted-foreground">History</span>
        </h2>
        <p className="mt-5">
          I have been fortunate to work with some amazing teams. I have worked
          with startups and also with large enterprises. Here is a brief
          overview of my employment history.
        </p>
      </FadeRight>
      {WORK_EXPERIENCE.map((experience, index) => (
        <FadeRight key={index} index={index + 1} tag="div">
          <Card className="mt-5">
            <CardHeader>
              <div className="flex justify-between">
                <CardDescription className="text-muted-foreground">
                  {experience.location}
                </CardDescription>
                <CardDescription className="whitespace-nowrap text-muted-foreground">
                  {experience.duration}
                </CardDescription>
              </div>
              <CardTitle className="flex items-start justify-between text-foreground md:items-center">
                <div className="w-2/3">
                  {experience.title}{" "}
                  {experience.company && (
                    <span className="text-muted-foreground">
                      {experience.company}
                    </span>
                  )}
                </div>
                {experience.help && (
                  <Dialog>
                    <DialogTrigger>
                      <Badge className="whitespace-nowrap md:hover:bg-primary/90">
                        {experience.help}
                      </Badge>
                    </DialogTrigger>
                    <DialogContent className="max-w-sm md:max-w-lg">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">
                          {experience.help}
                        </DialogTitle>
                        <DialogDescription className="text-base">
                          {experience.helpDescription}
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                {experience.description
                  .split("<ChevronLeftRight />")
                  .map((text, i) => (
                    <span key={i}>
                      {text}
                      {i <
                        experience.description.split("<ChevronLeftRight />")
                          .length -
                          1 && <ChevronLeftRight />}
                    </span>
                  ))}
              </p>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-y-2">
              {experience.skills?.map((skill, skillIndex) => (
                <Badge
                  key={skillIndex}
                  variant="outline"
                  className="mr-2 text-muted-foreground"
                >
                  {skill}
                </Badge>
              ))}
            </CardFooter>
          </Card>
        </FadeRight>
      ))}
    </main>
  );
}
