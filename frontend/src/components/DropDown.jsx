import React from "react";
import Select from "react-select";

const DropDown = ({ options, selectedOption, setData }) => {
  const handleSelect = (selectedOption) => {
    const filteredData = options.filter(
      (item) => item.value.toLowerCase() === selectedOption.value.toLowerCase()
    );
    setData(filteredData);
  };

  return (
    <div className="w-full shadow dropdown">
      <Select
        value={selectedOption}
        onChange={handleSelect}
        options={options}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: "#e2f3f2",
            primary: "#005c69",
          },
        })}
      />
    </div>
  );
};

export default DropDown;
