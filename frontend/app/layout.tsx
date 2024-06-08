import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import LoginModal from "@/components/modals/authentication/LoginModal";
import SignupModal from "@/components/modals/authentication/SignupModal";
import { Toaster } from "sonner";
import AddPropertyModal from "@/components/modals/property/AddPropertyModal";

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
          <Toaster richColors position="top-center" />
          {children}
        </div>
        <LoginModal />
        <SignupModal />
        <AddPropertyModal />
        </body>
    </html>
  );
}
