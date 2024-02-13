import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableRow
} from "@/components/ui/table";
import { prisma } from "@/prisma/client";
import Link from "next/link";
import { IssueStatusBadge } from "./components";

const LatestIssues = async () => {
  const issues = await prisma.issue.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
    include: {
      assignedToUser: true,
    },
  });
  return (
    <Card className="bg-background dark:border-[#222]">
      <CardHeader>
        <CardTitle>Latest Issues</CardTitle>
      </CardHeader>
      <CardContent>
        <Table className="dark:bg-[#111]">
          <TableBody>
            {issues.map((issue) => (
              <TableRow key={issue.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-2">
                      <Link
                        className="hover:underline hover:underline-offset-2"
                        href={`/issues/${issue.id}`}
                      >
                        {issue.title}
                      </Link>
                      <IssueStatusBadge status={issue.status} />
                    </div>
                    {issue.assignedToUser && (
                      <Avatar>
                        <AvatarImage
                          src={issue.assignedToUser.image!}
                          alt="user image"
                        />
                        <AvatarFallback>
                          <AvatarImage
                            src={"/public/images/user-fallback.jpeg"}
                            alt="user fallback"
                          />
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default LatestIssues;
