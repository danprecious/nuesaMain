"use client";

import { createUser } from "@/app/actions/cruds";
import { signInSchema } from "@/app/lib/zodSchema";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const [error, setError] = useState({ general: "" });

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
  });

  //   useEffect(() => {
  //     async function createUserOnce() {
  //       await createUser({
  //         email: "danielkayode222@gmail.com",
  //         password: "kaydanpre222",
  //       });
  //     }

  //     createUserOnce();
  //   }, []); 

  const signInAdmin = async (data) => {
    console.log(data);

    try {
      const response = await axios.post(
        "/api/adminLogin",
        data,
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      router.push("/admin");
      console.log(response);
      return response;
    } catch (e) {
      console.error(e);
      setError({
        ...error,
        general: e,
      }),
        setTimeout(() => setError({ ...error, general: "" }), 2000);
    }
  };

  return (
    <div className="lg:w-[50%] flex justify-center">
      <form
        onSubmit={handleSubmit(signInAdmin)}
        className="w-full lg:w-[50%] lg:p-8 p-5 bg-stone-950 rounded-xl"
      >
        <div className="">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="w-full mb-5 rounded-md p-1 bg-stone-900 dark:text-stone-950"
            id="email"
            {...register("email")}
          />
        </div>
        <div className="">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            className="w-full mb-5 rounded-md bg-stone-900 p-1 dark:text-stone-950"
            {...register("password")}
          />
        </div>
        <button
          type="submit"
          className="w-[100%] text-center  my-3 bg-lime-500 dark:text-black py-1 rounded-md"
        >
          sign in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
