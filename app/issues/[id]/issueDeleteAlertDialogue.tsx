"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/components/ui/use-toast";
import { Issue } from "@prisma/client";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";

const IssueDeleteAlertDialogue = ({
  children,
  issue,
}: {
  children: ReactNode;
  issue: Issue;
}) => {
  const [error, setError] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const handleDeleteIssue = async () => {
    try {
      await axios.delete(`/api/issues/${issue.id}`);
      router.push("/issues");
      router.refresh();
      toast({
        title: `Deleted Issue: ${issue.title}`,
        description: "Issue has been successfully deleted.",
        variant: "success",
      });
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
        <AlertDialogContent className="border border-[#222]">
          <AlertDialogHeader>
            <AlertDialogTitle className="border-b-[#222]">Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription className="text-[#777]">
              This action cannot be undone. This will permanently delete your
              issue and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-background border-[#222] transition-colors hover:bg-[#222]">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteIssue}
              className="bg-red-600 text-white hover:bg-red-500"
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <AlertDialog open={error}>
        <AlertDialogContent className="bg-red-500/15 border border-red-500">
          <AlertDialogHeader>
            <AlertDialogTitle className="border-b-0 text-red-500">Uh oh! Something went wrong.</AlertDialogTitle>
            <AlertDialogDescription className="text-red-500">
              There was a problem with your request.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => setError(false)}
              className="bg-red-500 text-white transition-colors hover:bg-red-600"
            >
              OK
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default IssueDeleteAlertDialogue;
