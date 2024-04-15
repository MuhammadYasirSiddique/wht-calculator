import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

import { cn } from "@/lib/utils";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import Script from "next/script";

const interFont = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WHT Calc",
  description: "Created for WHT Agents",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          interFont.variable
        )}
      >
        <Navbar />

        {children}

        {/* <Script type="text/javascript">
        
          atOptions =
          {
            'key' : '910d27652150a343764eeb820d45c593',
            'format' : 'iframe',
            'height' : 50,
            'width' : 320,
            'params' : {}
          };
        </Script> */}
        <Script
          strategy="beforeInteractive"
          type="text/javascript"
          src="//www.topcreativeformat.com/910d27652150a343764eeb820d45c593/invoke.js"
        ></Script>

        <Contact />
        <Footer />
      </body>
    </html>
  );
}
