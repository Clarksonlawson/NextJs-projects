import { NextAuthConfig } from "next-auth";
import { useRouter } from "next/navigation";

// const router = useRouter();
export const authConfig = {
    pages: {
      signIn: '/login',
    },
    callbacks: {
      authorized({ auth, request: { nextUrl } }) {
        const isLoggedIn = !!auth?.user;
        const isOnDashboard = nextUrl.pathname.startsWith('/users');
        if (isOnDashboard) {
          if (isLoggedIn) return true;
          return false; // Redirect unauthenticated users to the login page
        } else if (isLoggedIn) {
          // Assuming you want to redirect to '/dashboard' for authenticated users
           Response.redirect(new URL('/users', nextUrl));
          
        //   router.push('/users')
          return false; // Return false to stop further processing
        }
        return true;
      },
    },
    providers: [], // Add providers with an empty array for now
  };
  
  