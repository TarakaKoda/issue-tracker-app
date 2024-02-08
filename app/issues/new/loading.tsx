import { Skeleton } from "@/components/ui/skeleton";

const LoadingNewIssuePage = () => {
  return (
    <div className="grid-col-1 grid h-auto w-full gap-10 lg:grid-cols-2">
      <div className="w-full space-y-3 rounded-xl bg-[#ececec] p-5 dark:bg-[#111]">
        <div className="space-y-8">
          <Skeleton className="h-10 w-full bg-[#f3f3f5] dark:bg-[#333] " />
          <Skeleton className="h-[25rem] w-full bg-[#f3f3f5] dark:bg-[#333] " />
          <Skeleton className="h-10 w-44 bg-[#f3f3f5]  dark:bg-[#333]" />
        </div>
      </div>
      <div className="w-full rounded-xl bg-[#ececec] p-5 dark:bg-[#111]">
        <div className="space-y-8">
          <div className="flex gap-2">
            <Skeleton className="h-10 w-full bg-[#f3f3f5] dark:bg-[#333] " />
            <Skeleton className="h-10 w-full bg-[#f3f3f5] dark:bg-[#333] " />
          </div>
          <Skeleton className="h-[30rem] w-full bg-[#f3f3f5] dark:bg-[#333] " />
        </div>
      </div>
    </div>
  );
};

export default LoadingNewIssuePage;
