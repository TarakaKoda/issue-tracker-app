import { Button } from "@/components/ui/button";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";

interface Props {
  issueId?: number;
  titleType?: "Update" | "Edit";
}

const IssueEditButton = ({ issueId, titleType = "Edit" }: Props) => {
  return (
    <Button className="flex md:min-w-[10rem] justify-center gap-2 hover:bg-[#222] dark:hover:bg-gray-100 max-md:justify-center">
      {" "}
      <Pencil2Icon />
      <Link href={`/issues/${issueId}/edit`}>{titleType} Issue</Link>
    </Button>
  );
};

export default IssueEditButton;
