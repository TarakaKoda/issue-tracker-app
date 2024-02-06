import { IssueForm } from "../_components";
import IssueGuideTabs from "./IssueGuideTabs";

const NewIssuePage = () => {
  return (
    <div className="grid-col-1 w-full grid h-auto gap-10 lg:grid-cols-2">
      <IssueForm />
      <div className="rounded-xl w-full bg-[#ececec] p-5 dark:bg-[#111]">
        <IssueGuideTabs />
      </div>
    </div>
  );
};

export default NewIssuePage;
