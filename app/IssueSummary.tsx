import { Card } from "@/components/ui/card";
import { Status } from "@prisma/client";
import Link from "next/link";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueSummary = ({ open, inProgress, closed }: Props) => {
  const containers: { label: string; value: number; status: Status }[] = [
    { label: "Open Issue", value: open, status: "OPEN" },
    { label: "In Progress Issue", value: inProgress, status: "IN_PROGRESS" },
    { label: "Closed Issue", value: closed, status: "CLOSED" },
  ];

  const getColorClass = (status: Status) => {
    switch (status) {
      case "OPEN":
        return "text-red-600 hover:text-white border border-red-500 bg-red-600/15 dark:hover:bg-red-800 hover:bg-red-600";
      case "IN_PROGRESS":
        return "text-violet-600 hover:text-white border-violet-500 bg-violet-600/15 dark:hover:bg-violet-800 hover:bg-violet-600";
      case "CLOSED":
        return "text-green-600 hover:text-white border-green-500 bg-green-600/15 dark:hover:bg-green-800 hover:bg-green-500";
      default:
        return "";
    }
  };

  return (
    <div className="flex gap-5 max-sm:justify-evenly">
      {containers.map((container) => (
        <Card
          key={container.label}
          className={`h-28 max-sm:h-20 max-sm:p-2 p-5 ${getColorClass(container.status)}`}
        >
          <div className=" flex flex-col">
            <Link
              className="text-sm max-sm:text-xs font-medium"
              href={`/issues?status=${container.status}`}
            >
              {container.label}
            </Link>
            <p className="text-4xl font-bold">{container.value}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default IssueSummary;
