import { Badge } from "@/components/ui/badge";
import { Status } from "@prisma/client";
import React from "react";

interface Props {
  status: Status;
}

const statusMap: Record<
  Status,
  { label: string; color: "red" | "green" | "violet" }
> = {
  OPEN: { label: "Open", color: "red" },
  IN_PROGRESS: { label: "In Progress", color: "violet" },
  CLOSED: { label: "closed", color: "green" },
};

const IssueStatusBadge = ({ status }: Props) => {
  const getColorClass = (status: Status) => {
    switch (status) {
      case "OPEN":
        return "bg-red-600 hover:bg-red-800";
      case "IN_PROGRESS":
        return "bg-violet-600 hover:bg-violet-800";
      case "CLOSED":
        return "bg-green-600 hover:bg-green-800";
      default:
        return "";
    }
  };
  return (
    <Badge
      className={` flex h-8 min-w-28 max-w-28 items-center justify-center rounded-sm font-medium uppercase text-white max-md:h-6 max-md:min-w-[7rem] max-md:max-w-[5rem] ${getColorClass(status)}`}
    >
      {statusMap[status].label}
    </Badge>
  );
};

export default IssueStatusBadge;
