import { Lobster, Roboto } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const lobster = Lobster({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-lobster",
});
