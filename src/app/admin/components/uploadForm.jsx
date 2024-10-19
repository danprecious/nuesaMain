"use client";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import React, { useContext, useState } from "react";

import axios from "axios";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { optimizeFonts } from "../../../../next.config";
import { departments, levels } from "@/utils/constants";

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
  resourceFile: z.any().refine((file) => file instanceof File, {
    message: "Resource file required",
  }),
});

const UploadForm = () => {
  const categoryList = [
    "Thermodynamics",
    "Control Systems",
    "Engineering Mathematics",
  ];

  const [categories, setCategories] = useState([]);

  const SubmitHandler = async (data) => {
    console.log("Form data submitted:", data);

    const formData = new FormData();
    formData.append("file", data.resourceFile);
    formData.append("category", data.category);
    formData.append("level", data.level);
    formData.append("department", data.department);

    console.log(...formData);

    try {
      const response = await axios.post(
        "http://localhost:3001/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      // Reset form or navigate to another page after successful submission
    } catch (error) {
      console.log("error here");
      console.error(error);
    }
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
              className="text-black px-3 py-1 w-full lg:w-[50%] my-6"
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
          {errors.category && <p>{errors.category.message}</p>}

          <div className="flex lg:justify-start justify-center text-sm  ">
            <div className="text-center bg-bgShade rounded-md">
              <Controller
                control={control}
                name="resourceFile"
                render={({ field: { value, onChange, ...field } }) => (
                  <input
                    {...field}
                    onChange={(e) => {
                      onChange(e.target.files[0]);
                    }}
                    id="resourceFile"
                    type="file"
                    className="bg-amber-400 w-full"
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
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadForm;
