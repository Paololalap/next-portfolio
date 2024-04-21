import { Roboto } from "next/font/google";
import "@/styles/globals.css";
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
          "mx-auto min-h-screen w-fit bg-gray-900 p-8 sm:max-w-lg sm:bg-gradient-to-br sm:from-gray-800 sm:to-gray-950 sm:pt-8 md:max-w-2xl",
          roboto.className,
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
