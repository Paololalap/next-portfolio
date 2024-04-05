import { cn } from "@/lib/utils";

export default function HoverLine({ className, activeButton }) {
  /* return (
    <span
      className={cn(
        "absolute left-0 top-7 ml-[1px] w-[75%] -translate-x-1/2 border-b-2 border-zinc-400 opacity-0 transition-all duration-500 group-hover:left-1/2 group-hover:border-white group-hover:opacity-100",
        className,
      )}
    ></span>
  ); */
  const getPosition = () => {
    switch (activeButton) {
      case "home":
        return "left-[17%] w-[23%] hover:opacity-100";
      case "work":
        return "left-[48%] w-[21%] hover:opacity-100";
      case "projects":
        return "left-[81%] w-[29%] hover:opacity-100";
      default:
        return "hidden";
    }
  };

  return (
    <span
      className={cn(
        "left- absolute top-7 w-[30%] -translate-x-1/2 border-b-2 border-zinc-400 opacity-0 transition-all duration-500 group-hover:border-white group-hover:opacity-100",
        className,
        getPosition(),
      )}
    ></span>
  );
}
