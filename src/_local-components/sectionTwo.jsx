import React from "react";
import CustomButton from "./button";

const SectionTwo = () => {
  return (
    <div className="bg-white text-black mt-6 md:p-16 py-6 px-1">
      <h2 className="text-[3rem] my-8 font-black headers text-center">
        Our Story
      </h2>
      <div className="lg:flex justify-between w-full">
        <div className="flex-col flex h-[60vh] lg:w-[50%] lg:mx-3 relative mb-8 lg:mb-0">
          <div className="h-[10px] absolute bg-stone-950 lg:w-[50%] top-[-1.5rem] left-0  "></div>
          <div className="w-full rounded-2xl h-[50%] mb-8 bg-stone-600"></div>
          <div className="h-[50%] w-full flex ">
            <div className="w-[50%] h-[100%] rounded-2xl bg-stone-600 mr-1"></div>
            <div className="w-[50%] h-[100%] rounded-2xl bg-stone-600 ml-1"></div>
          </div>
        </div>
        <div className="lg:w-[40%] lg:mx-3 flex flex-col justify-center">
          <p className="mb-8 w-full text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            aspernatur sequi. Dolore deserunt aperiam, cupiditate illum ratione
            et commodi iure maxime id unde! Aut, reiciendis eaque? 
          </p>
          <div className="w-full flex md:justify-end">
            <CustomButton
              text="Read more"
              background="black"
              textColor="white"
            />
          </div>
        </div>
      </div>
      <div className="mt-4"></div>
    </div>
  );
};

export default SectionTwo;
