import React, { useState } from "react";
import Search from "../../components/Search";
import DoctorCard from "../../components/DoctorCard";
import DropDown from "../../components/DropDown";

import image1 from "../../assests/images/d1.png";
import image2 from "../../assests/images/d7.png";
import image3 from "../../assests/images/d3.png";
import image4 from "../../assests/images/d4.png";
import image5 from "../../assests/images/d5.png";
import image6 from "../../assests/images/d6.png";

const DoctorList = () => {
  const carddata = [
    {
      image: image1,
      name: "Willion Peterson",
      specialist: "Dermatologies",
      experience: "25 Years",
      age: "55 Years",
    },
    {
      image: image2,
      name: "Lalit Kumar",
      specialist: "Immunologies",
      experience: "18 Years",
      age: "45 Years",
    },
    {
      image: image3,
      name: "Emma Watson",
      specialist: "Dermatologies",
      experience: "30 Years",
      age: "55 Years",
    },
    {
      image: image4,
      name: "Elna Michael",
      specialist: "Cardiologist",
      experience: "5 Years",
      age: "35 Years",
    },
    {
      image: image5,
      name: "Kane Robert",
      specialist: "Hematologists",
      experience: "13 Years",
      age: "38 Years",
    },
    {
      image: image6,
      name: "Reena Kumari",
      specialist: "ENT",
      experience: "6 Years",
      age: "36 Years",
    },
  ];

  const options = [
    { value: "Dermatologies", label: "Dermatologies" },
    { value: "Immunologies", label: "Immunologies" },
    { value: "Cardiologist", label: "Cardiologist" },
    { value: "Hematologists", label: "Hematologists" },
    { value: "ENT", label: "ENT" },
    { value: "Dentist", label: "Dentist" },
  ];

  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(carddata);
  const [selectedOption, setSelectedOption] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    filterData(e.target.value, selectedOption);
  };

  const handleDropDownChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    filterData(search, selectedOption);
  };

  const filterData = (search, selectedOption) => {
    let filtered = carddata;

    // Filter by search input
    if (search) {
      filtered = filtered?.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.specialist.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by dropdown selection

    if (selectedOption && selectedOption.value !== "") {
      filtered = filtered?.filter(
        (item) => item.specialist === selectedOption.value
      );
    }
    setFilteredData(filtered);
  };

  return (
    <>
      <div className="flex mt-8 item-center justify-around mx-32 gap-16">
        <DropDown
          options={options}
          selectedOption={selectedOption}
          setData={setFilteredData}
        />
        <Search handleSearch={handleSearch} />
      </div>
      <div className="grid grid-cols-3 text-center">
        {filteredData?.map((data, index) => (
          <DoctorCard
            key={index}
            image={data?.image}
            name={data?.name}
            specialist={data?.specialist}
            experience={data?.experience}
            age={data?.age}
          />
        ))}
      </div>
    </>
  );
};

export default DoctorList;
