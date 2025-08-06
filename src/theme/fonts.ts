"use client";
import localFont from "next/font/local";

export const publicSans = localFont({
  src: [
    {
      path: "../assets/fonts/PublicSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/PublicSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-public-sans",
  display: "swap",
});
