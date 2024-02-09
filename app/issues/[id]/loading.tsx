import { Skeleton } from "@/components/ui/skeleton";

const LoadingIssueDetailPage = async () => {
  return (
    <div className="grid grid-cols-1 max-lg:gap-5 lg:grid-cols-5 lg:gap-5">
      <div className="flex max-w-5xl flex-col gap-5 lg:col-span-4">
        <Skeleton className="h-14 max-sm:h-20 w-full max-sm:mb-4 bg-[#f3f3f5] dark:bg-[#333]" />

        <div className="flex items-center gap-3 max-sm:flex-col max-sm:items-start max-sm:gap-3">
          <Skeleton className="h-10 bg-[#f3f3f5] dark:bg-[#333] max-lg:w-36 md:min-w-[8rem]" />
          <Skeleton className=" h-10 bg-[#f3f3f5] dark:bg-[#333] max-lg:w-48 md:min-w-[11rem]" />
        </div>
        <Skeleton className=" h-80 max-w-full bg-[#f3f3f5] dark:bg-[#333] lg:h-[29rem]" />
      </div>
      <div className="flex gap-3 max-sm:flex-col lg:max-w-36 lg:flex-col lg:justify-self-end">
        <Skeleton className="h-10 w-full bg-[#f3f3f5] dark:bg-[#333] sm:w-44 lg:w-36" />
        <Skeleton className="h-10 w-full bg-[#f3f3f5] dark:bg-[#333] sm:w-44 lg:w-36" />
        <Skeleton className=" h-10 w-full bg-[#f3f3f5] dark:bg-[#333] sm:w-44 lg:w-36" />
      </div>
    </div>
  );
};

export default LoadingIssueDetailPage;
