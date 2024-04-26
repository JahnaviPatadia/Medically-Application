import react, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdOutlinePreview } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdOutlineSystemUpdate } from "react-icons/md";
import UpdatePatient from "./UpdatePatient";
import ModalComponent from "../../components/ModalComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import ViewPatient from "./ViewPatient";

const PatientList = ({ data }) => {
  const [show, setShow] = useState(false);
  const [selectedPatientId, setSelectedPatiendId] = useState(null);
  const [selectedModal, setSelectedModal] = useState(null);
  const navigate = useNavigate();

  const handleView = (id) => {
    setSelectedPatiendId(id);
    setSelectedModal("view");
    setShow(true);
  };

  const handleUpdatedClick = (id) => {
    setSelectedPatiendId(id);
    setSelectedModal("update");
    setShow(true);
  };

  const deletePatient = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "you won't to able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085D6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });
      if (result.isConfirmed) {
        if (id) {
          const response = await axios.delete(
            `http://localhost:3001/api/user/patient/${id}`
          );

          if (response?.data?.code === 200) {
            toast.success(response.data.message);
          } else {
            toast.error(response.data.message);
          }
        }
      }
    } catch (error) {
      console.log("Something went wrong!!", error);
    }
  };

  return (
    <div className="relative  overflow-x-auto shadow-md sm:rounded-lg">
      <table className="mx-4 w-[84vw] mt-8 px-16 border-spacing-x-2  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className=" text-xs text-gray-700 uppercase  text-black dark:border-gray-700">
          <tr className="bg-[#E2F3F2]">
            <th scope="col" className="px-6 py-3">
              Sr.No
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            {/* <th scope="col" className="px-6 py-3">
              Role
            </th> */}
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-20 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr className="bg-white border-b font-medium dark:border-gray-700 text-black hover:bg-gray-50">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                {index + 1}
              </th>
              <td className="px-6 py-4">{data.firstname}</td>

              <td className="px-6 py-4">{data.email}</td>
              {/* <td className="px-6 py-4">{data.role}</td> */}
              <td className="px-6 py-4">{data.userStatus}</td>
              <td className="flex gap-8 mt-2 pl-10">
                <button
                  onClick={() => handleView(data._id)}
                  className="border-2 text-lg  hovor:bg-[#3d2f2f] "
                >
                  <MdOutlinePreview />
                </button>
                <button
                  onClick={() => handleUpdatedClick(data._id)}
                  type="button"
                  className="border-2  text-lg hovor:bg-[#3d2f2f]"
                >
                  <MdOutlineSystemUpdate />
                </button>
                <button
                  onClick={() => deletePatient(data._id)}
                  className="border-2 text-lg"
                >
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalComponent isOpen={show} closeModal={() => setShow(false)}>
        {selectedModal === "view" && <ViewPatient id={selectedPatientId} />}
        {selectedModal === "update" && (
          <UpdatePatient
            closeModal={() => setShow(false)}
            id={selectedPatientId}
          />
        )}
      </ModalComponent>
    </div>
  );
};

export default PatientList;
