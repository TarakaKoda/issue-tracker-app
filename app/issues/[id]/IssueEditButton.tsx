import { Button } from "@/components/ui/button";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";

interface Props {
  issueId?: number;
  titleType?: "Update" | "Edit";
}

const IssueEditButton = ({ issueId, titleType = "Edit" }: Props) => {
  return (
    <Button className="flex gap-2 justify-around md:justify-self-end">
      {" "}
      <Pencil2Icon />
      <Link href={`/issues/${issueId}/edit`}>{titleType} Issue</Link>
    </Button>
  );
};

export default IssueEditButton;
