"use client"

import { ClerkProvider } from "@clerk/nextjs";
import { useTheme } from "next-themes";

export function Providers({children}) {
  const { resolvedTheme } = useTheme();
  return <ClerkProvider
      appearance={{
        baseTheme: resolvedTheme === "dark" ? dark : undefined,
      }}
    >
      {children}
    </ClerkProvider>
}