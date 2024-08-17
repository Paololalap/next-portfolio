import { FC } from "react";

const Footer: FC = () => {
  const currentDate = new Date();
  const monthYear: string =
    currentDate.toLocaleString("en-US", { month: "long" }) +
    ", " +
    currentDate.getFullYear();

  return (
    <footer className="mx-auto mt-10 max-w-2xl px-8 text-xs text-muted-foreground md:p-0">
      <p>
        Updated at{" "}
        <time dateTime={currentDate.toISOString().split("T")[0]}>
          {monthYear}
        </time>
      </p>
    </footer>
  );
};

export { Footer };
