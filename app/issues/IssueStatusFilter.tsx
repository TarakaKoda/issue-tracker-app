import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Status } from "@prisma/client";

const statuses: { label: string; value?: Status }[] = [
  { label: "All" },
  { label: "Open", value: "OPEN" },
  { label: "In progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];

const IssueStatusFilter = () => {
  return (
    <Select defaultValue="all">
      <SelectTrigger className="dark:border-[#333] md:min-w-[10rem] max-w-40">
        <SelectValue placeholder="Filter by status" />
      </SelectTrigger>
      <SelectContent className="bg-background dark:border-[#222]">
        <SelectGroup>
          <SelectLabel>Status</SelectLabel>
          {statuses.map((status) => (
            <SelectItem key={status.label} value={status.value || "all"}>
              {status.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default IssueStatusFilter;
