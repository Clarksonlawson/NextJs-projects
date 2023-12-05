
'use server'
import { revalidatePath } from "next/cache"
import prisma from "@/app/lib/prisma";


export  async function loginuser(state, formData){
    console.log("preparing  Data...")
   
   
    const email = formData.get("email");
    const password = formData.get("password");
    const Data = {
         email, password
    }
    const data = Data
    console.log(Data)
    try{
        const user = await prisma.users.create({
            data,
        })
        revalidatePath('/')
        return {message: `Account registered successfully`}
        
    }catch(error){
        console.error(error);

        if(error?.meta?.target == "email"){

            return {message: 'Email address already exists!'}
        }
        return {message: error?.message}
    }

}

export  async function createuser(state, formData){
    console.log("preparing  Data...")
   
    const fullname = formData.get("fullname");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const country = formData.get("country");
    const password = formData.get("password");
    const Data = {
        fullname, email, phone, country, password
    }
    const data = Data
    console.log(Data)
    try{
        const user = await prisma.users.create({
            data,
        })
        revalidatePath('/')
        return {message: `Account registered successfully`}
        
    }catch(error){
        console.error(error);

        if(error?.meta?.target == "email"){

            return {message: 'Email address already exists!'}
        }
        return {message: error?.message}
    }

}