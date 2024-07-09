export default function Footer() {
  const currentDate = new Date();
  const monthYear =
    currentDate.toLocaleString("en-US", { month: "long" }) +
    ", " +
    currentDate.getFullYear();

  return (
    <footer className="mx-auto mt-10 max-w-2xl text-xs text-muted-foreground px-8 md:p-0">
      <p>
        Updated at{" "}
        <time dateTime={currentDate.toISOString().split("T")[0]}>
          {monthYear}
        </time>
      </p>
    </footer>
  );
}
