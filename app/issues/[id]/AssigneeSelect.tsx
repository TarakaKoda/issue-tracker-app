'use client'


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
import axios from "axios";
import { useEffect, useState } from "react";
import { MdOutlineAssignmentInd } from "react-icons/md";
const AssigneeSelect = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get<User[]>("/api/users");
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <Select>
      <SelectTrigger className="dark:border-[#333] md:min-w-[10rem]">
        <MdOutlineAssignmentInd className="text-lg" />
        <SelectValue placeholder="Assign Issue" />
      </SelectTrigger>
      <SelectContent className="bg-background dark:border-[#222]">
        <SelectGroup>
          <SelectLabel>Suggestions</SelectLabel>
          {users.map((user) => (
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
