import type { Metadata } from "next";
import "../globals.css";
import { Header } from "@/components/shared/header";

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
    <main className="min-h-screen">
      <Header />
      {children}
    </main>
  );
}
