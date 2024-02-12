import { notFound } from "next/navigation";
import { IssueForm } from "../../_components";
import { prisma } from "@/prisma/client";
import { Description } from "@radix-ui/react-toast";
import { Metadata } from "next";

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

export const metadata: Metadata = {
  title: `Edit Issue`,
  description: `Updating the current issue `,
};

export default IssueEditPage;
