import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Analytics } from "@vercel/analytics/react";
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
      <head>
        <Script
        // type="text/javascript"
        // src="//pl23081874.profitablegatecpm.com/68/94/5f/68945f18aeba4962e723b4e5f83c16e5.js"
        ></Script>
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          interFont.variable
        )}
      >
        <Navbar />

        {children}
        <Analytics />

        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              var atOptions = {
                'key' : '910d27652150a343764eeb820d45c593',
                'format' : 'iframe',
                'height' : 50,
                'width' : 320,
                'params' : {}
              };
              `,
          }}
        />
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
        <Script
          type="text/javascript"
          src="//pl23081954.profitablegatecpm.com/1d/9f/33/1d9f330d33c5abee1c2bda6648021eac.js"
        ></Script>
      </body>
    </html>
  );
}
