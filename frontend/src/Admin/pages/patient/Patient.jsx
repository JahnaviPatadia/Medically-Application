import PatientList from "./PatientList";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../../components/SearchBar";
import Footer from "./Footer";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import ModalComponent from "../../components/ModalComponent";
import AddPatient from "./AddPatient";
import { object } from "yup";
import Select from "react-select";
import useDebounce from "../../../hooks/useDebounce";

const Patient = () => {
  const [show, setShow] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [userStatus, setUserStatus] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const debouncedSearchQuery = useDebounce(searchQuery, 2000);

  const fetchData = async (search) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/users?role=Patient&search=${search}`
      );
      setTableData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
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
      </div>
      <Footer />
      <ModalComponent isOpen={show} closeModal={() => setShow(false)}>
        <AddPatient />
      </ModalComponent>
    </section>
  );
};

export default Patient;
