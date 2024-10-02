import React from "react";
import CustomButton from "./button";
import { Playfair_Display } from "next/font/google";
import SpaceEffect from "./spaceEffect";

const PlayFairDisplay = Playfair_Display({ subsets: ["latin"] });
const SectionLayout = ({ children, headerText }) => {
  return (
    <div className="bg-white text-black grid place-items-center relative mt-6 md:p-10  p-6">
      <SpaceEffect />
      <SectionHeading text={headerText} className="text-center" />
      <div>{children}</div>
    </div>
  );
};

export default SectionLayout;

export const SectionHeading = ({ text }) => {
  return (
    <h2
      className={`md:text-[3rem] headers text-[2.2rem] text ${PlayFairDisplay.className}  my-8 font-black`}
    >
      {text}
    </h2>
  );
};
