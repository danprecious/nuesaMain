"use client";
import { useState, useEffect } from "react";
import CustomButton from "@/_local-components/button";

const Hero = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Innovation", "Creativity", "Ingenuity"];
  const [isDeleting, setIsDeleting] = useState(false);
  let currentWord;

  const type = () => {
    currentWord = words[wordIndex];
    const shouldDelete = isDeleting ? 1 : -1;
    setText((current) =>
      currentWord.substring(0, current.length - shouldDelete)
    );
    if (!isDeleting && text === currentWord) {
      setTimeout(() => setIsDeleting(true, 50));
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((current) => (current + 1) % words.length);
    }
  };

  useEffect(() => {
    const timer = setTimeout(type, isDeleting ? 70 : 200);
    return () => clearTimeout(timer);
  }, [wordIndex, isDeleting, text]);

  return (
    <div className="relative px-3 items-center justify-center flex flex-col min-h-[90vh]"> 
      <h1 className="text-[2.5rem] md:text-[6rem] px-2 headers text-center ">
        Creating a Culture of <br></br>
        <span className="typewriter typewriter-text transition-all text-center font-bold gradient-text">{text}</span>
      </h1>
      <p className="md:max-w-[50%] text-center  mt-10 text-[1.2rem]">
        In a fast growing technological world, there's the need for a proper
        environment for enginneers in the making; we are that student body that
        help the student all-round.
      </p>
      <div className="p-5 my-5">
        <CustomButton text="Our Story" background="white" textColor="black" />
      </div>
    </div>
  );
};

export default Hero;
