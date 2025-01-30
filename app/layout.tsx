import "./globals.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";

const inter = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Double Your Clients as a Freelancer - Bootcamp",
  description:
    "Learn how to grow your freelance business with Muke Johnbaptist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
