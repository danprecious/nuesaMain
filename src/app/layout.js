import "./globals.css";
import { ContextProvider } from "./utils/context";
import Header from "./components/header";
import { Playfair_Display } from "next/font/google";

import SpaceEffect from "@/app/components/global/spaceEffect";
export const metadata = {
  title: "NUESA-OAUSTECH",
  description: "NUESA OAUSETCH Chapter Website",
};

const PlayFairDisplay = Playfair_Display({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-bg relative text-white ${PlayFairDisplay.className}`}
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
