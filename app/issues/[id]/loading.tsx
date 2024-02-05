import { Skeleton } from "@/components/ui/skeleton";

const LoadingIssueDetailPage = async () => {
  return (
    <div className="flex max-w-5xl flex-col gap-5 ">
      <Skeleton className="h-14 w-full  bg-[#f3f3f5] dark:bg-[#333]" />

      <div className="flex items-center gap-3">
        <Skeleton className="max-min-[8rem] h-10 min-w-[8rem] bg-[#f3f3f5] dark:bg-[#333]" />
        <Skeleton className="max-min-[11rem] h-10 min-w-[11rem] bg-[#f3f3f5] dark:bg-[#333]" />
      </div>
      <Skeleton className=" max-w-full bg-[#f3f3f5] dark:bg-[#333] md:h-[29rem]" />
    </div>
  );
};

export default LoadingIssueDetailPage;
