"use client";

import { saveAs } from "file-saver";
import { useEffect } from "react";
import { FaDownload, FaFile } from "react-icons/fa6";

const ResourceFile = ({ materialId, title, filename, fileData }) => {
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
    <div
      key={materialId}
      className="px-3 mx-2 py-4 h-[12rem] lg:min-w-[10em] lg:w-[30%] w-[50%] min-w-fit rounded-md flex flex-col items-center justify-between bg-stone-900 "
    >
      <FaFile className="text-[4rem]" />
      <p className="text-sm text-center">{title.slice(0, 12)}...</p>
      <div className="w-full">
        <button
          onClick={handleDownload}
          className="w-full bg-stone-800 rounded-md py-2 justify-center flex items-center"
        >
          <span className="text-sm">download</span>
          {/* <FaDownload className="text-sm" /> */}
        </button>
      </div>
    </div>
  );
};

export default ResourceFile;
