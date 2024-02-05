import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueDetails from "./IssueDetails";
import IssueEditButton from "./IssueEditButton";
import IssueDeleteButton from "./IssueDeleteButton";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params: { id } }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!issue) notFound();

  return (
    <div className="grid grid-cols-1 max-md:gap-5 md:grid-cols-5">
      <IssueDetails issue={issue} />
      <div className="flex md:flex-col md:justify-self-end gap-3 max-w-36">
        <IssueEditButton issueId={issue.id} />
        <IssueDeleteButton issueId={issue.id} />
      </div>
    </div>
  );
};

export default IssueDetailPage;
