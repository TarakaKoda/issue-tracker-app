import {prisma} from "@/prisma/client";
import IssueAction from "./IssueAction";
import IssuesTable from "./IssuesTable";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();

  return (
    <div className="w-full">
      <IssueAction />
      <IssuesTable issues={issues} />
    </div>
  );
};

export const dynamic = "force-dynamic";

export default IssuesPage;
