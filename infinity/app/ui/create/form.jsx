"use client";

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
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createuser } from "./actions";
import { useFormState } from 'react-dom'
import { useFormStatus } from 'react-dom'
import { Icons } from "@/components/Icons";

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

export function ProfileForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      country: "",
      phone: "",
      password: "",
    },
  });

  const [state, formAction] = useFormState(createuser, initialstate)

  return (
    <Form {...form}>
   <form action={formAction} className="max-w-md w-full space-y-3">
  <div className="grid grid-cols-2 gap-4">
    <div className="col-span-2">
      <FormField
        control={form.control}
        name="fullname"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Fullname</FormLabel>
            <FormControl>
              <Input placeholder="John Doe" {...field} />
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>

    <div className="col-span-1">
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input
                placeholder="John.doe@domain.com"
                {...field}
                type="email"
              />
            </FormControl>
            <FormDescription>This is your public email</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>

    <div className="col-span-1">
      <FormField
        control={form.control}
        name="country"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Country</FormLabel>
            <FormControl>
              <Select {...field}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Nigeria">Nigeria</SelectItem>
                  <SelectItem value="United Kingdom">
                    United Kingdom
                  </SelectItem>
                  <SelectItem value="Canada">Canada</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>

    <div className="col-span-1">
      <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Phone number</FormLabel>
            <FormControl>
              <Input placeholder="+1234567890" {...field} type="tel" />
            </FormControl>
            <FormDescription>Enter your phone number</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>

    <div className="col-span-1">
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input placeholder="********" {...field} type="password" />
            </FormControl>
            <FormDescription>This is your password</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  </div>

  <SubmitButton />
  <p className={state?.message === 'Account registered successfully' ? 'text-green-500' : 'text-red-500'}>
    {state?.message}
    </p>

    <hr className="my-4" />
    <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
    </form>

    </Form>
  );
}
