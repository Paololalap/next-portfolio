import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingPage() {
  return (
    <div>
      <div className="mt-14 flex flex-col justify-between space-y-4">
        <Skeleton className="mx-auto h-6 w-full rounded-full sm:h-8 md:w-11/12" />
        <Skeleton className="mx-auto h-4 w-4/5 rounded-full sm:h-5 sm:w-3/4 md:w-2/3" />
        <Skeleton className="mx-auto h-4 w-4/5 rounded-full sm:h-5 sm:w-3/4 md:w-2/3" />
      </div>
    </div>
  );
}
