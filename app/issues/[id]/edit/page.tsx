import { notFound } from "next/navigation";
import { IssueForm } from "../../_components";
import prisma from "@/prisma/client";

interface Props {
  params: { id: string };
}

const IssueEditPage = async ({ params: { id } }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });

  if (!issue) notFound();

  return <IssueForm updatingIssue={true} issue={issue} />;
};

export default IssueEditPage;
