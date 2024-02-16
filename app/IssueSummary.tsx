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
        return "dark:text-red-600 dark:hover:text-white text-white border dark:border-red-500 dark:bg-red-600/15 dark:hover:bg-red-800 bg-red-600";
      case "IN_PROGRESS":
        return "dark:text-violet-600 dark:hover:text-white text-white dark:border-violet-500 dark:bg-violet-600/15 dark:hover:bg-violet-800 bg-violet-600";
      case "CLOSED":
        return "dark:text-green-600 dark:hover:text-white text-white dark:border-green-500 dark:bg-green-600/15 dark:hover:bg-green-800 bg-green-500";
      default:
        return "";
    }
  };

  return (
    <div className="flex gap-5 max-sm:justify-evenly">
      {containers.map((container) => (
        <Link
          key={container.label}
          className="text-sm font-medium max-sm:text-xs"
          href={`/issues?status=${container.status}`}
        >
          <Card
            className={`h-28 p-5 max-sm:h-20 max-sm:p-2 max-sm:text-center ${getColorClass(container.status)}`}
          >
            {container.label}
            <div className="flex flex-col">
              <p className="text-4xl font-bold">{container.value}</p>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default IssueSummary;
