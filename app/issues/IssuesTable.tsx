import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDateString, multiFormatDateString } from "@/lib/utils";
import { Issue, Status } from "@prisma/client";
import Link from "next/link";
import { SlCalender } from "react-icons/sl";
import { IssueStatusBadge, IssueToolTip } from "../components";
import IssuesSortOrderBy from "./IssuesSortOrderBy";

interface Props {
  issues: Issue[];
  searchParams: {
    status: Status;
    orderBy: keyof Issue;
    direction: "asc" | "desc";
  };
  columns: { label: string; value: keyof Issue; className: string }[];
}

const IssuesTable = ({ issues, searchParams, columns }: Props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="uppercase">
          {columns.map((column) => (
            <TableHead key={column.value} className={column.className}>
              <Link
                href={{
                  query: { ...searchParams, orderBy: column.value },
                }}
                className="flex items-center justify-between gap-4"
              >
                {column.label}
                {column.value === searchParams.orderBy && (
                  <IssuesSortOrderBy searchParams={searchParams} />
                )}
              </Link>
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {issues.map((issue) => (
          <TableRow
            key={issue.id}
            className="hover:bg-[#f3f3f5] dark:hover:bg-[#111]"
          >
            <TableCell className="font-medium max-md:flex max-md:flex-col max-md:gap-2">
              <Link href={`/issues/${issue.id}`} className="link">
                {issue.title}
              </Link>

              <div className="block md:hidden">
                <IssueStatusBadge status={issue.status} />
              </div>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              <IssueStatusBadge status={issue.status} />
            </TableCell>
            <TableCell className="hidden md:table-cell">
              <IssueToolTip
                toolTipContent={`Updated ${multiFormatDateString(
                  issue.updatedAt.toISOString(),
                )}`}
              >
                <p className="flex max-w-48 cursor-help items-center justify-evenly rounded-md border border-[#d3d3d5] py-2 text-center leading-7 transition-colors hover:border-foreground hover:bg-foreground hover:text-background dark:border-[#333] dark:hover:text-black [&:not(:first-child)]:mt-6">
                  <SlCalender />
                  {formatDateString(issue.createdAt.toISOString())}
                </p>
              </IssueToolTip>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default IssuesTable;
