"use client";

import React, { useEffect, useState } from "react";
import { departments, levels } from "@/utils/constants";
import { FaSearch } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";
import { Asul } from "next/font/google";
import axios from "axios";

const SearchBox = () => {
  const [filterOpen, setFilterOpen] = useState(true);
  const [searchOutline, setSearchOutline] = useState(false);

  const [searchLevel, setLevel] = useState("");
  const [searchDepartment, setDepartment] = useState("");
  const [activeLevel, setActiveLevel] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [activeDepartment, setActiveDepartment] = useState("");
  const [initializeSearch, setInitializeSearch] = useState(false);

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
    if (!searchValue) {
      return;
    } else {
      const url = `http://localhost:3001/api/fetchMaterials`;
      console.log(url);
      let { data } = await axios.get(url, {
        params: {
          searchValue: searchValue || "",
          searchDepartment: searchDepartment || "",
          searchLevel: searchLevel || "",
        },
      });

      console.log(data);
    }
  };

  const handleFilterSave = async () => {
    console.log(searchLevel, searchDepartment, activeDepartment, activeLevel);

    console.log(searchValue);

    if (!searchValue && !searchDepartment && searchLevel) {
      return;
    }

    const query = new URLSearchParams({
      searchValue,
      searchDepartment,
      searchLevel,
    }).toString();

    const url = `http://localhost:3001/api/fetchMaterials`;
    console.log(url);
    let { data } = await axios.get(url, {
      params: {
        searchValue: searchValue || "",
        searchDepartment: searchDepartment || "",
        searchLevel: searchLevel || "",
      },
    });

    console.log(data);
  };

  return (
    <div className="flex flex-col items-center w-full lg:min-w-[35em]">
      <div className=" bg-lime-500"></div>
      <div
        className={`${
          searchOutline == true
            ? "border-[2px] border-solid border-stone-800"
            : ""
        } rounded-md w-full bg-stone-950 flex justify-between items-center py-1 `}
      >
        <input
          type="text"
          placeholder="Search for a course material or past question e.g 'MEE 309'..."
          className="w-[75%]  bg-transparent px-4 py-2 outline-none"
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
        <div className="relative z-30 w-full mt-3 px-3">
          <div className="absolute h-[80vh] top-0 left-0 w-full bg-stone-950 px-5 py-2 rounded-md">
            <div className="flex flex-col rounded-md p-3">
              <label htmlFor="selectLevel" className="text-center mb-2">
                Select Level
              </label>
              <div className="grid grid-cols-2 gap-2" id="selectLevel">
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
                        activeLevel === title ? "bg-lime-500" : "bg-stone-900"
                      } w-full p-2 text-xs  rounded-md `}
                    >
                      {title}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col mt-3 rounded-md p-3 ">
              <label htmlFor="selectDepartment" className="text-center mb-2">
                Select Departement
              </label>
              <div className="flex flex-col " id="selectDepartment">
                {departments.map((department) => {
                  const { title } = department;
                  return (
                    <button
                      key={department.id}
                      onClick={() => {
                        handleDepartmentClick(title);
                      }}
                      className={`${
                        activeDepartment == title
                          ? "bg-lime-500"
                          : "bg-stone-900"
                      } w-full p-2 text-xs  rounded-md my-1`}
                    >
                      {title}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-3">
              <button
                onClick={handleFilterSave}
                className="w-full p-2 rounded-md bg-lime-500 text-black font-bold"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
