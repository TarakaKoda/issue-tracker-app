"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const IssuesPage = () => {
  return (
    <div>
      <Link href="/issues/new">
        <Button className="btn">New Issue</Button>
      </Link>
    </div>
  );
};

export default IssuesPage;
