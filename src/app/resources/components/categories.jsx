import React from "react";

const Categories = () => {
  const categoryList = [
    {
      id: "1",
      title: "Thermodynamics",
      color: "lime-500",
    },
    {
      id: "1",
      title: "Fluid Mechananics",
      color: "purple-500",
    },
    {
      id: "1",
      title: "Engineering Drawings",
      color: "amber-500",
    },
    {
      id: "1",
      title: "Engineering Mathematics",
      color: "purple-500",
    },
    {
      id: "1",
      title: "100 Level materials",
      color: "red-500",
    },
    {
      id: "1",
      title: "Electrical Courses",
      color: "cyan-500",
    },
    {
      id: "1",
      title: "200 Level materials",
      color: "yellow-500",
    },
    {
      id: "1",
      title: "Civil Courses",
      color: "slate-500",
    },
  ];

  return (
    <div className="flex  overflow-x-scroll py-3 my-6">
      <div className="hidden">
        <div className="bg-red-500"></div>
        <div className="bg-amber-500"></div>
        <div className="bg-cyan-500"></div>
        <div className="bg-slate-500"></div>
        <div className="bg-amber-500"></div>
        <div className="bg-yellow-500"></div>
        <div className="bg-purple-500"></div>
        <div className="bg-lime-500"></div>
      </div>

      {categoryList.map((category) => {
        return (
          <button
            key={category.id}
            className={`px-3 py-2 w-full bg-${category.color} mx-2 text-sm min-w-[15em] rounded-sm`}
          >
            {category.title}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
