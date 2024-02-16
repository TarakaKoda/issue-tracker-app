import { prisma } from "@/prisma/client";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import EditIssueForm from "./EditIssueForm";

interface Props {
  params: { id: string };
}

const IssueEditPage = async ({ params: { id } }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });

  if (!issue) notFound();

  ;
  return <div>
    <h2 className="text-3xl mb-3 max-lg:block hidden">Edit Issue</h2>
    <EditIssueForm issue={issue} />
  </div>

};

export const metadata: Metadata = {
  title: `Edit Issue`,
  description: `Updating the current issue `,
};

export default IssueEditPage;
