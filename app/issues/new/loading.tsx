import { Skeleton } from "@/components/ui/skeleton";

const LoadingNewIssuePage = () => {
  return <div className="max-w-xl space-y-3 rounded-xl bg-[#ececec] p-5 dark:bg-[#111]">
    <div className="space-y-8">
      <Skeleton className="w-full h-10 bg-[#f3f3f5] dark:bg-[#333] "/>
      <Skeleton className="w-full h-[25rem] bg-[#f3f3f5] dark:bg-[#333] "/>
      <Skeleton className="w-44 bg-[#f3f3f5] dark:bg-[#333]  h-10"/>
    </div>
  </div>;
};

export default LoadingNewIssuePage;
