import React from "react";
import DoctorList from "./DoctorList";
import axios from "axios";
import SearchBar from "../../components/SearchBar";
// import Footer from "./Footer";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Select from "react-select";
import ModalComponent from "../../components/ModalComponent";
import AddDoctor from "./AddDoctor";
import useDebounce from "../../../hooks/useDebounce";
import { useImmer } from "use-immer";
import ReactPaginate from "react-paginate";

const Doctor = () => {
  const [show, setShow] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const debouncedSearchQuery = useDebounce(searchQuery, 2000);

  const [filterData, setFilterData] = useImmer({
    totalPages: 1,
    currentPages: 1,
    pageSizer: 3,
  });

  const fetchData = async (search) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/users?role=Doctor&search=${search}&page=${filterData.currentPage}&limit=${filterData.pageSize}`
      );

      if (response && response?.data) {
        setTableData(response.data.data);
        setFilterData((draft) => {
          draft.totalPages = response?.data?.pagination?.totalPages;
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(debouncedSearchQuery);
  }, [filterData, debouncedSearchQuery]);

  const handlePageClick = (selectedPage) => {
    setFilterData((draft) => {
      draft.currentPages = selectedPage.selected + 1;
    });
  };

  const handlePageSizeChange = (selectedOption) => {
    if (selectedOption) {
      setFilterData((draft) => {
        draft.pageSize = selectedOption.value;
        draft.currentPages = 1;
      });
    } else {
      setFilterData((draft) => {
        draft.pageSize = 3;
        draft.currentPage = 1;
      });
    }
  };

  const statusOptions = [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ];

  return (
    <section className="">
      <div className="site-container ">
        <Header />
        <div className="flex justify-end items-center  gap-4  m-4">
          <Select
            className="shadow "
            id="status"
            name="status"
            // value={statusOptions.find(
            //   (options) => options.value === userStatus
            // )}
            // onChange={(e) => {
            //   setUserStatus(e.value);
            // }}
            isClearable
            options={statusOptions}
          />
          <SearchBar
            value={searchQuery}
            onChange={(e) => setSearchQuery(e?.target?.value)}
          />
          <button
            onClick={() => setShow(true)}
            type="button"
            className="rounded p-2 text-sm font-medium text-gray-9 bg-[#E2F3F2] dark:hover:text-white dark:hover:bg-gray-700"
          >
            Add
          </button>
        </div>

        <DoctorList data={tableData} />

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
      <ModalComponent isOpen={show} closeModal={() => setShow(false)}>
        <AddDoctor />
      </ModalComponent>
    </section>
  );
};

export default Doctor;
