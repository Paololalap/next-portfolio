export default function Loading() {
  return (
    <div
      className="grid w-screen overflow-hidden place-items-center"
      style={{ height: `calc(100vh - 82px)` }}
    >
      <span
        className={`
      relative size-16 rotate-45 overflow-hidden bg-background 
      
      before:absolute before:inset-[-15px] before:m-auto before:animate-diamondLoader before:bg-primary

      after:absolute after:inset-[8px] after:m-auto after:bg-[#222b32] `}
      />
    </div>
  );
}
