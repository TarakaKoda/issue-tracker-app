import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import IssueAction from "./IssueAction";
import { Status } from "@prisma/client";

interface Props {
  searchParams: { status: Status };
}

const LoadingIssuesPage = ({ searchParams }: Props) => {
  const issues = [1, 2, 3, 5, 6, 7, 9, 10];
  return (
    <div className="flex w-full flex-col">
      <IssueAction/>
      <Table>
        <TableHeader>
          <TableRow className="uppercase">
            <TableHead className="md:min-w-[13rem]">Issue</TableHead>
            <TableHead className="hidden md:table-cell">Status</TableHead>
            <TableHead className="hidden md:table-cell">Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {issues.map((issue) => (
            <TableRow key={issue}>
              <TableCell className="font-medium max-md:flex max-md:flex-col max-md:gap-2">
                <Skeleton className="h-10 w-full bg-[#f3f3f5] dark:bg-[#111] max-md:h-5" />
                <div className="block md:hidden">
                  <Skeleton className="h-6 max-w-[7rem] bg-[#f3f3f5] dark:bg-[#111]" />
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Skeleton className="max-min-28 h-10 max-w-28 bg-[#f3f3f5] dark:bg-[#111]" />
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Skeleton className="h-10 w-full bg-[#f3f3f5] dark:bg-[#111]" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LoadingIssuesPage;
