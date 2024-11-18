"use client";

import axios from "axios";
import { saveAs } from "file-saver";
import { useState } from "react";

import { FaDownload, FaFile } from "react-icons/fa6";

const ResourceFile = ({ materialId, title, filename, fileUrl, category }) => {
  const [downloadError, setDownloadError] = useState("");

  const getfileType = (filename) => {
    const extension = filename.split(".").pop().toLowerCase();
    switch (extension) {
      case "pdf":
        return "application/pdf";
      case "jpeg":
        return "image/jpeg";
      case "png":
        return "image.png";
      case "docx":
        return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
      default:
        return "application/octet-stream";
    }
  };

  const fileType = getfileType(filename);

  const handleDownload = async () => {
    try {
      const response = await fetch(fileUrl);
      console.log(response);
      const blob = await response.blob();
      const fileBlob = new Blob([blob], { type: fileType });

      saveAs(fileBlob, filename);
    } catch (error) {
      console.error(error);
      setDownloadError("file cannot be found");
    }
  };

  return (
    <div className="flex flex-col w-full py-3 px-2 lg:bg-stone-950 border-b-stone-700 border-solid border-b-[1px] md:border-none">
      <div className="flex w-full justify-between   md:flex-col md:justify-between md:py-5 items-center md:h-[10em] h-[5em]">
        <FaFile className="text-[1.5rem] md:text-[3rem] items-center hidden md:flex" />
        <p className="text-sm text-center hidden md:flex">
          {title.slice(0, 12)}...
        </p>
        <p className="text-sm w-[85%]  md:hidden">{title}</p>
        <div className=" md:w-full items-center md:bg-stone-800 rounded-md justify-center flex">
          <button
            onClick={handleDownload}
            disabled={fileUrl ? false : true}
            className="rounded-md py-2 justify-center flex items-center cursor-pointer w-full"
          >
            {/* <span className="text-sm">download</span> */}
            <FaDownload className="text" />
          </button>
        </div>
      </div>
      <div className="md:hidden text-xs text-stone-500 pt-5">{category}</div>

      <p className="text-xs text-red-500">{downloadError}</p>
    </div>
  );
};

export default ResourceFile;
