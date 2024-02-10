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
import { ReactElement, useState } from "react";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { IoMdStopwatch } from "react-icons/io";
import { MdDoneOutline } from "react-icons/md";
import { GrStatusInfo } from "react-icons/gr";

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
    symbol: <HiOutlineQuestionMarkCircle className="text-red-500" />,
    color: "red",
  },
  {
    label: "In progress",
    value: "IN_PROGRESS",
    symbol: <IoMdStopwatch className="text-violet-500" />,
    color: "violet",
  },
  {
    label: "Closed",
    value: "CLOSED",
    symbol: <MdDoneOutline className="text-green-500" />,
    color: "green",
  },
];

const IssueStatusFilter = () => {
  const [status, setStatus] = useState("");
  const getColorClass = (status: string) => {
    switch (status) {
      case "OPEN":
        return "text-red-600 !border-red-500 bg-red-600/15 ";
      case "IN_PROGRESS":
        return "text-violet-600 !border-violet-500 bg-violet-600/15 ";
      case "CLOSED":
        return "text-green-600 !border-green-500 bg-green-600/15 ";
      default:
        return "dark:!border-[#222]";
    }
  };
  const router = useRouter();
  const searchParams = useSearchParams();
  return (
    <Select
      defaultValue="all"
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
        setStatus(selectStatus);
        router.push(`/issues/${query}`);
      }}
    >
      <SelectTrigger
        className={`max-w-40 border md:min-w-[10rem] ${getColorClass(status)}`}
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
                <p className={`text-${status.color}-500 font-medium`}>
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
