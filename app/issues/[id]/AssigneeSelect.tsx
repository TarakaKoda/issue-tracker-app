import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MdOutlineAssignmentInd } from "react-icons/md";
const AssigneeSelect = () => {
  return (
    <Select>
      <SelectTrigger className="md:min-w-[10rem] dark:border-[#333]">
        <MdOutlineAssignmentInd className="text-lg"/>
        <SelectValue placeholder="Assign Issue" />
      </SelectTrigger>
      <SelectContent className="bg-background dark:border-[#222]">
        <SelectGroup>
          <SelectLabel>Suggestions</SelectLabel>
          <SelectItem value="1">Kts srinivas</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default AssigneeSelect;
