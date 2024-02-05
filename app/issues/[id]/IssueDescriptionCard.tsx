import { Card, CardContent } from "@/components/ui/card";
import ReactMarKdown from "react-markdown";

interface Props {
  cardContent: string;
}

const IssueDescriptionCard = ({ cardContent }: Props) => {
  return (
    <Card className="max-w-5xl border dark:border-[#444] dark:bg-darkBackground1">
      <CardContent className="flex flex-col gap-2 pt-5">
        <ReactMarKdown>{cardContent}</ReactMarKdown>
      </CardContent>
    </Card>
  );
};

export default IssueDescriptionCard;
