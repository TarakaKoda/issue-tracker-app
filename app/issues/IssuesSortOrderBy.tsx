"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Issue, Status } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { ReactElement } from "react";
import { HiSortAscending, HiSortDescending } from "react-icons/hi";

const sortOrder: {
  label: string;
  value: "asc" | "desc";
  symbol: ReactElement;
  className: string;
}[] = [
  {
    label: "Asc",
    value: "asc",
    symbol: <HiSortAscending className="text-lg" />,
    className: "mr-2 flex items-center justify-between gap-2",
  },
  {
    label: "Desc",
    value: "desc",
    symbol: <HiSortDescending className="text-lg" />,
    className: "mr-1 flex items-center justify-between gap-2",
  },
];

const IssuesSortOrderBy = ({
  searchParams,
}: {
  searchParams: {
    status: Status;
    orderBy: keyof Issue;
    direction: "asc" | "desc";
  };
}) => {
  const router = useRouter();
  return (
    <Select
      defaultValue={searchParams.direction || 'asc'}
      onValueChange={(order) =>
        router.push(
          `/issues?${searchParams.status ? `status=${searchParams.status}&` : ""}orderBy=${searchParams.orderBy}&direction=${order}`,
        )
      }
    >
      <SelectTrigger className="w-min border-0 bg-transparent">
        <SelectValue placeholder="Order by" />
      </SelectTrigger>
      <SelectContent className="bg-background dark:border-[#222]">
        <SelectGroup>
          <SelectLabel>Sort by</SelectLabel>

          {sortOrder.map((order) => (
            <SelectItem key={order.value} value={order.value}>
              <div className={order.className}>
                {order.symbol}
                <p>{order.label}</p>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default IssuesSortOrderBy;
