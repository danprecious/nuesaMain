import CustomButton from "@/_local-components/button";
import React from "react";

const CommunitySection = () => {
  return (
    <div className="lg:flex items-center ">
      <div className="w-[40%] ">
        <p className="py-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus aspernatur laudantium culpa dicta optio at!
        </p>
        <div className="flex">
          <CustomButton text="Read more" background="black" textColor="white" />
        </div>
      </div>
      <div className="h-[75vh] w-[60%]">
        <div className="h-[28%] flex justify-center items-end">
            <div className="h-[50%] w-[15%] mx-1 bg-stone-500 rounded-2xl"></div>
            <div className="h-[70%] w-[25%] mx-1 bg-stone-500 rounded-2xl"></div>
            <div className="h-[50%] w-[15%] mx-1 bg-stone-500 rounded-2xl"></div>
        </div>
        <div className="h-[40%] flex justify-center items-center my-1">
            <div className="h-[70%] w-[20%] mx-1 bg-stone-500 rounded-2xl"></div>
            <div className="h-[100%] w-[40%] mx-1 bg-stone-500 rounded-2xl"></div>
            <div className="h-[70%] w-[20%] mx-1 bg-stone-500 rounded-2xl"></div>
        </div>
        <div className="h-[28%] flex justify-center ">
            <div className="h-[50%] w-[15%] mx-1 bg-stone-500 rounded-2xl"></div>
            <div className="h-[70%] w-[25%] mx-1 bg-stone-500 rounded-2xl"></div>
            <div className="h-[50%] w-[15%] mx-1 bg-stone-500 rounded-2xl"></div>
        </div>
        
        <div className="mx-1 bg-stone-600 rounded-2xl"></div>
      </div>
    </div>
  );
};

export default CommunitySection;
