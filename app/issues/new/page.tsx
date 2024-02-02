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
import { zodResolver } from "@hookform/resolvers/zod";
import "easymde/dist/easymde.min.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import createNewIssueSchema from "./schema";
import axios from "axios";
import { useRouter } from "next/navigation";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof createNewIssueSchema>>({
    resolver: zodResolver(createNewIssueSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  async function onSubmit(values: z.infer<typeof createNewIssueSchema>) {
    await axios.post("/api/issues", values);
    router.push("/issues");
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
                    className="border  border-[#a5aaaf] placeholder:text-[#7E7E86] focus-visible:ring-0 focus-visible:ring-offset-0"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
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
                <FormMessage />
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
