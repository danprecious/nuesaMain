"use client";

import React, { useState } from "react";
import CustomButton from "./button";

const Form = () => {
  return (
    <form className="w-[100%] bg-neutral-900 max-w-[25em] rounded-md h-[30em] py-8 px-5">
      <input
        type="text"
        placeholder="Name"
        className="w-[100%] my-4 text-neutral-800 outline-neutral-600 rounded-md px-3 py-1"
      />
      <div className="my-4 relative">
        <SelectInput />
      </div>
      <input
        type="email"
        placeholder="Email"
        className="w-[100%] my-4 text-neutral-800 outline-neutral-600 rounded-md px-3 py-1"
      />
      <textarea
        placeholder="Send us a message"
        className="w-[100%] resize-none text-neutral-800 h-[5em] my-4 py-1 px-3 rounded-md outline-neutral-600"
      />
      <div className="w-[100%] flex justify-center md:justify-end my-4">
        <CustomButton
          text="Send Message"
          textColor="black"
          background="white"
        />
      </div>
    </form>
  );
};

export default Form;

export const SelectInput = () => {
  const [select, setSelect] = useState(false);
  const [selectValue, setSelectValue] = useState("Select department");
  const toggleSelect = () => {
    setSelect(!select);
    console.log(select);
  };

  const handleSelect = (text) => {
    setSelectValue();
  };

  return (
    <div className="w-[100%] cursor-pointer" onClick={toggleSelect}>
      <div className="w-[100%] bg-white rounded-md text-neutral-400 px-3 py-1 flex justify-between">
        <p>{selectValue}</p>
        {!select ? <p className="font-extrabold">v</p> : ""}
      </div>
      {select ? (
        <div className="absolute w-[100%]  my-2 h-[9em] flex flex-col tex bg-neutral-700 rounded-md">
          <button
            text="Mechanical"
            className="p-2 border-b-stone-200 border-opacity-10 border-solid border-b-[1px]"
            onClick={() => setSelectValue("Mechanical engineering")}
          >
            Mechanical engineering
          </button>
          <button
            text="Mechanical"
            className="p-2 border-b-stone-200 border-opacity-10 border-solid border-b-[1px]"
            onClick={() => setSelectValue("Electrical engineering")}
          >
            Electrical engineering
          </button>
          <button
            text="Mechanical"
            className="p-2 border-b-stone-200 border-opacity-10 border-solid border-b-[1px]"
            onClick={() => setSelectValue("Civil engineering")}
          >
            Civil engineering
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
