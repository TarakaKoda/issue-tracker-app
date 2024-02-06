import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueDeleteButton from "./IssueDeleteButton";
import IssueDetails from "./IssueDetails";
import IssueEditButton from "./IssueEditButton";
import IssueDeleteAlertDialogue from "./IssueDeleteAlertDialogue";

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
      <div className="flex gap-3 max-sm:flex-col md:max-w-36 md:flex-col md:justify-self-end">
        <IssueEditButton issueId={issue.id} />
        <IssueDeleteAlertDialogue issue={issue}>
          <IssueDeleteButton issueId={issue.id} />
        </IssueDeleteAlertDialogue>
      </div>
    </div>
  );
};

export default IssueDetailPage;
