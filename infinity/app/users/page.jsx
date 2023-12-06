import Image from "next/image";
import prisma from "../lib/prisma"
import { columns } from "./columns";
import { DataTable } from "./DataTable";
import { UserNav } from "@/components/ui/userNav";
import { auth } from "@clerk/nextjs";
import { getXataClient } from "../xata";

export async function getUsers(){
    const xataClient = getXataClient();
     
     const users = await xataClient.db.users.getMany();
    return users;
}


export default async function Users(){
  const {userId} = auth();
    const users = await getUsers();

    return(  <>
       <div className="md:hidden">
        <Image
          src="/cover.png"
          width={100}
          height={80}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="/examples/tasks-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav name="CC" fullname="Clarkson Awomu"/>
          </div>
        </div>
        <DataTable data={users} columns={columns} />
      </div>
    
    </>
    
   
        
    )
}