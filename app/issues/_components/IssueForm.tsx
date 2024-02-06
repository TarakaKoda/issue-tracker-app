"use client";
import {
  LoadingSpinner,
  SimpleMDEProvider as MarkdownEditor,
} from "@/app/components";
import { issueSchema } from "@/app/validationSchemas";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Issue } from "@prisma/client";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { PiBugBeetleFill } from "react-icons/pi";
import { z } from "zod";

interface Props {
  issue?: Issue;
  updatingIssue?: boolean;
}

const IssueForm = ({ issue, updatingIssue = false }: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof issueSchema>>({
    resolver: zodResolver(issueSchema),
    defaultValues: {
      title: issue?.title || "",
      description: issue?.description || "",
      status: issue?.status || "OPEN",
    },
  });

  async function onSubmit(values: z.infer<typeof issueSchema>) {
    if (!updatingIssue) {
      try {
        setIsSubmitting(true);
        const issue = await axios.post("/api/issues", values);
        router.push(`/issues/${issue.data.id}`);
        router.refresh();
        toast({
          title: `New Issue: ${issue.data.title}`,
          description: "New issue has been created.",
          variant: "success",
        });
        if (!issue) throw Error;
      } catch (error) {
        setIsSubmitting(false);
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          variant: "destructive",
        });
        // form.reset();
      }
    } else {
      try {
        setIsSubmitting(true);
        const updatedIssue = await axios.patch<Issue>(
          `/api/issues/${issue?.id}`,
          values,
        );
        router.push(`/issues/${updatedIssue.data.id}`);
        router.refresh();
        toast({
          title: `Updated Issue: ${updatedIssue.data.title}`,
          description: "Issue has been updated successfully.",
          variant: "success",
        });
        if (!issue) throw Error;
      } catch (error) {
        setIsSubmitting(false);
        console.log(error);
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem while updating your issue.",
          variant: "destructive",
        });
      }
    }
  }

  return (
    <div className="max-w-xl space-y-3 rounded-xl bg-[#ececec] p-5 dark:bg-[#111]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Title"
                    className="border  border-[#a5aaaf] placeholder:font-semibold placeholder:text-[#7E7E86] focus-visible:ring-0 focus-visible:ring-offset-0"
                    {...field}
                  />
                </FormControl>
                <FormMessage title="Title" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="rounded-md border border-[#a5aaaf] bg-background">
                    <MarkdownEditor field={{ ...field }} />
                  </div>
                </FormControl>
                <FormMessage title="Description" />
              </FormItem>
            )}
          />
          {updatingIssue && (
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Update the status of the issue." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-background dark:border-[#222]">
                      <SelectGroup>
                        <SelectLabel>Current Issue Status</SelectLabel>
                        <SelectItem value="OPEN">Open</SelectItem>
                        <SelectItem value="IN_PROGRESS">In Progress</SelectItem>
                        <SelectItem value="CLOSED">Closed</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <Button type="submit" className="flex gap-1 hover:bg-[#222] dark:hover:bg-gray-200" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <LoadingSpinner />
                <p>{updatingIssue ? "Updating" : "Creating new"} issue...</p>
              </>
            ) : (
              <>
                <>
                  <PiBugBeetleFill size={15} />
                  <p>{updatingIssue ? "Update" : "Submit New"} Issue</p>
                </>
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default IssueForm;
