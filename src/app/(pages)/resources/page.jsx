import React from "react";
import SearchBox from "./components/searchBox";
import Categories from "./components/categories";
import ResourcesList from "./components/resourcesList";

import SearchResults from "./components/searchResults";

const ResourcesPage = () => {
  return (
    <section className="lg:px-20 px-2">
      

      <div className="flex justify-center">
        <SearchBox />
      </div>
 
      {/* <div>
        <Categories />
      </div> */}
      <div className="">
       
        <ResourcesList />
      </div>
    </section>
  );
};

export default ResourcesPage;
