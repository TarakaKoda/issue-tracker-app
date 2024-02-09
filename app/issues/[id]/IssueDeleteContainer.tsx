import { Issue } from "@prisma/client";
import IssueDeleteAlertDialogue from "./IssueDeleteAlertDialogue";
import IssueEditButton from "./IssueEditButton";
import AssigneeSelect from "./AssigneeSelect";

const IssueDeleteContainer = ({ issue }: { issue: Issue }) => {
  return (
    <div className="flex gap-3 max-sm:flex-col lg:max-w-36 lg:flex-col lg:justify-self-end lg:mr-4">
      <AssigneeSelect issue={issue} />
      <IssueEditButton issueId={issue.id} />
      <IssueDeleteAlertDialogue issue={issue} />
    </div>
  );
};

export default IssueDeleteContainer;
