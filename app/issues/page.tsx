import { prisma } from "@/prisma/client";
import { Issue, Status } from "@prisma/client";
import PaginationIssue from "../components/PaginationIssue";
import IssueAction from "./IssueAction";
import IssuesTable from "./IssuesTable";
import { columnNames } from "./IssuesTable";
import { Metadata } from "next";

const IssuesPage = async ({
  searchParams,
}: {
  searchParams: {
    status: Status;
    orderBy: keyof Issue;
    direction: "asc" | "desc";
    page: string;
  };
}) => {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const where = { status };

  const direction = searchParams.direction === "desc" ? "desc" : "asc";

  const orderBy = columnNames.includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: direction }
    : undefined;

  const page = +searchParams.page || 1;
  const pageSize = 10;

  const issues = await prisma.issue.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const issueCount = await prisma.issue.count({ where });

  return (
    <div className="flex w-full flex-col items-start justify-center">
      <div className="min-h-[74vh] w-full">
        <IssueAction status={status!} />
        <IssuesTable issues={issues} searchParams={searchParams} />
      </div>
      <PaginationIssue
        pageSize={pageSize}
        currentPage={page}
        itemCount={issueCount}
      />
    </div>
  );
};

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Issue Tracker - Issue List",
  description: "View all project issues",
};
export default IssuesPage;
