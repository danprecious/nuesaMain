"use client";

import axios from "axios";
import ResourceFile from "./resourceFile";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const ResourcesList = () => {
  return (
    <div>
      <MaterialResources />
      {/* <PastQuestionsResources /> */}
    </div>
  );
};

export default ResourcesList;

export const MaterialResources = () => {
  const [materials, setMaterials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(30);

  useEffect(() => {
    const fetchMaterials = async () => {
      const response = await axios.get(
        `/api/fetchMaterials?page=${page}&limit=${limit}`,
        {
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
          },
        }
      );
      const materialData = response.data;
      const totalPages = Math.ceil(total / limit);
      setMaterials(materialData.materials);

      setTotal(materialData.total);
      setLimit(materialData.limit);
      setIsLoading(false);
    };

    fetchMaterials();
  }, [page, limit]);

  const totalPages = Math.ceil(total / limit);
  return (
    <div className="w-full my-6">
      {isLoading ? (
        <div className="">Loading resources</div>
      ) : (
        <div className="">
          {console.log(materials)}
          {materials ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-3 place-items-center">
              {materials.map((material) => {
                console.log(material.title);
                return (
                  <ResourceFile
                    key={material.id}
                    materialId={material.id}
                    title={material.title}
                    filename={material.title}
                    fileUrl={material.fileUrl}
                    level={material.level}
                    category={material.category.name}
                  />
                );
              })}

              
            </div>
          ) : (
            <div className="">fetching resources</div>
          )}
          <div className="flex w-full justify-center my-10">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="flex items-center justify-center"
            >
              <FaAngleLeft />
            </button>
            <span className="px-5">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
              className="flex items-center justify-center"
            >
              <FaAngleRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export const PastQuestionsResources = () => {
  return <div className="">PastQuestions</div>;
};
