import { Great_Vibes, Dancing_Script, Lora, Satisfy } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "@/components/Footer";

const inter = Lora({ weight: "400", subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body
        className={`${inter.className} antialiased`}
      >
        <div className="container mx-auto max-w-screen-lg px-4 sm:px-2">
        <Navigation/>
        {children}
        <Footer />
        </div>
      </body>
    </html>
  );
}
