"use client";
import MarkdownEditor from "@/app/components/SimpleMDEProvider";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import createNewIssueSchema from "./schema";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof createNewIssueSchema>>({
    resolver: zodResolver(createNewIssueSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  async function onSubmit(values: z.infer<typeof createNewIssueSchema>) {
    try {
      const issue = await axios.post("/api/issues", values);
      router.push("/issues");
      toast({
        title: `New Issue: ${issue.data.title}`,
        description: "New issue has been created.",
        variant: "success",
      });
      if (!issue) throw Error;
    } catch (error) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        variant: "destructive",
      });
      form.reset();
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
          <Button type="submit">Submit New Issue</Button>
        </form>
      </Form>
    </div>
  );
};

export default NewIssuePage;
