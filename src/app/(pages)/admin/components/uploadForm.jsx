"use client";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import React, { useContext, useState } from "react";

import axios from "axios";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { optimizeFonts } from "../../../../../next.config";
import { departments, levels } from "@/app/utils/constants";

const materialSchema = z.object({
  category: z.enum([
    "Thermodynamics",
    "Control Systems",
    "Engineering Mathematics",
  ]),
  level: z.enum([
    "100 Level",
    "200 Level",
    "300 Level",
    "400 Level",
    "500 Level",
  ]),
  department: z.enum(["Mechanical", "Civil", "Electrical"]),
  materialType: z.enum(["Course material", "Past questions"]),
  resourceFile: z
    .array(
      z.any().refine((file) => file instanceof File, {
        message: "Each file must be a valid file",
      })
    )
    .nonempty("At least one file is required"),
});

const UploadForm = () => {
  const [uploadStatus, setUploadStatus] = useState("Upload");
  const [uploadError, setUploadError] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const categoryList = [
    "Thermodynamics",
    "Control Systems",
    "Engineering Mathematics",
  ];

  const materialTypes = ["Course material", "Past questions"];

  const uploadFile = async (file, data) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("category", data.category);
    formData.append("level", data.level);
    formData.append("department", data.department);
    formData.append("materialType", data.materialType);

    const response = await axios.post(
      "/api/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  };

  const SubmitHandler = async (data) => {
    console.log("upload started...");

    const files = data.resourceFile;

    setIsUploading(true);
    // Create an array of upload promises

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      try {
        setUploadStatus(`Uploading file ${i + 1}/${files.length}`);
        const response = await uploadFile(file, data);
        console.log(response);
        console.log("File uploaded:", file.name);
        await delay(1000);
      } catch (error) {
        console.error("Error uploading file:", file.name, error);
        setUploadError(`${file.name} failed to upload`);
      }
    }
    setUploadStatus("All files have been uploaded");
    setIsUploading(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(materialSchema),
  });

  return (
    <div className="">
      <div className="hidden text-center"></div>
      <div className="my-8 lg:w-[70%]">
        <form
          onSubmit={handleSubmit(SubmitHandler)}
          className="bg-stone-900 rounded-md w-full lg:p-10 px-2 py-6"
        >
          <div className="my-3">
            <label htmlFor="level">Select Level</label>
            <select
              name="level"
              id="level"
              {...register("level")}
              className="w-full text-black py-1 px-3"
            >
              {levels.map((level) => {
                return (
                  <option
                    key={level.id}
                    value={level.title}
                    className="text-black"
                  >
                    {level.title}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="my-3">
            <label htmlFor="department">Select Department</label>
            <select
              name="department"
              id="department"
              {...register("department")}
              className="w-full text-black py-1 px-3"
            >
              {departments.map((department) => {
                return (
                  <option
                    key={department.id}
                    value={department.title}
                    className="text-black"
                  >
                    {department.title}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="my-3">
            <label htmlFor="category">Select field category</label>
            <select
              name="category"
              className="text-black px-3 py-1 w-full my-2"
              {...register("category")}
              id="category"
            >
              {categoryList.map((categoryItem) => {
                return (
                  <option key={categoryItem} value={categoryItem}>
                    {categoryItem}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="mt-3">
            <label htmlFor="materialType">Select Material Type</label>
            <select
              name="materialType"
              className="text-black px-3 py-1 w-full my-2"
              {...register("materialType")}
              id="materialType"
            >
              {materialTypes.map((type) => {
                return (
                  <option key={type} value={type}>
                    {type}
                  </option>
                );
              })}
            </select>
          </div>
          {errors.category && <p>{errors.category.message}</p>}

          <div className="flex lg:justify-start justify-center text-sm  my-5">
            <div className="text-center bg-bgShade rounded-md">
              <Controller
                control={control}
                name="resourceFile"
                render={({ field: { value, onChange, ...field } }) => (
                  <input
                    {...field}
                    onChange={(e) => {
                      onChange(Array.from(e.target.files));
                    }}
                    id="resourceFile"
                    type="file"
                    className="bg-amber-400 w-full"
                    multiple
                    size={20}
                  />
                )}
              />
            </div>
          </div>

          <div className="my-5 flex justify-center lg:justify-start">
            <button
              className="btn bg-lime-500 py-2 px-4 rounded-md"
              type="submit"
              disabled={isUploading}
            >
              {uploadStatus}
            </button>
          </div>
          <div className="">
            <p>{uploadError ? uploadError : ""}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadForm;
