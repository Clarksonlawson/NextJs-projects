"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle, } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { loginuser } from "./actions"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import createuser from "./actions";
import { useFormState } from 'react-dom'
import { useFormStatus } from 'react-dom'
import { Icons } from "@/components/Icons";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  
const initialstate = {
    message: null
}

export function SubmitButton(){
    const { pending } = useFormStatus()

    return  <Button variant="outline"  disabled={pending}>
    {pending && (
      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
    )}
    Sign up
  </Button>
}

const formSchema = z.object({
  fullname: z.string().min(2, {
    message: "fullname must be at least 2 characters.",
  }),
  email: z.string().min(6, {
    message: "email must be at least 6 characters.",
  }),
  country: z.string().min(2, {
    message: "country must be at least 2 characters.",
  }),
  phone: z.string().min(10, {
    message: "phone number must be at least 10 characters.",
  }),
  password: z.string().min(8, {
    message: "password must be at least 8 characters.",
  }),
});

export function DemoCreateAccount() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: "",
        },
      });
    
      const [state, formAction] = useFormState(loginuser, initialstate)
    
  return (
    <Form {...form}>
       
       
        <form action={formAction} >
        <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Proceed
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-6">
        <AlertDialog>
            <AlertDialogTrigger asChild>
            <Button variant="outline" >
            <Icons.gitHub className="mr-2 h-4 w-4" />
            Github
          </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>You will be redirected.</AlertDialogTitle>
                <AlertDialogDescription>
                    You will now be redirected t a third-party 0Auth authentication system
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
            </AlertDialog>
            <AlertDialog>
            <AlertDialogTrigger asChild>
            <Button variant="outline" >
            <Icons.spinner className="mr-2 h-4 w-4" />
            Google
          </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>You will be redirected.</AlertDialogTitle>
                <AlertDialogDescription>
                    You will now be redirected t a third-party 0Auth authentication system
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
            </AlertDialog>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" name="email" placeholder="m@example.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password" >Password</Label>
          <Input id="password" name="password" type="password" />
        </div>
      </CardContent>
      <CardFooter>
       
    <SubmitButton />
    <p className={state?.message === 'Account registered successfully' ? 'text-green-500' : 'text-red-500'}>
        {state?.message}
        </p>
      </CardFooter>
    </Card>
        </form>
       
    </Form>
    
  )
}