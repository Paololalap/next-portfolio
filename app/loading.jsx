import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingPage() {
  return (
    <div>
      <div className="mt-14 flex items-center gap-x-6 ">
        <Skeleton className="size-20 rounded-full"></Skeleton>
        <div className="flex flex-col justify-between space-y-4">
          <Skeleton className="h-4 w-[250px] rounded-md" />
          <Skeleton className="h-4 w-[200px] rounded-md" />
        </div>
      </div>
      <div className="mt-10">
        <Skeleton className="h-5 w-full"></Skeleton>
        <Skeleton className="mt-3 h-5 w-full"></Skeleton>
        <Skeleton className="mt-3 h-5 w-full"></Skeleton>
        <Skeleton className="mt-3 h-5 w-3/4"></Skeleton>
      </div>
      <div className="mt-10">
        <Skeleton className="h-5 w-full"></Skeleton>
        <Skeleton className="mt-3 h-5 w-full"></Skeleton>
        <Skeleton className="mt-3 h-5 w-full"></Skeleton>
        <Skeleton className="mt-3 h-5 w-2/3"></Skeleton>
      </div>
      <Skeleton className="mt-10 h-8 w-1/2"></Skeleton>
    </div>
  );
}
