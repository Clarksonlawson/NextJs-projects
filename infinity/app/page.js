
import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
// import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"

// import { ModeToggle } from '@/components/toggle'
export default function Home() {
  // const {userId} =auth();
  // if(userId){
  //   redirect("/users")
  // }
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
           
           rel="noreferrer"
           className={buttonVariants()}
         >
           Get Started
         </Link>
         <Link
           
           rel="noreferrer"
           href={'/login'}
           className={buttonVariants({ variant: "outline" })}
         >
           Login
         </Link>
       </div>
       <section className="hidden md:block">
       <div className="overflow-hidden rounded-lg border bg-background shadow" style={{ display: 'flex' }}>
          <Card style={{ flex: '1', marginRight: '16px' }}>
            <CardHeader>
              <CardTitle>Security</CardTitle>
              <CardDescription>Built using modern technologies with a secure database connection, you can be rest assured
                of security
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Real-time data, charts, and analytics.</p>
            </CardContent>
            <CardFooter>
            <Button>Explore</Button>
            </CardFooter>
          </Card>

          <Card style={{ flex: '1' }}>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>Manage users and permissions.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Add, edit, and delete user accounts.</p>
            </CardContent>
            <CardFooter>
              <Button>Explore</Button>
            </CardFooter>
          </Card>
          <Card style={{ flex: '1' }}>
            <CardHeader>
              <CardTitle>Slick GUI</CardTitle>
              <CardDescription>Fast smooth interface to ensure you have the best experience using it.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Read more...</p>
            </CardContent>
            <CardFooter>
              <Button>Explore</Button>
            </CardFooter>
          </Card>
        </div>


   </section>
     </section>
    
    </>
    )
}
