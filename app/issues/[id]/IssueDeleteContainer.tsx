import { Issue } from "@prisma/client";
import IssueDeleteAlertDialogue from "./IssueDeleteAlertDialogue";
import IssueEditButton from "./IssueEditButton";

const IssueDeleteContainer = ({ issue }: { issue: Issue }) => {
  return (
    <div className="flex gap-3 max-sm:flex-col md:max-w-36 md:flex-col md:justify-self-end md:mr-4">
      <IssueEditButton issueId={issue.id} />
      <IssueDeleteAlertDialogue issue={issue} />
    </div>
  );
};

export default IssueDeleteContainer;
