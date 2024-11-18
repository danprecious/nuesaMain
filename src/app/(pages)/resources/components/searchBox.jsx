"use client";

import React, { Suspense, useContext, useEffect, useState } from "react";
import { departments, levels } from "@/app/utils/constants";
import { FaSearch, FaTimesCircle } from "react-icons/fa";
import { FaAngleDown, FaFilter } from "react-icons/fa6";
import { Asul } from "next/font/google";
import axios from "axios";
import { StateContext } from "@/app/utils/context";
import SearchResults from "./searchResults";
import { performSearch } from "./performSearch";

const SearchBox = () => {
  const { state, dispatch } = useContext(StateContext);

  const [filterOpen, setFilterOpen] = useState(false);
  const [searchOutline, setSearchOutline] = useState(false);

  const [searchLevel, setLevel] = useState("");
  const [searchDepartment, setDepartment] = useState("");
  const [activeLevel, setActiveLevel] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [activeDepartment, setActiveDepartment] = useState("");

  
  const [initializeSearch, setInitializeSearch] = useState(false);

  const [selectLevel, setSelectLevel] = useState(false);
  const [selectDepartment, setSelectDepartment] = useState(false);
  const [selectOptions, setSelectOptions] = useState([]);

  const [searchData, setSearchData] = useState([]);

  const handleFilterOpen = () => {
    setFilterOpen(!filterOpen);
  };

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  const handleLevelClick = (title) => {
    console.log(title);
    setLevel(title);
    setActiveLevel(title);
  };
  const handleDepartmentClick = (title) => {
    console.log(title);
    setDepartment(title);
    setActiveDepartment(title);
  };

  const handleSearch = async () => {
    setInitializeSearch(true);
    setFilterOpen(true);
    if (!searchValue) {
      return;
    } else {
      const data = await performSearch(searchValue);
      setSearchData(data);
      dispatch({ type: "SET_DATA", payload: data });
    }
  };

  const handleFilterSave = async () => {
    console.log(searchLevel, searchDepartment, activeDepartment, activeLevel);

    console.log(searchValue);

    if (!searchValue && !searchDepartment && searchLevel) {
      return;
    }

    setSelectDepartment(false);
    setSelectLevel(false);
    const data = await performSearch(
      searchValue,
      searchDepartment,
      searchLevel
    );

    console.log(data);
    setSearchData(data);

    dispatch({ type: "SET_DATA", payload: data });
  };

  return (
    <div className="flex flex-col w-full ">
      <div className=" bg-lime-500"></div>
      <div
        className={`${
          searchOutline == true
            ? "border-[2px] border-solid border-stone-800"
            : ""
        } rounded-md lg:w-[35%] w-full bg-stone-950 flex justify-between items-center py-1 `}
      >
        <input
          type="text"
          placeholder="Search for a course material or past question e.g 'MEE 309'..."
          className=" w-full  bg-transparent px-4 py-2 outline-none"
          onFocus={() => setSearchOutline(true)}
          value={searchValue}
          onChange={(e) => handleSearchValue(e)}
        />
        <div className="h-full w-[25%] flex justify-between items-center">
          <button
            onClick={handleSearch}
            className="px-1 py-2 h-full w-full flex justify-center"
          >
            <FaSearch className="" />
          </button>
          <button
            onClick={handleFilterOpen}
            className="px-1 py-2 w-full flex justify-center cursor-pointer"
          >
            <FaFilter />
          </button>
        </div>
      </div>
      {filterOpen && (
        <div className="relative z-30 w-full mt-3">
          <div className="sticky min-h-[80vh] top-0 left-0 w-full border-[1px] border-stone-700 px-5 py-2 rounded-md">
            <div className="my-5 md:w-[20%] w-full">
              <button
                onClick={handleFilterSave}
                className="w-full p-2 rounded-md bg-lime-500 text-black font-bold "
              >
                Save options
              </button>
            </div>
            <div className="flex w-full lg:justify-start border-red-200">
              <div className="relative w-[50%] lg:w-[20%]  ">
                <div className=" flex mb-2 items-center bg-stone-950 rounded-md">
                  <button
                    className="flex justify-between items-center text-xs lg:text-sm p-3 w-full "
                    onClick={() => setSelectLevel(!selectLevel)}
                  >
                    <span>Level </span>
                    <FaAngleDown />
                  </button>
                </div>
                <div className="">
                  {selectLevel ? (
                    <div className="absolute w-full bg-stone-950 p-3">
                      {levels.map((level) => {
                        const { title } = level;

                        return (
                          <button
                            key={level.id}
                            onClick={() => {
                              handleLevelClick(title);
                              setActiveLevel(title);
                            }}
                            className={` ${
                              activeLevel === title
                                ? "bg-lime-500"
                                : "border-b-2 border-b-stone-900"
                            } w-full p-2 text-xs my-1`}
                          >
                            {title}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="relative w-[50%] lg:w-[20%] ml-2">
                <div className=" flex mb-2 items-center bg-stone-950 rounded-md">
                  <button
                    className="flex justify-between items-center text-xs lg:text-sm p-3 w-full"
                    onClick={() => setSelectDepartment(!selectDepartment)}
                  >
                    <span>Department</span>
                    <FaAngleDown />
                  </button>
                </div>
                <div className="">
                  {selectDepartment ? (
                    <div className="absolute w-full bg-stone-950 p-3">
                      {departments.map((department) => {
                        const { title } = department;
                        return (
                          <button
                            key={department.id}
                            onClick={() => {
                              handleDepartmentClick(title);
                              setActiveDepartment(title);
                            }}
                            className={` ${
                              activeDepartment === title
                                ? "bg-lime-500"
                                : "border-b-2 border-b-stone-900"
                            } w-full p-2 text-xs my-1`}
                          >
                            {title}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <Suspense fallback="loading..">
              <SearchResults data={searchData} />
            </Suspense>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
