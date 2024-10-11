"use client";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import React, { useContext, useState } from "react";

import axios from "axios";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";

const materialSchema = z.object({
  category: z.enum([
    "Thermodynamics",
    "Control Systems",
    "Engineering Mathematics",
  ]),
  resourceFile: z.any().refine((file) => file instanceof File, {
    message: "Cover image is required",
  }),
});

const UploadForm = () => {
  const categoryList = [
    "Thermodynamics",
    "Control Systems",
    "Engineering Mathematics",
  ];

  const [categories, setCategories] = useState([]);

  const handleInputData = (e) => {
    const name = e.target.title;
    setInputData({ ...inputData, [name]: value });
  };

  const SubmitHandler = async (data) => {
    console.log("Form data submitted:", data);

    const formData = new FormData();

    console.log(...formData);

    // try {
    //   const response = await axios.post(
    //     "http://localhost:3000/api/post",
    //     formData,
    //     {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     }
    //   );
    //   console.log(response.data);
    //   // Reset form or navigate to another page after successful submission
    // } catch (error) {
    //   console.error(error);
    // }
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
          className="bg-stone-900 rounded-md w-full lg:p-10 p-2"
        >
          <select
            className="text-black px-3 py-1 w-full md:w-[50%] my-6"
            {...register("category")}
            id="category"
          >
            {categoryList.map((categoryItem) => {
              return <option value={categoryItem}>{categoryItem}</option>;
            })}
          </select>
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
