import { ModeToggle } from "@/components/toggle";
import Image from "next/image";
import Link from "next/link";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
// } from "@/components/ui/navigation-menu"

export default function Header() {
    return (<nav className="bg-gradient-to-r p-4">
      
      
    <div className="container mx-auto flex items-center justify-between">
      
    
      <div className=" font-bold text-lg"><Link href={'/'}><Image src={'/cover.png'} width={100} height={100} priority className="dark:invert" /></Link></div>
      
      <div className="space-x-4">
      <ModeToggle />
        <Link href="/" className=" hover:text-gray-300">Home</Link>
        <Link href="/users" className=" hover:text-gray-300">Dashboard</Link>
        <Link href="/register" className=" hover:text-gray-300">Sign up</Link>
        <Link href="/login" className=" hover:text-gray-300">Login</Link>
      </div>
    </div>
  </nav>)
}