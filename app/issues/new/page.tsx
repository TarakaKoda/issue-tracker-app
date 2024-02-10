import { IssueForm } from "../_components";
import IssueGuideTabs from "./IssueGuideTabs";
import { IoCreateOutline } from "react-icons/io5";
import { BiSolidBookReader } from "react-icons/bi";

const NewIssuePage = () => {
  return (
    <div className="flex h-auto w-full items-center justify-center gap-10 max-lg:flex-col">
      <div className="flex w-full flex-col gap-4">
        <div className="flex items-center gap-3">
          <IoCreateOutline className="text-3xl" />
          <h2 className="">Create New Issue</h2>
        </div>
        <IssueForm />
      </div>
      <div className="flex w-full flex-col gap-4">
        <div className="flex items-center gap-3">
          <BiSolidBookReader className="text-3xl" />
          <h2>Issue Guide</h2>
        </div>
        <div className="common-container h-[37rem] w-full overflow-y-scroll rounded-xl bg-[#ececec] p-5 dark:bg-[#111]">
          <IssueGuideTabs />
        </div>
      </div>
    </div>
  );
};

export default NewIssuePage;
