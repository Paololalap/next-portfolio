export default function Footer() {
  const currentDate = new Date();
  const monthYear =
    currentDate.toLocaleString("en-US", { month: "long" }) +
    ", " +
    currentDate.getFullYear();

  return (
    <footer className="mx-auto mt-10 max-w-2xl text-xs text-zinc-400">
      Updated at {monthYear}
    </footer>
  );
}
