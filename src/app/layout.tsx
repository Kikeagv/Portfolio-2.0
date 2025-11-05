import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist, Albert_Sans } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
  weight: ["400", "500", "600", "700"],
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${albertSans.variable} ${geist.variable}`}>
      <body className="font-albert-sans bg-black text-white">
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
