"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
const prima_links = [
  {
    name: "Dashboard",
    href: "/users",
  },
  {
    name: "Sign up",
    href: "/register",
  },
  {
    name: "Login",
    href: "/login",
  },
 
];

function Navigation({ className, ...props }) {
  const pathname = usePathname();

  return (
    <div className="relative">
      
        <div className={cn("mb-4 flex items-center", className)} {...props}>
          {prima_links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className={cn(
                "flex items-center px-4",
                pathname?.startsWith(link.href)
                  ? "font-bold text-primary"
                  : "font-medium text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      
    
    </div>
  );
}


export { Navigation };
