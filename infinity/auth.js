import NextAuth from "next-auth";
import { authConfig } from "./auth.config"; 
import CredentialsProvider from "next-auth/providers/credentials"
import credentials from "next-auth/providers/credentials";
import { z } from 'zod'
import { hashPassword } from "@/app/ui/create/crypt";
import { getXataClient } from "@/app/xata";

async function getUser(email){
    const xataClient = getXataClient();
    try{
        const user = await xataClient.db.users.filter({email: email}).getFirst();
        
        return user;
    }catch(error) {
        console.error('Failed to fetch user:', error);
         throw new Error('Failed to fetch user.');
    }
}

export const {auth, signIn, signOut } = NextAuth
({...authConfig,
    providers: [
        credentials({
            async authorize(credentials){
                const parsedCredentials = z.
                object({email:z.string().email(), 
                password: z.string().min(6)}).safeParse(credentials);
                if(parsedCredentials.success){
                    const {email, password} = parsedCredentials.data;
                    const user = await getUser(email);
                    if(!user) return null;

                    if(user.password === hashPassword(password)){
                        console.log(user)
                        return user;
                        
                    }else{
                        return {message: `Invalid username or password`}
                    }
                }
                return null
            },
        }),
    ]
});