import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import ReactMarKdown from "react-markdown";

interface Props {
  cardTitle?: string;
  cardDescription?: string;
  cardContent: string;
  cardFooter?: string;
}

const IssueDescriptionCard = ({
  cardContent,
  cardTitle,
  cardDescription,
  cardFooter,
}: Props) => {
  return (
    <Card className="border dark:border-[#444] max-w-5xl dark:bg-darkBackground1">
      <CardContent className="flex flex-col pt-5">
        <ReactMarKdown>{cardContent}</ReactMarKdown>
      </CardContent>
    </Card>
  );
};

export default IssueDescriptionCard;
