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
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdOutlineAssignmentInd } from "react-icons/md";
const AssigneeSelect = () => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get<User[]>("/api/users").then((res) => res.data),
    staleTime: 60 * 1000, //? 60 seconds
    retry: 3,
  });

  if(error) return null;

  if(isLoading) return <Skeleton className="w-[10rem] h-10 bg-[#f3f3f5] dark:bg-[#333]"/>

  return (
    <Select>
      <SelectTrigger className="dark:border-[#333] md:min-w-[10rem]">
        <MdOutlineAssignmentInd className="text-lg" />
        <SelectValue placeholder="Assign Issue" />
      </SelectTrigger>
      <SelectContent className="bg-background dark:border-[#222]">
        <SelectGroup>
          <SelectLabel>Suggestions</SelectLabel>
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

export default AssigneeSelect;
