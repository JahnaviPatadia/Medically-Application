import React from "react";

const Search = ({ handleSearch }) => {
  return (
    <div>
      <input
        type="Search"
        placeholder="Search Your Doctor"
        onChange={handleSearch}
        className="border-2 outline-none w-96 ml-20  p-1 border-0 shadow "
      />
    </div>
  );
};

export default Search;
