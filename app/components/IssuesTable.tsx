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

interface IssueInterface {
  id: number;
  title: string;
  description: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Props {
  issues: IssueInterface[];
}

const IssuesTable = ({ issues }: Props) => {
  return (
    <Table>
      <TableCaption className="mb-5 font-semibold uppercase text-foreground">
        A list of recent issues
      </TableCaption>
      <TableHeader>
        <TableRow className="uppercase">
          <TableHead className="">Issue</TableHead>
          <TableHead className="hidden md:table-cell">Status</TableHead>
          <TableHead className="hidden md:table-cell">Created</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {issues.map((issue) => (
          <TableRow key={issue.id}>
            <TableCell className="font-medium">
              {issue.title}
              <div className="block md:hidden">{issue.status}</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {issue.status}
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
