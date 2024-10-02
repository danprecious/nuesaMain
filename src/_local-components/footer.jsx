import React from "react";
import CustomButton from "./button";
import {FaSquareXTwitter} from "react-icons/fa6"
import {FaFacebookSquare} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="bg-bg text-white flex-col md:flex-row  flex justify-center items-center md:justify-between mt-6 md:p-10 p-6">
      <div className="my-4 md:my-0">
      <p> &copy; <span className="text-md">NUESA 23'</span></p>
      </div>
      <div className="flex items-center">
        Follow Us  ~
      <div className="flex p-2">
      <FaSquareXTwitter className="text-[1.6rem] " />
      <FaFacebookSquare className="text-[1.6rem] mx-2" />
      </div>
      </div>
    </div>
  );
};

export default Footer;
