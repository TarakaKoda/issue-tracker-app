import { Skeleton } from "@/components/ui/skeleton";
import {
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Table,
} from "@/components/ui/table";
import IssueAction from "./IssueAction";

const LoadingIssuesPage = () => {
  const issues = [1, 2, 3, 5, 6, 7, 9, 10];
  return (
    <div className="flex flex-col w-full">
      <IssueAction />
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
                <Skeleton className="h-10 w-full dark:bg-[#111] max-md:h-5 bg-[#f3f3f5]" />
                <div className="block md:hidden">
                  <Skeleton className="h-6 max-w-[7rem] dark:bg-[#111] bg-[#f3f3f5]" />
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Skeleton className="h-10 max-min-28 max-w-28 dark:bg-[#111] bg-[#f3f3f5]" />
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Skeleton className="h-10 w-full dark:bg-[#111] bg-[#f3f3f5]" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LoadingIssuesPage;
