"use client";

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
    setStartPage(currentPage + visiblePages);
  };

  const renderPaginationItems = () => {
    const items = [];

    // Render previous button
    items.push(
      <PaginationItem
        key="prev"
        className="list-none transition duration-300 ease-in-out"
      >
        <PaginationPrevious
          aria-disabled={currentPage === 1}
          href={currentPage === 1 ? "" : { query: changePage(currentPage - 1) }}
        />
      </PaginationItem>,
    );

    items.push(
      <PaginationItem
        key="first"
        className="list-none transition duration-300 ease-in-out"
      >
        <PaginationLink
          className={`${currentPage === startPage && "bg-foreground text-background hover:bg-[#222] dark:text-black dark:hover:bg-[#f4f4f2]"}`}
          href={{ query: changePage(startPage) }}
        >
          {startPage}
        </PaginationLink>
      </PaginationItem>,
    );

    // Render ellipsis if there are less pages after the visible range
    if (currentPage > 4) {
      items.push(
        <PaginationItem
          key="leftellipsis"
          className="list-none transition duration-300 ease-in-out"
          onClick={handleEllipsisClick}
        >
          <PaginationEllipsis />
        </PaginationItem>,
      );
    }

    // Calculate the start and end of the visible page range, ensuring the current page is always visible
    let start = Math.max(2, currentPage - Math.floor(visiblePages / 2));
    let end = Math.min(start + visiblePages - 1, pageCount);

    // Adjust the start and end if necessary to ensure that visiblePages number of pages are displayed
    if (end - start + 1 < visiblePages) {
      end = Math.min(pageCount, start + visiblePages - 1);
      start = Math.max(1, end - visiblePages + 1);
    }

    // Render page numbers or ellipsis
    for (let i = start + 1; i < end; i++) {
      items.push(
        <PaginationItem
          key={i}
          className="list-none transition duration-300 ease-in-out"
        >
          <PaginationLink
            className={`${currentPage === i && "bg-foreground text-background hover:bg-[#222] dark:text-black dark:hover:bg-[#f4f4f2]"}`}
            href={{ query: changePage(i) }}
          >
            {i}
          </PaginationLink>
        </PaginationItem>,
      );
    }

    // Render ellipsis if there are more pages after the visible range
    if (end < pageCount) {
      items.push(
        <PaginationItem
          key="ellipsis"
          className="list-none transition duration-300 ease-in-out"
          onClick={handleEllipsisClick}
        >
          <PaginationEllipsis />
        </PaginationItem>,
      );
    }

    items.push(
      <PaginationItem
        key="last"
        className="list-none transition duration-300 ease-in-out"
      >
        <PaginationLink
          className={`${currentPage === endPage && "bg-foreground text-background hover:bg-[#222] dark:text-black dark:hover:bg-[#f4f4f2]"}`}
          href={{ query: changePage(endPage) }}
        >
          {endPage}
        </PaginationLink>
      </PaginationItem>,
    );

    // Render next button
    items.push(
      <PaginationItem
        key="next"
        className="list-none transition duration-300 ease-in-out"
      >
        <PaginationNext
          aria-disabled={currentPage === pageCount}
          href={
            currentPage === pageCount
              ? ""
              : { query: changePage(currentPage + 1) }
          }
        />
      </PaginationItem>,
    );

    return items;
  };

  return (
    <Pagination className="flex items-center justify-center">
      <PaginationContent className="flex items-center justify-center">
        {renderPaginationItems()}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationIssue;
