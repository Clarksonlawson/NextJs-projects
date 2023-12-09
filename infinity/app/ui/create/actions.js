
'use server'
import { revalidatePath } from "next/cache"
import prisma from "@/app/lib/prisma";
import { hashPassword } from "./crypt";
import { getXataClient } from "@/app/xata";
import { signIn } from '@/auth'
import { AuthError } from "next-auth";

export  async function loginuser(state, formData){
    console.log("preparing  Data...")
    const email = formData.get("email");
    const pass = formData.get("password");
   
    if(!email || !pass){
        return {message: `One or more field not supplied`}
    }
    try{
        const user = await signIn('credentials', formData);

    }catch(error){
        console.error(error);
        if(error instanceof AuthError){
            switch (error.type) {
                case 'CredentialsSignin':
                    return {message: 'Invalid credentials'}
                  default:
                    return {message: 'Something went wrong'}
            }
        }
        
    }

}
function exclude(user, keys) {
    for (let key of keys) {
      delete user[key];
    }
    return user;
  }

export  async function createuser(state, formData){
    console.log("preparing  Data...")
   const xataClient = getXataClient();
    const fullname = formData.get("fullname");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const country = formData.get("country");
    const password = hashPassword(formData.get("password"));
    const Data = {
        fullname, email, phone, country, password
    }
    const data = Data
    console.log(Data)
    try{

        const user = await xataClient.db.users.create({
            fullname, email, phone, country, password
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