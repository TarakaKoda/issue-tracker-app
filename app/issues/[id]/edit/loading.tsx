import { Skeleton } from "@/components/ui/skeleton";

const LoadingEditIssuePage = () => {
  return (
    <div className="w-full space-y-3 rounded-xl bg-[#ececec] p-5 dark:bg-[#111]">
      <div className="space-y-8">
        <Skeleton className="h-10 w-full bg-[#f3f3f5] dark:bg-[#333] " />
        <Skeleton className="h-[25rem] w-full bg-[#f3f3f5] dark:bg-[#333] " />
        <Skeleton className="h-10 w-full bg-[#f3f3f5] dark:bg-[#333] " />
        <Skeleton className="h-10 w-44 bg-[#f3f3f5]  dark:bg-[#333]" />
      </div>
    </div>
  );
};

export default LoadingEditIssuePage;
