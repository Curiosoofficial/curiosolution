import type { Metadata } from "next";
import { Open_Sans } from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/Navbar";



const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-openSans'
})

export const metadata: Metadata = {
  title: 'CurioSolutions',
  description: 'A community-driven platform for asking and answering programing questions. Get help, share knowlegde, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.',
  icons: {
    icon: '/assets/images/site-logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} bg-primary text-white font-openSans`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
