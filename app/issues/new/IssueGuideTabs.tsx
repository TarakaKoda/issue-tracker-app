import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import TogglePreviewSide from "@/public/images/toggle-preview-side.png";
import ToggleFullScreen from "@/public/images/toggle-fullscreen.png";
import TogglePreview from "@/public/images/toggle-preview.png";
import Image from "next/image";
import { BsWindowSplit } from "react-icons/bs";
import {
  FaBold,
  FaHeading,
  FaImage,
  FaListOl,
  FaListUl,
  FaQuoteLeft,
  FaRegEye,
} from "react-icons/fa";
import { GoQuestion } from "react-icons/go";
import { GrLink } from "react-icons/gr";
import { ImItalic } from "react-icons/im";
import { SlSizeFullscreen } from "react-icons/sl";

const IssueGuideTabs = () => {
  return (
    <Tabs defaultValue="issue" className="h-auto w-full">
      <TabsList className="grid w-full grid-cols-2 bg-[#f3f3f3] dark:bg-[#222]">
        <TabsTrigger value="issue" className="uppercase max-sm:text-xs dark:text-white">
          Issue Formatting Guide
        </TabsTrigger>
        <TabsTrigger value="markdown" className="uppercase max-sm:text-xs dark:text-white">
          Markdown Guide
        </TabsTrigger>
      </TabsList>
      <TabsContent value="issue">
        <Card className="dark:border-[#222] dark:bg-[#222]">
          <CardHeader>
            <CardTitle>Create New Issue</CardTitle>
            <CardDescription className="dark:text-[#999]">
              Creating Clear and Consistent Issue Descriptions
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            <div className="flex flex-col gap-3 space-y-1">
              <h1>Issue Formatting Guide</h1>
              <Separator className="my-4" />
              <div>
                <h2>Creating a New Issue</h2>
                <p>To create a new issue, follow these steps:</p>
              </div>
              <Separator className="my-4" />
              <div>
                <h3>Issue Title</h3>
                <p>
                  Start by entering a descriptive title for the issue in the
                  title field.
                </p>
              </div>
              <Separator className="my-4" />
              <div className="my-10 flex flex-col gap-2">
                <p className="font-bold">Example:</p>
                <div className="w-full rounded-lg border bg-background p-5 dark:border-[#333]">
                  <h1>Issue Title: [Brief description of the issue]</h1>
                </div>
              </div>
              <Separator className="my-4" />
              <div>
                <h3>Description</h3>
                <p>
                  Describe the issue in detail in the description field. You can
                  use various formatting options to make your description clear
                  and concise.
                </p>
              </div>
              <div className="my-10 flex flex-col gap-3">
                <p className="font-bold">Example:</p>
                <div className="w-full rounded-lg border bg-background p-5 dark:border-[#333]">
                  <p className="font-bold">Description:</p>
                  <p>
                    Some product categories are missing from the navigation
                    menu, making it difficult for users to browse specific types
                    of products.
                  </p>
                </div>
              </div>
              <Separator className="my-4" />
              <div>
                <h3>Steps to Reproduce</h3>
                <p>
                  List the steps required to reproduce the issue. This helps
                  others understand how to recreate the problem.
                </p>
              </div>
              <div className="my-10 flex flex-col gap-3">
                <p className="font-bold">Example:</p>
                <div className="w-full rounded-lg border bg-background p-5 dark:border-[#333]">
                  <p className="font-bold">Steps to Reproduce:</p>
                  <ul className="-my-1 list-decimal">
                    <li>
                      Navigate to the product categories section of the website.
                    </li>
                    <li>
                      Compare the categories listed in the navigation menu with
                      the available product categories.
                    </li>
                  </ul>
                </div>
              </div>
              <Separator className="my-4" />
              <div>
                <h3>Expected Behavior</h3>
                <p>
                  Describe what you expected to happen when performing the steps
                  above.
                </p>
              </div>
              <div className="my-10 flex flex-col gap-3">
                <p className="font-bold">Example:</p>
                <div className="w-full rounded-lg border bg-background p-5 dark:border-[#333]">
                  <p className="font-bold">Expected Behavior:</p>
                  <p>
                    All product categories should be listed in the navigation
                    menu for easy access and browsing.
                  </p>
                </div>
              </div>
              <Separator className="my-4" />
              <div>
                <h3>Actual Behavior</h3>
                <p>
                  Describe what actually happened when performing the steps
                  above.
                </p>
              </div>
              <div className="my-10 flex flex-col gap-3">
                <p className="font-bold">Example:</p>
                <div className="w-full rounded-lg border bg-background p-5 dark:border-[#333]">
                  <p className="font-bold">Actual Behavior:</p>
                  <p>
                    Some product categories are missing from the navigation
                    menu, limiting users' ability to browse products
                    efficiently.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="italic">
            You can use these formatting examples as a reference while creating
            your new issue. Feel free to mix and match different formatting
            options to make your issue clear and easy to understand.
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="markdown">
        <Card className="dark:border-[#222] dark:bg-[#222]">
          <CardHeader>
            <CardTitle>Markdown Guide</CardTitle>
            <CardDescription className="dark:text-[#999]">
              Mastering Markdown Syntax for Effective Formatting
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            <div className="flex flex-col gap-3 space-y-1">
              <h1>Markdown Editor Features Guide</h1>
              <Separator className="my-4" />
              <div className="flex flex-col gap-1">
                <h2>Creating Headers</h2>
                <div className="flex items-center gap-3">
                  <p className="font-bold">Feature Icon:</p>
                  <div className="rounded-md border bg-background p-2 hover:bg-[#F4F4F4] dark:border-[#333] dark:hover:bg-[#111]">
                    <FaHeading className="text-lg" />
                  </div>
                </div>
                <p>
                  To create headers, use `#` followed by a space and the header
                  text.
                </p>
              </div>
              <Separator className="my-4" />
              <div className="my-10 flex flex-col gap-2">
                <p className="font-bold">Example:</p>
                <div className="w-full rounded-lg border bg-background p-5 dark:border-[#333]">
                  <h1># Header 1</h1>
                  <h2>## Header 2</h2>
                  <h3>### Header 3</h3>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="flex flex-col gap-1">
                <h2>Creating Blockquotes</h2>
                <div className="flex items-center gap-3">
                  <p className="font-bold">Feature Icon:</p>
                  <div className="rounded-md border bg-background p-2 hover:bg-[#F4F4F4] dark:border-[#333] dark:hover:bg-[#111]">
                    <FaQuoteLeft className="text-lg" />
                  </div>
                </div>
                <p>
                  To create blockquote in Markdown, use the `&gt;` symbol
                  followed by a space before the text you want to quote.
                </p>
              </div>
              <Separator className="my-4" />
              <div className="my-10 flex flex-col gap-2">
                <p className="font-bold">Example:</p>
                <div className="w-full rounded-lg border bg-background p-5 dark:border-[#333]">
                  <p>&gt; This is a blockquote.</p>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="flex flex-col gap-1">
                <h2>Creating Generic Lists</h2>
                <div className="flex items-center gap-3">
                  <p className="font-bold">Feature Icon:</p>
                  <div className="rounded-md border bg-background p-2 hover:bg-[#F4F4F4] dark:border-[#333] dark:hover:bg-[#111]">
                    <FaListUl className="text-lg" />
                  </div>
                </div>
                <p>
                  To create generic lists in Markdown, use - or * followed by a
                  space for each list item.
                </p>
              </div>
              <Separator className="my-4" />
              <div className="my-10 flex flex-col gap-2">
                <p className="font-bold">Example:</p>
                <div className="w-full rounded-lg border bg-background p-5 dark:border-[#333]">
                  <ul className="-my-1 -ml-1 list-none">
                    <li>- Item 1</li>
                    <li>- Item 2</li>
                    <li>- Item 3</li>
                  </ul>
                </div>
                <p>or</p>
                <div className="w-full rounded-lg border bg-background p-5 dark:border-[#333]">
                  <ul className="-my-1 -ml-1 list-none">
                    <li>* Item 1</li>
                    <li>* Item 2</li>
                    <li>* Item 3</li>
                  </ul>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="flex flex-col gap-1">
                <h2>Creating Numbered Lists</h2>
                <div className="flex items-center gap-3">
                  <p className="font-bold">Feature Icon:</p>
                  <div className="rounded-md border bg-background p-2 hover:bg-[#F4F4F4] dark:border-[#333] dark:hover:bg-[#111]">
                    <FaListOl className="text-lg" />
                  </div>
                </div>
                <p>
                  To create numbered lists in Markdown, use numbers followed by
                  a period and a space for each list item.
                </p>
              </div>
              <Separator className="my-4" />
              <div className="my-10 flex flex-col gap-2">
                <p className="font-bold">Example:</p>
                <div className="w-full rounded-lg border bg-background p-5 dark:border-[#333]">
                  <ul className="-my-1 list-decimal">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                  </ul>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="flex flex-col gap-1">
                <h3>Creating Links</h3>
                <div className="flex items-center gap-3">
                  <p className="font-bold">Feature Icon:</p>
                  <div className="rounded-md border bg-background p-2 hover:bg-[#F4F4F4] dark:border-[#333] dark:hover:bg-[#111]">
                    <GrLink className="scale-x-[-1] transform text-lg" />
                  </div>
                </div>
                <p>To create links, use [link text](URL) format.</p>
              </div>
              <div className="my-10 flex flex-col gap-3">
                <p className="font-bold">Example:</p>
                <div className="w-full rounded-lg border bg-background p-5 dark:border-[#333]">
                  <p>[Google](https://www.google.com)</p>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="flex flex-col gap-1">
                <h3>Inserting Images</h3>
                <div className="flex items-center gap-3">
                  <p className="font-bold">Feature Icon:</p>
                  <div className="rounded-md border bg-background p-2 hover:bg-[#F4F4F4] dark:border-[#333] dark:hover:bg-[#111]">
                    <FaImage className="text-xl" />
                  </div>
                </div>
                <p>To insert images, use ![alt text](image URL) format.</p>
              </div>
              <div className="my-10 flex flex-col gap-3">
                <p className="font-bold">Example:</p>
                <div className="w-full rounded-lg border bg-background p-5 dark:border-[#333]">
                  <p>![Image Alt Text](https://example.com/image.jpg)</p>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="flex flex-col gap-1">
                <h3> Making Text Bold</h3>
                <div className="flex items-center gap-3">
                  <p className="font-bold">Feature Icon:</p>
                  <div className="rounded-md border bg-background p-2 hover:bg-[#F4F4F4] dark:border-[#333] dark:hover:bg-[#111]">
                    <FaBold className="text-xl" />
                  </div>
                </div>
                <p>To make text bold, wrap it with ** or __.</p>
              </div>
              <div className="my-10 flex flex-col gap-3">
                <p className="font-bold">Example:</p>
                <div className="w-full rounded-lg border bg-background p-5 dark:border-[#333]">
                  <p className="font-bold">**Bold Text**</p>
                  <p className="font-bold">__Bold Text__</p>
                </div>
              </div>
              <Separator className="my-4" />
              <div>
                <h3>Making Text Italic</h3>
                <div className="flex items-center gap-3">
                  <p className="font-bold">Feature Icon:</p>
                  <div className="rounded-md border bg-background p-2 hover:bg-[#F4F4F4] dark:border-[#333] dark:hover:bg-[#111]">
                    <ImItalic className="text-lg" />
                  </div>
                </div>
                <p>To make text italic, wrap it with * or _.</p>
              </div>
              <div className="my-10 flex flex-col gap-3">
                <p className="font-bold">Example:</p>
                <div className="w-full rounded-lg border bg-background p-5 dark:border-[#333]">
                  <p className="italic">*Italic Text*</p>
                  <p className="italic">_Italic Text_</p>
                </div>
              </div>
              <Separator className="my-4" />
              <div>
                <h3>Toggling Preview</h3>
                <div className="flex items-center gap-3">
                  <p className="font-bold">Feature Icon:</p>
                  <div className="rounded-md border bg-background p-2 hover:bg-[#F4F4F4] dark:border-[#333] dark:hover:bg-[#111]">
                    <FaRegEye className="text-lg" />
                  </div>
                </div>
                <p>Toggle between Markdown and rendered HTML preview.</p>
                <Image
                  className="mt-3 rounded-lg"
                  src={TogglePreview}
                  alt="Markdown Editor Toggle Preview Feature"
                />
              </div>
              <Separator className="my-4" />
              <div>
                <h3>Toggling Side Preview</h3>
                <div className="flex items-center gap-3">
                  <p className="font-bold">Feature Icon:</p>
                  <div className="rounded-md border bg-background p-2 hover:bg-[#F4F4F4] dark:border-[#333] dark:hover:bg-[#111]">
                    <BsWindowSplit className="text-lg" />
                  </div>
                </div>
                <p>
                  Toggle a side-by-side preview of Markdown and rendered HTML.
                </p>
                <Image
                  className="mt-3 rounded-lg"
                  src={TogglePreviewSide}
                  alt="Markdown Editor Toggle Preview Feature"
                />
              </div>
              <Separator className="my-4" />
              <div>
                <h3>Toggling Full Screen</h3>
                <div className="flex items-center gap-3">
                  <p className="font-bold">Feature Icon:</p>
                  <div className="rounded-md border bg-background p-2 hover:bg-[#F4F4F4] dark:border-[#333] dark:hover:bg-[#111]">
                    <SlSizeFullscreen className="text-lg" />
                  </div>
                </div>
                <p>Toggle full-screen mode for better focus.</p>
                <Image
                  className="mt-3 rounded-lg"
                  src={ToggleFullScreen}
                  alt="Markdown Editor Toggle Preview Feature"
                />
              </div>
              <Separator className="my-4" />
              <div>
                <h3>Markdown Guide</h3>
                <div className="flex items-center gap-3">
                  <p className="font-bold">Feature Icon:</p>
                  <div className="rounded-md border bg-background p-2 hover:bg-[#F4F4F4] dark:border-[#333] dark:hover:bg-[#111]">
                    <GoQuestion className="text-lg" />
                  </div>
                </div>
                <p>Access a Markdown syntax guide for quick reference.</p>
              </div>
              <Separator className="my-4" />
            </div>
          </CardContent>
          <CardFooter className="italic">
            This guide covers creating headers, links, images, making text bold
            and italic, and toggling between preview modes. It also includes a
            Markdown syntax guide for quick reference. Users can refer to this
            guide to utilize all features effectively while using the Markdown
            editor.
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default IssueGuideTabs;
