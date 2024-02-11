import { IssueStatusBadge, IssueToolTip } from "@/app/components";
import IssueDescriptionCard from "./IssueDescriptionCard";
import { Issue } from "@prisma/client";
import { formatDateString, multiFormatDateString } from "@/lib/utils";
import { SlCalender } from "react-icons/sl";

interface Props {
  issue: Issue;
}

const IssueDetails = ({ issue }: Props) => {
  return (
    <div className="flex flex-col gap-4 lg:col-span-4 lg:gap-5">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight max-sm:mb-4 max-sm:text-center lg:text-5xl">
        {issue.title}
      </h1>
      <div className="flex items-center gap-5 max-sm:flex-col max-sm:items-start max-sm:gap-3">
        <IssueStatusBadge status={issue.status} />
        <div className="flex  items-center gap-2">
          <IssueToolTip
            toolTipContent={`Last updated: ${multiFormatDateString(issue.updatedAt.toISOString())}`}
          >
            <SlCalender />
          </IssueToolTip>
          <p className="scroll-m-20 text-lg font-semibold tracking-tight max-md:text-center sm:text-xl">
            {formatDateString(issue.createdAt.toISOString())}
          </p>
        </div>
      </div>
      <IssueDescriptionCard cardContent={issue.description} issueStatus={issue.status} />
    </div>
  );
};

export default IssueDetails;
