import authOptions from "@/app/auth/authOptions";
import { prisma } from "@/prisma/client";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import IssueDeleteContainer from "./IssueDeleteContainer";
import IssueDetails from "./IssueDetails";
import { cache } from "react";

interface Props {
  params: { id: string };
}

const fetchIssue = cache((issueId: number) =>
  prisma.issue.findUnique({ where: { id: issueId } }),
);

const IssueDetailPage = async ({ params: { id } }: Props) => {
  const session = await getServerSession(authOptions);

  const issue = await fetchIssue(parseInt(id));

  if (!issue) notFound();
  return (
    <div className="grid grid-cols-1 max-lg:gap-5 lg:grid-cols-5">
      <IssueDetails issue={issue} />
      {session && <IssueDeleteContainer issue={issue} />}
    </div>
  );
};

export async function generateMetadata({ params: { id } }: Props) {
  const issue = await fetchIssue(parseInt(id));

  return {
    title: `${issue?.title}`,
    description: `Details of issue ${issue?.id}`,
  };
}

export default IssueDetailPage;
