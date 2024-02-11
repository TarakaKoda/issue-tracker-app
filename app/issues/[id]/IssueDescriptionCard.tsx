import { Card, CardContent } from "@/components/ui/card";
import { Status } from "@prisma/client";
import ReactMarKdown from "react-markdown";

interface Props {
  cardContent: string;
  issueStatus: Status;
}

const IssueDescriptionCard = ({ cardContent, issueStatus }: Props) => {
  const issueDescriptionColor =
    issueStatus === "CLOSED"
      ? "border-green-500 bg-green-500/15"
      : issueStatus === "OPEN"
        ? "border-red-500 bg-red-500/15"
        : issueStatus === "IN_PROGRESS"
          ? "border-violet-500 bg-violet-500/15"
          : "";
  return (
    <Card className={`max-w-5xl border ${issueDescriptionColor}`}>
      <CardContent className="flex flex-col gap-2 pt-5">
        <ReactMarKdown>{cardContent}</ReactMarKdown>
      </CardContent>
    </Card>
  );
};

export default IssueDescriptionCard;
