import React, { useEffect, useState } from "react";
import logo from "../../../assests/images/logo.jpg";
import { useFormik, ErrorMessage, FormikProvider } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Select from "react-select";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdCleaningServices } from "react-icons/md";

const initialValues = {
  role: "Doctor",
  firstname: "",
  lastname: "",
  degree: "",
  experience: "",
  specialization: "",
  phoneno: "",
  gender: "",
  userStatus: "",
};

const SignupSchema = Yup.object({
  firstname: Yup.string().required("Please enter your first name"),
  lastname: Yup.string().required("Please enter your last name"),
  phoneno: Yup.string().required("Please enter your contact no"),
  gender: Yup.string().required("Please enter your gender"),
  degree: Yup.string().required("Please enter your degree"),
  experience: Yup.string().required("Please enter your experience"),
  specialization: Yup.string().required("Please enter your specialization"),
  userStatus: Yup.string().required("Please enter your status"),
});

const statusOptions = [
  { value: "Active", label: "Active" },
  { value: "Inactive", label: "Inactive" },
];

const UpdateDoctor = ({ id, closeModal }) => {
  const [userStatus, setUserStatus] = useState([]);
  const [userData, setUserData] = useState(initialValues);

  const formik = useFormik({
    initialValues: userData,
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      try {
        values = { ...values, userStatus };
        const response = await axios.put(
          `http://localhost:3001/api/user/doctor/${id}`,
          values
        );
        console.log(response);
        if (response.data.code === 200) {
          setUserData(response.data.message);
          toast.success("User information updated successfully");
        } else {
          toast.error(response.data.message);
        }
        closeModal();
      } catch (error) {
        console.error("Error:", error.response.data);
        toast.error(
          "Failed to update user information. Please try again later."
        );
      }
    },
  });

  const fetchDoctorData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/user/doctor/${id}`
      );
      console.log(response);
      formik.setValues(response?.data?.data);
    } catch (error) {
      console.error("Error:", error.response.data);
    }
  };

  useEffect(() => {
    fetchDoctorData();
  }, [id]);

  //   console.log(formik?.values);

  return (
    <FormikProvider value={formik}>
      <div className="flex justify-center items-center">
        <div className="z-10 bg-white max-w-md w-full p-6 my-6">
          {/* <div className="border-b-2 border border-[#d0d5dd] mb-1"> */}
          <form className="signupform" onSubmit={formik.handleSubmit}>
            <label className="font-medium">First Name</label>
            <br />
            <input
              type="text"
              placeholder="Enter Your First Name"
              className="shadow appearance-none border w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="firstname"
              id="firstname"
              value={formik.values.firstname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="text-red-600">
              <ErrorMessage name="firstname" />
            </div>

            <br />
            <label className="font-medium">Last Name</label>
            <br />
            <input
              type="text"
              placeholder="Enter Your Last Name"
              className="shadow appearance-none border w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="lastname"
              id="lastname"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="text-red-600">
              <ErrorMessage name="lastname" />
            </div>

            <br />
            <label className="font-medium">Degree</label>
            <br />
            <input
              type="text"
              placeholder="Enter Your Degree"
              className="shadow appearance-none border w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="degree"
              id="degree"
              value={formik.values.degree}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="text-red-600">
              <ErrorMessage name="degree" />
            </div>

            <br />
            <label className="font-medium">Experience</label>
            <br />
            <input
              type="text"
              placeholder="Enter Your Experience"
              className="shadow appearance-none border w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="experience"
              id="experience"
              value={formik.values.experience}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="text-red-600">
              <ErrorMessage name="experience" />
            </div>

            <br />
            <label className="font-medium">Specialization</label>
            <br />
            <input
              type="text"
              placeholder="Enter Your Specialization"
              className="shadow appearance-none border w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="specialization"
              id="specialization"
              value={formik.values.specialization}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="text-red-600">
              <ErrorMessage name="specialization" />
            </div>

            <br />
            <label className="font-medium">Contact No</label>
            <br />
            <input
              type="text"
              placeholder="Enter Your Contact Number"
              className="shadow appearance-none border w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="phoneno"
              id="phoneno"
              value={formik.values.phoneno}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="text-red-600">
              <ErrorMessage name="phoneno" />
            </div>

            <br />
            <label className=" font-medium">Select Your Gender</label>
            <div className="ml-8 ">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik?.values?.gender === "male"}
                />
                <span className="ml-2">Male</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik?.values?.gender === "female"}
                />
                <span className="ml-2">Female</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik?.values?.gender === "other"}
                />
                <span className="ml-2">Other</span>
              </label>
            </div>
            <br />
            <div className="mt-6">
              <label className="font-medium">Select Status</label>
              <Select
                className="shadow w-[20vw] mt-2"
                id="userStatus"
                name="userStatus"
                value={statusOptions?.find(
                  (options) => options?.value === userStatus
                )}
                onChange={(e) => {
                  setUserStatus(e.value);
                }}
                isClearable
                options={statusOptions}
              />
            </div>
            <div className="flex justify-end">
              <button
                className=" cursor-pointer border-0 outline-0 mt-4 w-20 py-2 mr-2  bg-[#005c69] text-white font-bold"
                type="submit"
              >
                Update
              </button>
              <button
                className=" cursor-pointer border-0 outline-0 mt-4 w-20 py-2 ml-2  bg-[#005c69] text-white font-bold"
                type="button"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </FormikProvider>
  );
};

export default UpdateDoctor;
