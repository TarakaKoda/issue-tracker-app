import { IssueStatusBadge } from "@/app/components";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueDescriptionCard from "./IssueDescriptionCard";

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
    <div className="flex flex-col gap-5 ">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {issue.title}
      </h1>
      <div className="flex items-center gap-3">
        <IssueStatusBadge status={issue.status} />
        <p className="scroll-m-20 text-xl font-semibold tracking-tight">
          {issue.createdAt.toDateString()}
        </p>
      </div>
      <IssueDescriptionCard cardContent={issue.description} />
    </div>
  );
};

export default IssueDetailPage;
