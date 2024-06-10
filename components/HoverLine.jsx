import { cn } from "@/lib/utils";

export default function HoverLine({ className, activeButton }) {
  const getPosition = () => {
    switch (activeButton) {
      case "home":
        return "left-[17%] w-[23%]";
      case "work":
        return "left-[48%] w-[21%]";
      case "projects":
        return "left-[81%] w-[29%]";
      default:
        return "hidden";
    }
  };

  return (
    <span
      className={cn(
        "absolute top-7 w-[30%] -translate-x-1/2 border-b-2 border-muted-foreground transition-all duration-500 group-hover:border-foreground",
        className,
        getPosition(),
      )}
    ></span>
  );
}
