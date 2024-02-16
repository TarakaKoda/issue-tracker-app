"use client";
import {
  LoadingSpinner,
  SimpleMDEProvider as MarkdownEditor,
} from "@/app/components";
import { patchIssueSchema } from "@/app/validationSchemas";
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
import { AiOutlineFileDone } from "react-icons/ai";
import { GrDocumentUpdate } from "react-icons/gr";
import { z } from "zod";

interface Props {
  issue?: Issue;
}

const IssueForm = ({ issue }: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof patchIssueSchema>>({
    resolver: zodResolver(patchIssueSchema),
    defaultValues: {
      title: issue?.title || "",
      description: issue?.description || "",
      status: issue?.status || "OPEN",
    },
  });

  async function onSubmit(values: z.infer<typeof patchIssueSchema>) {
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

  return (
    <div
      className={`dark:bg-[#111] w-full space-y-3 rounded-xl bg-[#ececec] p-5`}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 space-y-8 max-lg:gap-5 h-full lg:grid-cols-5"
        >
          <div className="flex flex-col gap-3 lg:col-span-3">
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
                    <div className="overflow-y-scroll rounded-md border border-[#a5aaaf] bg-background max-lg:max-h-[43vw] max-sm:max-h-[90vw]">
                      <MarkdownEditor field={{ ...field }} />
                    </div>
                  </FormControl>
                  <FormMessage title="Description" />
                </FormItem>
              )}
            />
          </div>
          <div className="flex w-full gap-3 justify-self-end lg:col-span-2 lg:w-80 lg:flex-col">
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
                      <SelectTrigger className="flex items-center justify-center text-foreground">
                        <SelectValue placeholder="Update the status of the issue." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-background text-foreground dark:border-[#222]">
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
            <Button
              type="submit"
              className="flex gap-1 hover:bg-[#222] dark:hover:bg-gray-200"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <GrDocumentUpdate />
              ) : (
                <AiOutlineFileDone className="text-lg" />
              )}
              <p>Update Issue</p>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
export default IssueForm;
