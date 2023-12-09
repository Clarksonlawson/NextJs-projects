import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
// import { ProfileForm } from "../ui/create/form"
// import AuthForm, { UserAuthForm } from "../ui/create/ff"
import { DemoCreateAccount } from "../ui/create/loginform"

export const metadata = {
  title: "Sign in ",
  description: "Authentication forms built using the components.",
}

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
    <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Login to your account <br className="hidden sm:inline" />
         
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
         It&apos;s Really easy! Just follow the simple steps!

        </p>
      </div>
      <br />
      <DemoCreateAccount />
    </div>
  </main>
  )
}