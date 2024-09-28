import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FADE",
  description: "Fade Network is a decentralized video sharing and option trading with peer2peer communication on sui.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
