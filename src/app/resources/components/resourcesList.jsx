import { GetMaterials } from "@/app/actions/getMaterials";
import { FaFile } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import ResourceFile from "./resourceFile";

const ResourcesList = () => {
  return (
    <div>
      <MaterialResources />
      <PastQuestionsResources />
    </div>
  );
};

export default ResourcesList;

export const MaterialResources = async () => {
  const materials = await GetMaterials();

  // console.log(materials);

  return (
    <div className="w-full">
      {materials ? (
        <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-6 w-full gap-3 place-items-center">
          {materials.map((material) => {
            console.log(material.materialFile.filename);
            return (
              <ResourceFile
                key={material.id}
                materialId={material.id}
                title={material.title}
                filename={material.materialFile?.filename}
                fileData={material.materialFileData}
                category={material.category.name}
              />
            );
          })}
        </div>
      ) : (
        <div className="">Error fetching resources</div>
      )}
    </div>
  );
};

export const PastQuestionsResources = () => {
  return <div className="">PastQuestions</div>;
};
