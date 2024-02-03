import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import prisma from "@/prisma/client";
import IssuesTable from "./IssuesTable";
import delay from "delay";
import IssueAction from "./IssueAction";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  await delay(2000);
  return (
    <div>
      <IssueAction/>
      <IssuesTable issues={issues} />
    </div>
  );
};

export default IssuesPage;
