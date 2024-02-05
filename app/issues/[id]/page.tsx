import { IssueStatusBadge } from "@/app/components";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueDescriptionCard from "./IssueDescriptionCard";
import { Button } from "@/components/ui/button";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";

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
      <div className="flex flex-col gap-3 md:gap-5">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {issue.title}
        </h1>
        <div className="flex items-center gap-3">
          <IssueStatusBadge status={issue.status} />
          <p className="scroll-m-20 text-lg font-semibold tracking-tight sm:text-xl">
            {issue.createdAt.toDateString()}
          </p>
        </div>
        <IssueDescriptionCard cardContent={issue.description} />
      </div>
      <Button className="flex w-32 justify-around md:justify-self-end">
        {" "}
        <Pencil2Icon />
        <Link href={`/issues/${issue.id}/edit`}>Edit Issue</Link>
      </Button>
    </div>
  );
};

export default IssueDetailPage;
