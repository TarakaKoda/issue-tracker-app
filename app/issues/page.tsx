import { prisma } from "@/prisma/client";
import IssueAction from "./IssueAction";
import IssuesTable from "./IssuesTable";
import { Issue, Status } from "@prisma/client";
import { pages } from "next/dist/build/templates/app-page";
import PaginationIssue from "../components/PaginationIssue";

const columns: { label: string; value: keyof Issue; className: string }[] = [
  { label: "Issue", value: "title", className: "w-auto min-w-52" },
  {
    label: "Status",
    value: "status",
    className: "hidden min-w-52 md:table-cell",
  },
  {
    label: "Created",
    value: "createdAt",
    className: "hidden min-w-52 md:table-cell",
  },
];

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

  const orderBy = columns
    .map((column) => column.value)
    .includes(searchParams.orderBy)
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
    <div className="w-full flex flex-col items-start justify-center">
      <div className="w-full min-h-[74vh]">
        <IssueAction />
        <IssuesTable
          issues={issues}
          searchParams={searchParams}
          columns={columns}
        />
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

export default IssuesPage;
