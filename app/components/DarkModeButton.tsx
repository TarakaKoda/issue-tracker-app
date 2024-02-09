"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DarkModeButton = () => {
  const { setTheme } = useTheme();
  const colorModes = [
    { label: "Light", mode: "light" },
    { label: "Dark", mode: "dark" },
    { label: "System", mode: "system" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="hover:bg-darkBackground1 rounded-full border-0"
        >
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-background border-darkBackground1"
      >
        {colorModes.map((colorMode) => (
          <DropdownMenuItem
            key={colorMode.label}
            onClick={() => setTheme(colorMode.mode)}
            className="focus:bg-darkBackground1"
          >
            {colorMode.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DarkModeButton;
