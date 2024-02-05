import { IssueStatusBadge } from "@/app/components";
import IssueDescriptionCard from "./IssueDescriptionCard";
import { Issue } from "@prisma/client";

interface Props {
  issue: Issue;
}

const IssueDetails = ({ issue }: Props) => {
  return (
    <div className="flex flex-col md:col-span-4 gap-3 md:gap-5">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {issue.title}
      </h1>
      <div className="flex items-center gap-3">
        <IssueStatusBadge status={issue.status} />
        <p className="scroll-m-20 text-lg font-semibold tracking-tight sm:text-xl">
          {issue.createdAt.toDateString()}
        </p>
      </div>
      <IssueDescriptionCard cardContent={issue.description} />
    </div>
  );
};

export default IssueDetails;
