"use client";

import ResourceFile from "./resourceFile";

const SearchResults = ({ data }) => {
  return (
    <div>
      <h3>Search Results...</h3>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        {data
          ? data.map((material) => {
              console.log(material.title);
              return (
                <div key={material.id}>
                  <ResourceFile
                    key={material.id}
                    materialId={material.id}
                    title={material.title}
                    filename={material.title}
                    fileUrl={material.fileUrl}
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
