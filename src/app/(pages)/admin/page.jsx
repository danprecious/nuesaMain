import React from "react";
import UploadForm from "./components/uploadForm";

import { auth } from "../../../../auth";
import { redirect } from "next/navigation";
import { upsertCategory } from "@/app/lib/prismaCategorySeed";

const AdminPage = async () => {
  const session = await auth();

  // await upsertCategory();

  if (!session) redirect("/admin/signIn");

  return (
    <div className="px-3 lg:px-20">
      {/* <SectionHeading text={"Upload a Material"} /> */}

      <h3 className="md:text-left text-center w-full text-[1.5rem] font-bold">
        Upload a Material
      </h3>
      <UploadForm />
    </div>
  );
};

export default AdminPage;
