export default function ChevronLeftRight() {
  return (
    <svg
      className={
        "mb-[4px] mr-1 inline size-5 self-center rounded-md bg-[#3f3f46] text-[#a1a1aa]"
      }
    >
      <use href={`./icons/sprite.svg#lucide/chevrons-left-right`} />
    </svg>
  );
}
