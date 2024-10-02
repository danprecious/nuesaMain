import "./globals.css";
import { ContextProvider } from "../utils/context";
import Header from "@/_local-components/header";
import {Playfair_Display} from 'next/font/google'
import { NavBody } from "@/_local-components/nav-bar";
import SpaceEffect from "@/_local-components/spaceEffect";
export const metadata = {
  title: "NUESA-OAUSTECH",
  description: "NUESA OAUSETCH Chapter Website",
};

const PlayFairDisplay = Playfair_Display({subsets: ['latin']})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-bg relative text-white ${PlayFairDisplay.className}`}>
        <ContextProvider>
        <Header />
        <SpaceEffect />
        {children}
        </ContextProvider>
      </body>
    </html>
  );
}
