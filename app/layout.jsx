import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: {
    template: "Paolo Lalap - %s",
    absolute: "Paolo Lalap",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "mx-auto min-h-screen max-w-sm bg-gradient-to-br from-gray-800 to-gray-950 pt-8 sm:max-w-md md:max-w-xl",
          roboto.className,
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
