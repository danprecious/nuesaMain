import "./globals.css";
import { ContextProvider } from "./utils/context";
import localFont from "next/font/local";
import Header from "./components/header";
import { Playfair_Display, Advent_Pro, Playpen_Sans, Sunflower } from "next/font/google";

import SpaceEffect from "@/app/components/global/spaceEffect";
export const metadata = {
  title: "NUESA-OAUSTECH",
  description: "NUESA OAUSETCH Chapter Website",
};
 

export const myFont = localFont({
  src: "../../public/fonts/ModernAesthetic-DemoVersion-Regular.otf",
  variable: "--font-myFont",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-bg relative text-white ${myFont.variable}`}
      >
        <ContextProvider>
          <Header />
          <SpaceEffect />
          {children}
          {/* <SpaceEffect /> */}
        </ContextProvider>
      </body>
    </html>
  );
}
