import { IssueForm } from "../_components";
import IssueGuideTabs from "./IssueGuideTabs";

const NewIssuePage = () => {
  return (
    <div className="flex h-auto w-full gap-10 max-lg:flex-col">
      <IssueForm />
      <div className="w-full rounded-xl h-[37rem] bg-[#ececec] common-container overflow-y-scroll p-5 dark:bg-[#111]">
        <IssueGuideTabs />
      </div>
    </div>
  );
};

export default NewIssuePage;
