import { prisma } from "@/prisma/client";
import IssueAction from "./IssueAction";
import IssuesTable from "./IssuesTable";
import { Issue, Status } from "@prisma/client";


const IssuesPage = async ({
  searchParams,
}: {
  searchParams: { status: Status; orderBy: keyof Issue };
}) => {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;


  const issues = await prisma.issue.findMany({
    where: {
      status,
    },
  });

  return (
    <div className="w-full">
      <IssueAction />
      <IssuesTable issues={issues} searchParams={searchParams} />
    </div>
  );
};

export const dynamic = "force-dynamic";

export default IssuesPage;
