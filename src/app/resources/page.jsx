import React from "react";
import SearchBox from "./components/searchBox";
import Categories from "./components/categories";
import ResourcesList from "./components/resourcesList";
import { SectionHeading } from "@/_local-components/sectionLayout";

const ResourcesPage = () => {
  return (
    <section className="lg:px-20 px-2">
      <div className="">
        
        <SectionHeading text={"Resources for you"} className="" />
      </div>

      <div className="lg:w-[45%]">
        <SearchBox />
      </div>

      <div>
        <Categories />
      </div>
      <div className="">
        <ResourcesList />
      </div>
    </section>
  );
};

export default ResourcesPage;
