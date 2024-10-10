import React from 'react'

const SearchBox = () => {
  return (
    <div className=" rounded-md w-full lg:min-w-[35em] bg-stone-950 flex justify-between">
        <input type="text" placeholder="Search for a course material or past question e.g 'MEE 309'..." className="w-[85%]  bg-transparent px-4 py-2" />
        <div className="h-full  "><button className="bg-lime-400 h-full p-2 rounded-tr-md rounded-bl-md">Search</button></div>
        </div>
  )
}

export default SearchBox