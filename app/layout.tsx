import type { Metadata } from "next";
import "./globals.css";
import { Nunito, Roboto_Mono } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
});
const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});
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
        className={`${nunito.variable} ${roboto_mono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
