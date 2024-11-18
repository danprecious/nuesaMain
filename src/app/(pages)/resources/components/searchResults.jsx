"use client";

import ResourceFile from "./resourceFile";

const SearchResults = ({ data }) => {
  return (
    <div>
      <h3>Search Results...</h3>
      <div className="grid lg:grid-cols-5 grid-cols-1">
        {data
          ? data.map((material) => {
              console.log(material.materialFile.filename);
              return (
                <div key={material.id}>
                  <ResourceFile
                    materialId={material.id}
                    title={material.title}
                    filename={material.materialFile?.filename}
                    fileData={material.materialFileData}
                    category={material.category.name}
                  />
                </div>
              );
            })
          : "No search results"}
      </div>
    </div>
  );
};

export default SearchResults;
