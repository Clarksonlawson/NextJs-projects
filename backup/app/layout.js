import { Inter, Love_Ya_Like_A_Sister } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './ui/Header'
import Footer from './ui/footer'

const Love = Love_Ya_Like_A_Sister({ subsets: ['latin'], weight:"400" })

export const metadata = {
  title: 'Infinity',
  description: 'Just another simple site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Love.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
