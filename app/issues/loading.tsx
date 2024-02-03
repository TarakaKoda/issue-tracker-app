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
    <div className="flex flex-col">
      <IssueAction />
      <Table>
        <TableCaption className="mb-5 font-semibold uppercase text-foreground">
          A list of recent issues
        </TableCaption>
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
                <Skeleton className="h-10 w-full bg-[#111] max-md:h-5" />
                <div className="block md:hidden">
                  <Skeleton className="h-6 max-w-[7rem] bg-[#111]" />
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Skeleton className="h-10 max-min-28 max-w-28 bg-[#111]" />
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Skeleton className="h-10 w-full bg-[#111]" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>{/* <TableCell colSpan={2}>Total</TableCell> */}</TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default LoadingIssuesPage;
