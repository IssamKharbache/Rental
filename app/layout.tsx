import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rental",
  description: "Where Every Stay Feels Like Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        {/* Header */}
        <NavBar />
        <div className="pt-28">
          {children}
        </div>
        </body>
    </html>
  );
}
