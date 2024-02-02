import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import prisma from "@/prisma/client";
import IssuesTable from "../components/IssuesTable";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  return (
    <div>
      <Link href="/issues/new">
        <Button className="btn">New Issue</Button>
      </Link>
      <IssuesTable issues={issues} />
    </div>
  );
};

export default IssuesPage;
