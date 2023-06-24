import Nav from "@/components/layout/Nav"
import "./globals.css"
import { Inter, Poppins, Roboto } from "next/font/google"
import Footer from "@/components/layout/Footer"

const roboto = Poppins({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
})

export const metadata = {
  title: "Kairo Store",
  description: "New generation fashion.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-screen">
      <body
        className={`${roboto.className} w-screen  h-screen overflow-hidden`}
      >
        <div className="flex flex-col h-full justify-between">
          <Nav />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
