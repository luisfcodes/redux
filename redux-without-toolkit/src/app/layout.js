import { Inter } from "next/font/google";
import "../styles/globals.css";
import { StoreInitializer } from "@/store";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Redux Without Toolkit",
  description: "Testing redux without toolkit",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <StoreInitializer>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </StoreInitializer>
  );
}
