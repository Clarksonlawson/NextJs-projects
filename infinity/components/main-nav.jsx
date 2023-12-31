'use client'
import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "./Icons"
// import { useUser } from "@clerk/nextjs"
// import { UserButton } from "@clerk/clerk-react"

export function MainNav({ items }) {
  // const {user, isLoaded} = useUser();
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
              
          )}
          {/* {
            isLoaded && user &&
              <Link
            
            href={"/users"}
            className={cn(
              "flex items-center text-sm font-medium text-muted-foreground",
              
            )}
          >
            Dashboard
          </Link>
         
          
          } */}
        </nav>
      ) : null}
    </div>
  )
}
