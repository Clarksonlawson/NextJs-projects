"use client"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod"
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

import createuser from "./actions";
import { useFormState } from 'react-dom'
import { useFormStatus } from 'react-dom'

const initialstate = {
    message: null
}

export function SubmitButton(){
    const { pending } = useFormStatus()
    return <Button disabled={pending}>
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
  