import PatientList from "./PatientList";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../../components/SearchBar";
import Footer from "./Footer";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import ModalComponent from "../../components/ModalComponent";
import AddPatient from "./AddPatient";
import Select from "react-select";
import useDebounce from "../../../hooks/useDebounce";
import { useImmer } from "use-immer";
import ReactPaginate from "react-paginate";
import { setLocale } from "yup";
import Loader from "../../../components/Common/Loader";

const Patient = () => {
  const [loader, setLoader] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const [show, setShow] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [userStatus, setUserStatus] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterData, setFilterData] = useImmer({
    totalPages: 1,
    currentPage: 1,
    pageSize: 5,
    status: "",
  });
  const navigate = useNavigate();

  const debouncedSearchQuery = useDebounce(searchQuery, 2000);

  const fetchData = async (search) => {
    try {
      setLoader(true);
      const response = await axios.get(
        `http://localhost:3001/api/getUsers?role=Patient&search=${search}&page=${filterData.currentPage}&status=${filterData.status}&limit=${filterData.pageSize}`
      );
      console.log(response.data.data);
      if (response && response?.data) setTableData(response.data.data);
      setFilterData((draft) => {
        draft.totalPages = response?.data?.pagination?.totalPages;
      });
      setLoader(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoader(false);
    }
  };

  const handlePageClick = (selectedPage) => {
    setFilterData((draft) => {
      draft.currentPage = selectedPage.selected + 1;
    });
  };

  const handleStatusChange = (selectedOption) => {
    if (selectedOption) {
      setFilterData((draft) => {
        draft.status = selectedOption.value;
        draft.currentPage = 1;
      });
    } else {
      setFilterData((draft) => {
        draft.status = "";
        draft.pageSize = 5;
        draft.currentPage = 1;
      });
    }
  };

  const handlePageSizeChange = (selectedOption) => {
    if (selectedOption) {
      setFilterData((draft) => {
        draft.pageSize = selectedOption.value;
        draft.currentPage = 1;
      });
    } else {
      setFilterData((draft) => {
        // draft.status = "";
        draft.pageSize = 5;
        draft.currentPage = 1;
      });
    }
  };

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      fetchData(debouncedSearchQuery);
      setLoader(false);
    }, 2000);
  }, [filterData, debouncedSearchQuery]);

  const handleSubmit = () => {
    //code
  };

  const statusOptions = [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ];

  const dataOptions = [
    { value: "5", label: "5" },
    { value: "10", label: "10" },
    { value: "15", label: "15" },
    { value: "20", label: "20" },
  ];

  // const handleChange = (selectedOption) => {
  //   setSelectedOption(selectedOption);
  //   handleFilterChange(selectedOption);
  // };

  return (
    <>
      {loader && <Loader />}
      <section className="  ">
        <div className="site-container">
          <Header />
          <div className="flex justify-end items-center gap-4 my-4 mx-8">
            {/* <div className="text-center border rounded shadow ">
            <input
              type="text"
              placeholder="Search"
              // value={query}
              // onChange={handledInputChange}
            />
          </div> */}

            <Select
              className="shadow w-[20vw]"
              id="userStatus"
              name="userStatus"
              // value={statusOptions.find(
              //   (options) => options.value === userStatus
              // )}
              onChange={handleStatusChange}
              isClearable
              options={statusOptions}
            />

            <SearchBar
              value={searchQuery}
              onChange={(e) => setSearchQuery(e?.target?.value)}
            />

            <Select
              className="shadow w-[20vw]"
              id="userStatus"
              name="userStatus"
              // value={statusOptions.find(
              //   (options) => options.value === userStatus
              // )}
              onChange={handlePageSizeChange}
              isClearable
              options={dataOptions}
            />

            <div>
              <button
                onClick={() => setShow(true)}
                type="button"
                className="rounded p-2 text-sm font-medium text-gray-9 bg-[#E2F3F2] dark:hover:text-white dark:hover:bg-gray-700"
              >
                Add Patient
              </button>
            </div>
          </div>
          <PatientList data={tableData} />
          <div className="pt-4 pl-4 flex justify-end mr-8">
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
        </div>
        <Footer />
        <ModalComponent isOpen={show} closeModal={() => setShow(false)}>
          <AddPatient closeModal={() => setShow(false)} />
        </ModalComponent>
      </section>
    </>
  );
};

export default Patient;
