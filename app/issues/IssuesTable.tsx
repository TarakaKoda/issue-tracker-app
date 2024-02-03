import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Issue } from "@prisma/client";
import IssueStatusBadge from "../components/IssueStatusBadge";

interface Props {
  issues: Issue[];
}

const IssuesTable = ({ issues }: Props) => {
  return (
    <Table>
      <TableCaption className="mb-5 font-semibold uppercase text-foreground">
        A list of recent issues
      </TableCaption>
      <TableHeader>
        <TableRow className="uppercase">
          <TableHead className="w-auto">Issue</TableHead>
          <TableHead className="hidden md:table-cell">Status</TableHead>
          <TableHead className="hidden md:table-cell">Created</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {issues.map((issue) => (
          <TableRow key={issue.id}>
            <TableCell className="font-medium max-md:flex max-md:flex-col max-md:gap-2">
              {issue.title}
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
      <TableFooter>
        <TableRow>{/* <TableCell colSpan={2}>Total</TableCell> */}</TableRow>
      </TableFooter>
    </Table>
  );
};

export default IssuesTable;
