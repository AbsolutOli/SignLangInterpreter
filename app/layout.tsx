"use client";

import { Header } from "@/components/Header";
import "../styles/app.scss";
import type { Metadata } from "next";
import { StoreProvider } from "@/redux/StoreProvider";
import "regenerator-runtime/runtime";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MioGesto",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StoreProvider>
          <Header />
          <div className="wrapper">{children}</div>
        </StoreProvider>
      </body>
    </html>
  );
}
