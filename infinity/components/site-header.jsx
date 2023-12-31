'use client'
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "./ui/button"
import { Icons } from "./Icons"
import { MainNav } from "./main-nav"
import { ThemeToggle } from "./theme-toggle"
// import { useUser } from "@clerk/nextjs"
// import { UserButton } from "@clerk/nextjs"
export function SiteHeader() {
  // const {user, isLoaded} = useUser();
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
               
            <ThemeToggle />
            {/* {
                isLoaded && user &&
            <UserButton />
                
              
              } */}
          </nav>
        </div>
      </div>
    </header>
  )
}
