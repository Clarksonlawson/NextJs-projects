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

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
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

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <Form {...form}>
   <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md w-full space-y-3">
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
        name="Email"
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
        name="Country"
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
        name="Phone"
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
        name="Password"
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

  <Button type="submit">Submit</Button>
</form>

    </Form>
  );
}
