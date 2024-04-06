import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google"; 
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
// import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Oksana Melnyk | Personal Portfolio",
  description:
    "Oksana Melnyk is a frontend developer based in Wiesbaden, Germany. She is passionate about web development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-6 overscroll-none`}>
        <div className="absolute top-[5%] right-[43%] -z-[1] w-[600px] h-[500px] bg-[#c0afeb] rounded-full blur-3xl" />
        <div className="absolute top-[6%] right-[10%] sm:right-[23%] -z-[1] w-[350px] h-[240px] bg-[#d8ffd0] rounded-full blur-2xl" />
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <div className="absolute top-0 left-0 w-full h-screen	 -z-[1] "></div>
            <Header />
            {children}
            <Toaster position="top-right" />
            <Footer />
          </ActiveSectionContextProvider>
          {/* <ThemeSwitch /> */}
        </ThemeContextProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
