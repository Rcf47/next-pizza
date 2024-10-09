import type { Metadata } from "next";
import "./globals.css";
import { Nunito, Roboto_Mono } from "next/font/google";

const nunito = Nunito({
  subsets: ["cyrillic"],
  variable: "--font-nunito-sans",
  weight: ["400", "500", "600", "700", "800", "900"],
});
const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});
export const metadata: Metadata = {
  title: "Next pizza",
  description: "My educational project next pizza",
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
