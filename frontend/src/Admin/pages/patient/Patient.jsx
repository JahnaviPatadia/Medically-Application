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

const Patient = () => {
  const [show, setShow] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [userStatus, setUserStatus] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterData, setFilterData] = useImmer({
    totalPages: 1,
    currentPage: 1,
    pageSize: 3,
  });
  const navigate = useNavigate();

  const debouncedSearchQuery = useDebounce(searchQuery, 2000);

  const fetchData = async (search) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/users?role=Patient&search=${search}&page=${filterData.currentPage}&limit=${filterData.pageSize}`
      );
      console.log(response.data.data);
      setTableData(response.data.data);
      setFilterData((draft) => {
        draft.totalPages = response?.data?.pagination?.totalPages;
      });
    } catch (error) {
      console.error("Error fetching data:", error);
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
        draft.pageSize = 3;
        draft.currentPage = 1;
      });
    }
  };

  useEffect(() => {
    fetchData(debouncedSearchQuery);
  }, [debouncedSearchQuery]);

  const handleSubmit = () => {
    //code
  };

  const statusOptions = [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ];

  return (
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
            value={statusOptions.find(
              (options) => options.value === userStatus
            )}
            onChange={(e) => {
              setUserStatus(e.value);
            }}
            isClearable
            options={statusOptions}
          />

          <SearchBar
            value={searchQuery}
            onChange={(e) => setSearchQuery(e?.target?.value)}
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
        <div className="pt-4 pl-4">
          <ReactPaginate
            className="flex gap-4 text-right"
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
  );
};

export default Patient;
