"use client";

import { saveAs } from "file-saver";
import { useEffect } from "react";
import { FaDownload, FaFile } from "react-icons/fa6";

const ResourceFile = ({ materialId, title, filename, fileData, category }) => {
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
  const blob = new Blob([fileData], {
    type: fileType,
  });

  const handleDownload = () => {
    saveAs(blob, filename);
  };

  return (
    <div className="flex flex-col w-full py-3 px-2  border-b-stone-700 border-solid border-b-[1px] md:border-none">
      <div className="flex w-full justify-between   md:flex-col md:justify-between md:py-5 items-center md:h-[10em] h-[5em]">
        <FaFile className="text-[1.5rem] md:text-[3rem] items-center hidden md:flex" />
        <p className="text-sm text-center hidden md:flex">
          {title.slice(0, 12)}...
        </p>
        <p className="text-sm  md:hidden">{title}</p>
        <div className=" md:w-full items-center md:bg-stone-800 rounded-md justify-center flex">
          <button
            onClick={handleDownload}
            className="rounded-md py-2 justify-center flex items-center"
          >
            {/* <span className="text-sm">download</span> */}
            <FaDownload className="text" />
          </button>
        </div>
      </div>
      <div className="md:hidden text-xs text-stone-500">{category}</div>
    </div>
  );
};

export default ResourceFile;
