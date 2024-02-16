import { Badge } from "@/components/ui/badge";
import { Status } from "@prisma/client";
import { ReactElement } from "react";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { IoMdStopwatch } from "react-icons/io";
import { MdDoneOutline } from "react-icons/md";

interface Props {
  status: Status;
}

const statusMap: Record<
  Status,
  { label: string; color: "red" | "green" | "violet"; symbol: ReactElement }
> = {
  OPEN: { label: "Open", color: "red", symbol: <HiOutlineQuestionMarkCircle className="text-sm" /> },
  IN_PROGRESS: {
    label: "In Progress",
    color: "violet",
    symbol: <IoMdStopwatch className="text-sm" />,
  },
  CLOSED: { label: "closed", color: "green", symbol: <MdDoneOutline /> },
};

const IssueStatusBadge = ({ status }: Props) => {
  const getColorClass = (status: Status) => {
    switch (status) {
      case "OPEN":
        return "dark:text-red-600 dark:hover:text-white bg-red-500 border border-red-500 dark:bg-red-600/15 dark:hover:bg-red-800 hover:bg-red-600";
      case "IN_PROGRESS":
        return "dark:text-violet-600 dark:hover:text-white bg-violet-500 border-violet-500 dark:bg-violet-600/15 dark:hover:bg-violet-800 hover:bg-violet-600";
      case "CLOSED":
        return "dark:text-green-600 dark:hover:text-white bg-green-500 border-green-500 dark:bg-green-600/15 dark:hover:bg-green-800 hover:bg-green-500";
      default:
        return "";
    }
  };
  return (
    <Badge
      className={` flex text-nowrap w-36 h-10 items-center justify-center gap-1 rounded-md font-medium uppercase hover:text-white  ${getColorClass(status)}`}
    >
      {statusMap[status].symbol}
      <p>{statusMap[status].label}</p>
    </Badge>
  );
};

export default IssueStatusBadge;
