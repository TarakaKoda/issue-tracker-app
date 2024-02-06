import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueDeleteContainer from "./IssueDeleteContainer";
import IssueDetails from "./IssueDetails";

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
      <IssueDeleteContainer issue={issue} />
    </div>
  );
};

export default IssueDetailPage;
