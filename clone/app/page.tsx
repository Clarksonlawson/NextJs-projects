import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
   <>
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Welcome to infinity <br className="hidden sm:inline" />
          Just another simple App 
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
         The Best Administrative dashboard yet. Built using latest Technologies, we offer scalable solutions on basic CRUD operations.

        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={'/register'}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Get Started
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={'/login'}
          className={buttonVariants({ variant: "outline" })}
        >
          Login
        </Link>
      </div>
      <section className="hidden md:block">
    <div className="overflow-hidden rounded-lg border bg-background shadow">
      
    </div>
  </section>
    </section>
   
   </>

  )
}
