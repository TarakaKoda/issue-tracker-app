import { Button } from "@/components/ui/button";
import { MdDeleteOutline } from "react-icons/md";

const IssueDeleteButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button className="flex justify-around dark:bg-red-500/80 max-md:justify-center bg-red-500 hover:bg-red-600 border text-white dark:hover:bg-red-500  border-red-500 gap-2">
      <MdDeleteOutline className="text-lg" />
      Delete Issue
    </Button>
  );
};

export default IssueDeleteButton;
