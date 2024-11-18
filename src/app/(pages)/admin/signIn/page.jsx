import React from "react";
import LoginForm from "./LoginForm";
import { auth } from "../../../../../auth";
import { redirect } from "next/navigation";

const SignInPage = async () => {

    const session = await auth();

    if (session) {
      redirect("/admin"); 
    }

  return (
    <div className="w-full flex flex-col lg:flex-row justify-center py-10 px-2">

        <div className="mb-10 text-center text-[2rem]"> Sign in</div>
      <LoginForm />
    </div>
  );
};

export default SignInPage;
