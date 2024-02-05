import { Button } from "@/components/ui/button";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";

interface Props {
  issueId: number;
}

const IssueEditButton = ({ issueId }: Props) => {
  return (
    <Button className="flex w-32 justify-around md:justify-self-end">
      {" "}
      <Pencil2Icon />
      <Link href={`/issues/${issueId}/edit`}>Edit Issue</Link>
    </Button>
  );
};

export default IssueEditButton;
