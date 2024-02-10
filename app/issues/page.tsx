import { prisma } from "@/prisma/client";
import IssueAction from "./IssueAction";
import IssuesTable from "./IssuesTable";
import { Issue, Status } from "@prisma/client";

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
  };
}) => {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const direction = searchParams.direction === "desc" ? "desc" : "asc";

  const orderBy = columns
    .map((column) => column.value)
    .includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: direction }
    : undefined;

  const issues = await prisma.issue.findMany({
    where: {
      status,
    },
    orderBy,
  });

  return (
    <div className="w-full">
      <IssueAction />
      <IssuesTable
        issues={issues}
        searchParams={searchParams}
        columns={columns}
      />
    </div>
  );
};

export const dynamic = "force-dynamic";

export default IssuesPage;
