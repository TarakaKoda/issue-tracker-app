import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Issue } from "@prisma/client";
import Link from "next/link";
import IssueStatusBadge from "../components/IssueStatusBadge";

interface Props {
  issues: Issue[];
}

const IssuesTable = ({ issues }: Props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="uppercase">
          <TableHead className="w-auto">Issue</TableHead>
          <TableHead className="hidden md:table-cell">Status</TableHead>
          <TableHead className="hidden md:table-cell">Created</TableHead>
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
              {issue.createdAt.toDateString()}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default IssuesTable;
