import React from "react";

const SectionOne = () => {
  return (
    <div className="bg-white text-black flex flex-col items-center mt-6 md:py-16 md:px- p-6">
      <h2 className="text-[3rem] mt-12 md:mb-10 mb-5 font-black headers text-center">
        Our Mission
      </h2>
      <div className="md:w-[80%] mb-8 md:mt-12 flex flex-col md:flex-row md:justify-between ">
        <div className="md:w-[40%] flex flex-col justify-center md:mt-0 mb-6 ">
          <h3 className=" text-[1.5rem] font-bold  mb-4">
            Towards Optimal Student's Welfarism
          </h3>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            nemo minus aperiam maxime quisquam doloremque asperiores nostrum
            
          </p>
        </div>
        <div className="md:w-[55%] w-[100%] mt-8 md:mt-0">
          <div className="bg-zinc-200 h-[70vh] w-[100%] rounded-md relative">
            <div className="h-[10px] absolute bg-stone-950 w-[50%] top-[-1.5rem] right-0  "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
