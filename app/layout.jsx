import "@/styles/globals.css";
import Header from "@/components/header/Header";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer/Footer";
import { roboto } from "@/fonts/fonts";

export const metadata = {
  title: {
    template: "Paolo Lalap - %s",
    absolute: "Paolo Lalap",
  },
  description:
    "Portfolio website of Paolo Lalap, a Freelance Front-end Developer from the Philippines, with experience in HTML, CSS, React.js, Next.js, Tailwind CSS, Shadcn UI, React Native, JavaScript, MongoDB, Firebase, and Git.",
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
        <Footer />
      </body>
    </html>
  );
}
