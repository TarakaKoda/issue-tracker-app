import { Button } from "@/components/ui/button";
import Link from "next/link";


const IssueAction = () => {
  return (
    <Link href="/issues/new">
      <Button className="btn dark:hover:bg-gray-100 hover:bg-[#222]">New Issue</Button>
    </Link>
  );
};

export default IssueAction;
