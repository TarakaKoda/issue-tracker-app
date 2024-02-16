"use client";

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
import { useRouter, useSearchParams } from "next/navigation";
import { ReactElement } from "react";
import { GrStatusInfo } from "react-icons/gr";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { IoMdStopwatch } from "react-icons/io";
import { MdDoneOutline } from "react-icons/md";

const statuses: {
  label: string;
  value?: Status;
  symbol: ReactElement;
  color?: "red" | "green" | "violet" | "foreground";
}[] = [
  { label: "All Status", symbol: <GrStatusInfo />, color: "foreground" },
  {
    label: "Open",
    value: "OPEN",
    symbol: <HiOutlineQuestionMarkCircle className="dark:text-red-500" />,
    color: "red",
  },
  {
    label: "In progress",
    value: "IN_PROGRESS",
    symbol: <IoMdStopwatch className="dark:text-violet-500" />,
    color: "violet",
  },
  {
    label: "Closed",
    value: "CLOSED",
    symbol: <MdDoneOutline className="dark:text-green-500" />,
    color: "green",
  },
];

const IssueStatusFilter = ({  selectedStatus }: { selectedStatus?: Status }) => {
  const getColorClass = (status?: string) => {
    switch (status) {
      case "OPEN":
        return "!text-white dark:text-red-600  bg-red-500 !border-red-500 dark:bg-red-600/15";
      case "IN_PROGRESS":
        return "text-white dark:text-violet-600  bg-violet-500 !border-violet-500 dark:bg-violet-600/15 ";
      case "CLOSED":
        return "dark:text-green-600  bg-green-500 !border-green-500 dark:bg-green-600/15 ";
      default:
        return "dark:!border-[#222] text-foreground";
    }
  };
  const router = useRouter();
  const searchParams = useSearchParams();
  return (
    <Select
      defaultValue={selectedStatus || "all"}
      onValueChange={(selectStatus) => {
        const params = new URLSearchParams();
        if (selectStatus) {
          selectStatus = selectStatus === "all" ? "" : selectStatus;
          params.append("status", selectStatus);
        }
        if (searchParams.get("orderBy"))
          params.append("orderBy", searchParams.get("orderBy")!);

        if (searchParams.get("direction"))
          params.append("direction", searchParams.get("direction")!);
        const query = params.size ? "?" + params.toString() : "";
        router.push(`/issues/${query}`);
      }}
    >
      <SelectTrigger
        className={`max-w-40 border md:min-w-[10rem] ${getColorClass(selectedStatus)}`}
      >
        <SelectValue placeholder="Filter by status" />
      </SelectTrigger>
      <SelectContent className={`bg-background dark:border-[#222]`}>
        <SelectGroup>
          <SelectLabel>Status</SelectLabel>
          {statuses.map((status) => (
            <SelectItem key={status.label} value={status.value || "all"}>
              <div className="flex items-center gap-2">
                {status.symbol}
                <p className={`dark:text-${status.color}-500 font-medium`}>
                  {status.label}
                </p>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default IssueStatusFilter;
