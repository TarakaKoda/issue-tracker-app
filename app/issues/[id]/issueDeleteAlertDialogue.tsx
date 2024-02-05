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
import axios from "axios";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

const issueDeleteAlertDialogue = ({
  children,
  issue,
}: {
  children: ReactNode;
  issue: Issue;
}) => {
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
      console.log(error);
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        variant: "destructive",
      });
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            issue and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-background transition-colors hover:bg-[#222]">
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
  );
};

export default issueDeleteAlertDialogue;
