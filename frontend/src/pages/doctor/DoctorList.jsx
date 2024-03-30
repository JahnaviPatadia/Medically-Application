import React, { useState } from "react";
import Search from "../../components/Search";
import DoctorCard from "../../components/DoctorCard";

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
      specialist: "Gynecologist",
      experience: "6 Years",
      age: "36 Years",
    },
  ];

  const [search, setSearch] = useState("");
  const handleSearchChanges = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = carddata.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  console.log(filteredData);

  function Dropdown() {
    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (Event) => {
      const handleChange = (Event) => {
        setSelectedOption(Event.target.value);
      };
    };
  }

  return (
    <>
      <div className="flex">
        <Search value={search} onChange={handleSearchChanges} />
        <div className="mt-8">
          <labe className="dropdown pl-28 mr-4 mt-4 ">Categories</labe>
          <select
            className="border border-inheri hover:bg-sky-700 cursor-pointer"
            id="dropdown"
          >
            <option value="Dermatologies">Dermatologies</option>
            <option value="Immunologies">Immunologies</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Hematologist">Hematologist</option>
            <option value="Gaynecologist">Gaynecologist</option>
            <option value="Dentist">Dentist</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-3 text-center">
        {filteredData.map((data, index) => (
          <DoctorCard
            key={index} // Add key prop here
            image={data.image}
            name={data.name}
            specialist={data.specialist}
            experience={data.experience}
            age={data.age}
          />
        ))}
      </div>
    </>
  );
};

export default DoctorList;
