import React, { useEffect, useState } from "react";
import Search from "../../components/Search";
import DoctorCard from "../../components/DoctorCard";
import DropDown from "../../components/DropDown";
import axios from "axios";

import image1 from "../../assests/images/d1.png";
import image2 from "../../assests/images/d7.png";
import image3 from "../../assests/images/d3.png";
import image4 from "../../assests/images/d4.png";
import image5 from "../../assests/images/d5.png";
import image6 from "../../assests/images/d6.png";
import SearchBar from "../../Admin/components/SearchBar";
import useDebounce from "../../hooks/useDebounce";
import { useImmer } from "use-immer";
import ReactPaginate from "react-paginate";
import { useLocation, useNavigate } from "react-router-dom";

const DoctorList = () => {
  const [data, setData] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 2000);
  const [filterData, setFilterData] = useImmer({
    totalPages: 1,
    currentPage: 1,
    pageSize: 10,
  });

  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location.pathname());

  const fetchData = async (search) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/getUsers?role=Doctor&search=${search}&page=${filterData.currentPage}&limit=${filterData.pageSize}`
      );
      setData(response?.data.data);
      console.log(response?.data?.data);
    } catch (error) {
      console.log("Internal Server Error");
    }
  };

  const handlePageClick = (selectedPage) => {
    setFilterData((draft) => {
      draft.currentPage = selectedPage.selected + 1;
    });
  };

  const handlePageSizeChange = (selectedOption) => {
    if (selectedOption) {
      setFilterData((draft) => {
        draft.pageSize = selectedOption.value;
        draft.currentPage = 1;
      });
    } else {
      setFilterData((draft) => {
        draft.pageSize = 10;
        draft.currentPage = 1;
      });
    }
  };

  useEffect(() => {
    fetchData(debouncedSearchQuery);
  }, [debouncedSearchQuery]);

  const options = [
    { value: "Dermatologies", label: "Dermatologies" },
    { value: "Immunologies", label: "Immunologies" },
    { value: "Cardiologist", label: "Cardiologist" },
    { value: "Hematologists", label: "Hematologists" },
    { value: "ENT", label: "ENT" },
    { value: "Dentist", label: "Dentist" },
  ];

  const [search, setSearch] = useState("");
  // const [filteredData, setFilteredData] = useState(data);
  const [selectedOption, setSelectedOption] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    filterData(e.target.value, selectedOption);
  };

  const handleDropDownChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    filterData(search, selectedOption);
  };

  return (
    <>
      <div className="flex  mt-8 item-center justify-end ml-32 mr-8 gap-8 ">
        <div className="w-80  ">
          <DropDown
            options={options}
            selectedOption={selectedOption}
            // setData={setFilteredData}
          />
        </div>

        <div className="w-80">
          <SearchBar
            value={searchQuery}
            onChange={(e) => setSearchQuery(e?.target?.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 text-center">
        {data?.map((data, index) => (
          <DoctorCard
            key={index}
            data={data}
            // image={data?.image}
            // name={data?.firstname + " " + data?.lastname}
            // specialist={data?.specialization}
            // experience={data?.experience}
            // age={data?.age}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <ReactPaginate
          className="flex gap-4 "
          breakLabel="..."
          pageCount={filterData.totalPages}
          renderOnZeroPageCount={0}
          pageRangeDisplayed={1}
          marginPagesDisplayed={1}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    </>
  );
};

export default DoctorList;
