import { Inter, Averia_Libre } from 'next/font/google'
import './globals.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './ui/Header'
import Footer from './ui/footer'
import { ThemeProvider } from '@/components/theme-setter'

const Love = Averia_Libre({ subsets: ['latin'], weight:"400" })

export const metadata = {
  title: 'Infinity',
  description: 'Just another simple site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Love.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Header />
       
            {children}
            </ThemeProvider>
         
        
        <Footer />
        </body>
    </html>
  )
}
