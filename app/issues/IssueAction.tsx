import { Button } from "@/components/ui/button";
import { MdOutlinePostAdd } from "react-icons/md";
import Link from "next/link";
import IssueStatusFilter from "./IssueStatusFilter";

const IssueAction = () => {
  return (
    <div className="flex gap-4 justify-between">
      <IssueStatusFilter/>
      <Link href="/issues/new">
        <Button className="flex gap-1 hover:bg-[#222] dark:hover:bg-gray-100">
          <MdOutlinePostAdd className="text-lg" />
          New Issue
        </Button>
      </Link>
    </div> 
  );
};

export default IssueAction;
