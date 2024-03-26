import React from "react";

const Search = () => {
  return (
    <div>
      <p className="font-medium text-xl  mt-3 px-20">Find Your Doctor Here </p>
      <input
        type="Search"
        placeholder="Search"
        className="border-2 outline-none px-8 w-96 ml-20 mt-3 p-2 pr-40 border-0 shadow "
      />
      <button className="p-6 bg-[#005c69] py-2 px-5 ml-4 text-white text-center">
        Search
      </button>
    </div>
  );
};

export default Search;
