"use client";

import React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    React.createElement(DropdownMenu, null,
      React.createElement(DropdownMenuTrigger, { asChild: true },
        React.createElement(Button, { variant: "outline", size: "icon" },
          React.createElement(SunIcon, { className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }),
          React.createElement(MoonIcon, { className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }),
          React.createElement("span", { className: "sr-only" }, "Toggle theme")
        )
      ),
      React.createElement(DropdownMenuContent, { align: "end" },
        React.createElement(DropdownMenuItem, { onClick: () => setTheme("light") },
          "Light"
        ),
        React.createElement(DropdownMenuItem, { onClick: () => setTheme("dark") },
          "Dark"
        ),
        React.createElement(DropdownMenuItem, { onClick: () => setTheme("system") },
          "System"
        )
      )
    )
  );
}
