import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <Input
        placeholder="Title"
        className="border-darkBackground1 placeholder:text-[#7E7E86] focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <Textarea
        placeholder="Description"
        className="border-darkBackground1 placeholder:text-[#7E7E86] focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <Button>Submit New Issue </Button>
    </div>
  );
};

export default NewIssuePage;
