import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDateString, multiFormatDateString } from "@/lib/utils";
import { Issue } from "@prisma/client";
import Link from "next/link";
import { SlCalender } from "react-icons/sl";
import { IssueStatusBadge, IssueToolTip } from "../components";

interface Props {
  issues: Issue[];
}

const IssuesTable = ({ issues }: Props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="uppercase">
          <TableHead className="w-auto min-w-52">Issue</TableHead>
          <TableHead className="hidden min-w-52 md:table-cell">
            Status
          </TableHead>
          <TableHead className="hidden min-w-52 md:table-cell">
            Created
          </TableHead>
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
