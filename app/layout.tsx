import "./globals.css";
import { Nunito, Roboto_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";

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

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" data-rh="true" href="/logo.png" />
      </head>
      <body
        className={`${nunito.variable} ${roboto_mono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
