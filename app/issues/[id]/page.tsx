import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueDetails from "./IssueDetails";
import IssueEditButton from "./IssueEditButton";

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
    <div className="grid grid-cols-1 max-md:gap-5 md:grid-cols-2">
      <IssueDetails issue={issue} />
      <IssueEditButton issueId={issue.id} />
    </div>
  );
};

export default IssueDetailPage;
