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
    <div className="flex flex-col w-full py-3 px-2 lg:px-6 lg:py-5 max-w-[30em]  lg:bg-stone-900 lg:rounded-[1.5em] border-solid  ">
      <div className="flex w-full justify-between  items-center  min-h-[5em]">

        <p className="text-sm text-center hidden md:flex">
          {title}...
        </p>
        <p className="text-sm w-[85%]  md:hidden">{title}</p>
        <div className="  items-center  rounded-md justify-center flex">
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
      <div className=" text-xs text-stone-500 pt-5">{category}</div>

      <p className="text-xs text-red-500">{downloadError}</p>
    </div>
  );
};

export default ResourceFile;
