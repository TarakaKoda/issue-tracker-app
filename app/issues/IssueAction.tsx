import { Button } from "@/components/ui/button";
import Link from "next/link";


const IssueAction = () => {
  return (
    <Link href="/issues/new">
      <Button className="btn">New Issue</Button>
    </Link>
  );
};

export default IssueAction;
