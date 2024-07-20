import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { BackgroundBeams } from "@/components/ui/background-beams";
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
          "min-h-fit min-w-fit overflow-x-hidden",
        )}
        style={{ width: "calc(100vw - 12px)" }}
      >
        <BackgroundBeams />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
