import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { LogOut, User } from "lucide-react";
import { Session } from "next-auth";
import Link from "next/link";

interface Props {
  session: Session;
}

const UserDropDown = ({ session }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="h-8 w-8 cursor-pointer">
          <AvatarImage src={session.user!.image!} />
          <AvatarFallback>
            <AvatarImage src="../../public/images/user-fallback.jpeg" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[17rem] dark:border-[#222] dark:bg-background">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator className="dark:bg-[#222]" />
        <DropdownMenuGroup>
          <DropdownMenuItem className="hover:bg-[#f4f4f5] focus:bg-[#f4f4f5] dark:hover:bg-[#222] dark:focus:bg-[#222]">
            <User className="mr-2 h-4 w-4" />
            <span>{session.user!.email}</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="dark:bg-[#222]" />
        <DropdownMenuItem className="hover:bg-[#f4f4f5] focus:bg-[#f4f4f5] dark:hover:bg-[#222] dark:focus:bg-[#222]">
          <LogOut className="mr-2 h-4 w-4" />
          <Link href={"/api/auth/signout"}>Log out</Link>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropDown;
