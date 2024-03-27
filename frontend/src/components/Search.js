import React from "react";

const Search = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="Search"
        placeholder="Search Your Doctor"
        value={value}
        onChange={onChange}
        className="border-2 outline-none w-96 ml-20 mt-5 p-1 border-0 shadow "
      />
    </div>
  );
};

export default Search;
