'use client'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

const PaginationIssue = ({ itemCount, pageSize, currentPage }: Props) => {
  const [startPage, setStartPage] = useState(1);
  const pageCount = Math.ceil(itemCount / pageSize);
  const visiblePages = 3; // Number of pages to display
  const endPage = Math.min(startPage + visiblePages - 1, pageCount);

  const searchParams = useSearchParams();

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    return params.toString();
  };

  const handleEllipsisClick = () => {
    // Show the next set of pages when ellipsis is clicked
    setStartPage(startPage + visiblePages);
  };

  const renderPaginationItems = () => {
    const items = [];

    // Render previous button
    items.push(
      <PaginationItem key="prev" className="list-none">
        <PaginationPrevious
          aria-disabled={currentPage === 1}
          href={currentPage === 1 ? '' : { query: changePage(currentPage - 1) }}
        />
      </PaginationItem>
    );

    // Render page numbers or ellipsis
    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <PaginationItem key={i} className="list-none">
          <PaginationLink
            className={`${currentPage === i && "bg-foreground text-background hover:bg-[#222] dark:text-black dark:hover:bg-[#f4f4f2]"}`}
            href={{ query: changePage(i) }}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    // Render ellipsis if there are more pages
    if (endPage < pageCount) {
      items.push(
        <PaginationItem key="ellipsis" className="list-none" onClick={handleEllipsisClick}>
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    // Render next button
    items.push(
      <PaginationItem key="next" className="list-none">
        <PaginationNext
          aria-disabled={currentPage === pageCount}
          href={currentPage === pageCount ? '' : { query: changePage(currentPage + 1) }}
        />
      </PaginationItem>
    );

    return items;
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Pagination>
        <PaginationContent className="">
          {renderPaginationItems()}
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationIssue;
