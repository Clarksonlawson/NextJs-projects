
'use server'
import { revalidatePath } from "next/cache"
import prisma from "@/app/lib/prisma";
import { hashPassword } from "./crypt";
import { getXataClient } from "@/app/xata";


export  async function loginuser(state, formData){
    console.log("preparing  Data...")
   const xataClient = getXataClient();

   
    const email = formData.get("email");
    const pass = hashPassword(formData.get("password"));
    const Data = {
         email, pass
    }
    if(!email || !pass){
        return {message: `One or more field not supplied`}
    }
    const data = Data
    console.log(Data)
    try{
        const user = await prisma.users.findUnique({
            where: { email: email },
            select: {
                id: true,
                fullname: true,
                email: true,
                password: true,
                country: true,
                phone: true
            }
        });
        if(user && user.password === pass){

            return exclude(user, ["password"])
            
        }else{
            return {message: `Invalid username or password`}
        }
       
        
    }catch(error){
        console.error(error);

        if(error?.meta?.target == "email"){

            return {message: 'Email address already exists!'}
        }
        return {message: error?.message}
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