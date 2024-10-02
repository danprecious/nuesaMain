import React from "react";
import CustomButton from "./button";
import Form from "./form";
import SpaceEffect from "./spaceEffect";

const PreFooter = () => {
  return (
    <div className="bg-bg relative text-white md:flex mt-6 md:p-16 p-6">
    <SpaceEffect />
      <div className="md:max-w-[50%]">
        <h2 className="text-[2.5rem] text-center md:text-left my-8 font-extrabold">
          We've Got Your Back!
        </h2>
        <p className="md:text-justify text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit vitae
          nemo quo nihil, necessitatibus veniam vel possimus placeat at fuga?
          Tempore quisquam maiores libero dolores debitis placeat, beatae
          consequuntur! Nemo temporibus eius dolorum quam necessitatibus maxime
          sed laboriosam exercitationem, odio ipsa, laborum cum atque iste
          tempora iure, quaerat sint impedit!
        </p>
      </div>
      <div className="p-4 md:w-[50%] flex justify-center">
        <Form />
      </div>
    </div>
  );
};

export default PreFooter;
