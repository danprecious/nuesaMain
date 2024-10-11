import React from "react";
import UploadForm from "./components/uploadForm";
import { SectionHeading } from "@/_local-components/sectionLayout";

const AdminPage = () => {
  return (
    <div className="px-3 lg:px-20">
      <SectionHeading text={"Upload a Material"} />
      <UploadForm />
    </div>
  );
};

export default AdminPage;
