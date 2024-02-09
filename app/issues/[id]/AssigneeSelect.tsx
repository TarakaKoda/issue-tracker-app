"use client";

import { User } from ".prisma/client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/components/ui/use-toast";
import { Issue } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MdOutlineAssignmentInd } from "react-icons/md";

const AssigneeSelect = ({ issue }: { issue: Issue }) => {
  const { toast } = useToast();
  const { data: users, error, isLoading } = useUsers();

  if (error) return null;

  if (isLoading)
    return <Skeleton className="h-10 w-[10rem] bg-[#f3f3f5] dark:bg-[#333]" />;

  const handleAssignIssue = (userId: string) => {
    const assignedUserId = userId === "unassigned" ? null : userId;
    axios
      .patch(`/api/issues/${issue.id}`, {
        assignedToUserId: assignedUserId,
      })
      .catch(() => {
        toast({
          title: "Uh oh! Something went wrong.",
          description: "User could not be assigned to this issue.",
          variant: "destructive",
        });
      });
  };

  return (
    <Select
      defaultValue={issue.assignedToUserId || "unassigned"}
      onValueChange={handleAssignIssue}
    >
      <SelectTrigger className="dark:border-[#333] md:min-w-[10rem]">
        <MdOutlineAssignmentInd className="text-lg" />
        <SelectValue placeholder="Assign Issue" />
      </SelectTrigger>
      <SelectContent className="bg-background dark:border-[#222]">
        <SelectGroup>
          <SelectLabel>Suggestions</SelectLabel>
          <SelectItem value={"unassigned"}>Unassigned</SelectItem>
          {users?.map((user) => (
            <SelectItem key={user.id} value={user.id}>
              {user.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

const useUsers = () => {
  return useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get<User[]>("/api/users").then((res) => res.data),
    staleTime: 60 * 1000 * 10, //? 10 mins
    retry: 3,
  });
};

export default AssigneeSelect;
