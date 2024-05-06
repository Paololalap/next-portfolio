export default function Footer() {
  const currentDate = new Date();
  const monthYear =
    currentDate.toLocaleString("en-US", { month: "long" }) +
    ", " +
    currentDate.getFullYear();

  return (
    <footer className="text-zinc-400 text-xs mt-10">
      Updated at {monthYear}
    </footer>
  );
}
