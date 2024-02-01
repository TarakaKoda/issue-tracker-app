import SimpleMDEProvider from "@/app/components/SimpleMDEProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <Input
        placeholder="Title"
        className="border-darkBackground1 placeholder:text-[#7E7E86] focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <SimpleMDEProvider />
      <Button>Submit New Issue </Button>
    </div>
  );
};

export default NewIssuePage;
