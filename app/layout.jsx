import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { roboto } from "@/fonts/fonts";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { PreloadResources } from "./preload-resources";

export const metadata = {
  title: {
    template: "Paolo Lalap - %s",
    absolute: "Paolo Lalap",
  },
  description:
    "This is the portfolio website of Paolo Lalap, a Front-end Developer based in the Philippines, with experience in HTML, CSS, React, Next.js, Tailwind CSS, Shadcn UI, Framer Motion, React Native, JavaScript, MongoDB, Firebase, and Git.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <PreloadResources />
      <body
        className={cn(
          roboto.className,
          "min-h-screen w-screen min-w-fit overflow-x-hidden bg-gray-900 px-8 sm:bg-gradient-to-br sm:from-gray-800 sm:to-gray-950 md:p-0",
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
