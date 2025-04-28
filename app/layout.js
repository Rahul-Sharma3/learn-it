// app/layout.tsx or app/layout.jsx
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider" // This is shadcn's one
import Header from "@/components/header"
import { ClerkProvider } from "@clerk/nextjs"
import { Toaster } from "sonner";
import { dark } from "@clerk/themes"

const inter = Inter({subsets:["latin"]});

export const metadata = {
  title: "LearnIt - AI career guide",
  description: "",
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={
      {
        baseTheme:dark
      }
    }>
    <html
      lang="en"
      suppressHydrationWarning // Prevent mismatch warnings from `next-themes`
    >
      <body className={`${inter.className} `}>
        <ThemeProvider
          attribute="class" // important: applies class to <html>
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* <Header /> */}
          <Header />
            <main className="min-h-screen">{children}</main>
           <Toaster richColors/>

            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>Coded with love ❤ and a few bugs 🐞</p>
              </div>
            </footer>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  )
}
