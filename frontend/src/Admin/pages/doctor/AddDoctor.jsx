import React from "react";
import logo from "../../../assests/images/logo.jpg";
import { useFormik, ErrorMessage, FormikProvider } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import Select from "react-select";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const initialValues = {
  role: "Doctor",
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  phoneno: "",
  confirmPassword: "",
  gender: "",
  degree: "",
  experience: "",
  specialization: "",
};

const statusOptions = [
  { value: "Active", label: "Active" },
  { value: "Inactive", label: "Inactive" },
];

const SignupSchema = Yup.object({
  email: Yup.string()
    .email("Invalid Email")
    .required("Please enter your email"),
  password: Yup.string()
    .required("Password is Required!")
    .min(6, "Password should be 6 chars minimum.")
    .max(16, "Password should be 16 chars maximum.")
    .matches(/[a-zA-Z]/, "Password should contain at least one character")
    .matches(/[0-9]/, "Password should contain Numbers")
    .matches(/[^\w]/, "Password requires a symbol"),
  confirmPassword: Yup.string()
    .required("Confirm Password is Required!")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  firstname: Yup.string().required("Please enter your firstname"),
  lastname: Yup.string().required("Please enter your lastname"),
  phoneno: Yup.string().required("Please enter your contact number"),
  gender: Yup.string().required("Please enter your gender"),
  degree: Yup.string().required("Please enter your degree"),
  experience: Yup.string().required("Please enter your experience"),
  specialization: Yup.string().required("Please enter your specialization"),
});

const AddDoctor = ({ closeModal }) => {
  const navigate = useNavigate();
  const [userStatus, setUserStatus] = useState(null);
  const [showPassword, setShowPassword] = useState();
  const [showConfirmPassword, setShowConfirmPassword] = useState();
  const _numberRegex_ = /^[0-9]+$/;

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: SignupSchema,

    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "http://localhost:3001/api/sign-up",
          values
        );
        console.log(response);
        if (response.data.data === 200) {
          toast.success(response.data.message);
          navigate("/admin/dashboard/doctor");
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.error("Error:", error.response.data);
        toast.error("Failed to sign up. Please try again later.");
      }
    },
  });

  console.log(formik.errors);

  return (
    <FormikProvider value={formik}>
      <div className="flex justify-center items-center min-h-screen">
        <div className="z-10 bg-white max-w-md w-full p-6 my-6">
          <form className="signupform" onSubmit={formik.handleSubmit}>
            <label className="font-medium pl-2">First Name</label>
            <br />
            <input
              type="text"
              placeholder="Enter Your First Name"
              className="shadow appearance-none border w-full m-2 py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="firstname"
              id="firstname"
              value={formik.values.firstname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <br />
            <div className="text-red-600 pl-2">
              <ErrorMessage name="firstname " />
            </div>

            <br />
            <label className="font-medium pl-2">Last Name</label>
            <br />
            <input
              type="text"
              placeholder="Enter Your Last Name"
              className="shadow appearance-none border w-full m-2 py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="lastname"
              id="lastname"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <div className="text-red-600 pl-2">
              <ErrorMessage name="lastname " />
            </div>

            <br />
            <label className="font-medium pl-2">Email</label>
            <br />
            <input
              type="text"
              placeholder="Enter Your Email"
              className="shadow appearance-none border m-2 w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <div className="text-red-600 pl-2">
              <ErrorMessage name="email" />
            </div>

            <br />

            <label className="font-medium pl-2">Password</label>
            <br />
            <div className="flex justify-center items-center">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                className="shadow appearance-none border m-2 w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="password"
                id="password"
                // value={formik.values.password}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                maxLength={15}
                onChange={(e) => {
                  formik.setFieldValue("password", e?.target?.value);
                }}
                value={formik.values.password}
                onBlur={(e) => {
                  let fieldName = e?.target?.name;
                  formik.setFieldValue(
                    fieldName,
                    formik.values[fieldName]?.trim()
                  );
                }}
              />
              {showPassword ? (
                <FaRegEye
                  className="cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                />
              ) : (
                <FaRegEyeSlash
                  className="cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                />
              )}
            </div>

            <div className="text-red-600 pl-2">
              <ErrorMessage name="password" />
            </div>

            <br />
            <label className="font-medium pl-2">Confirm Password</label>
            <br />
            <div className="flex justify-center items-center">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Enter Your Confirm Password"
                className="shadow appearance-none border w-full m-2 py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="confirmPassword"
                id="confirmPassword"
                // value={formik.values.confirmpassword}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                max={15}
                onChange={(e) => {
                  formik.setFieldValue("confirmPassword", e?.target?.value);
                }}
                value={formik.values.confirmPassword}
                onBlur={(e) => {
                  let fieldName = e?.target?.name;
                  formik.setFieldValue(
                    fieldName,
                    formik.values[fieldName]?.trim()
                  );
                }}
              />
              {showConfirmPassword ? (
                <FaRegEye
                  className="cursor-pointer"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                />
              ) : (
                <FaRegEyeSlash
                  className="cursor-pointer"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                />
              )}
            </div>
            <div className="text-red-600 pl-2">
              <ErrorMessage name="confirmPassword" />
            </div>

            <br />
            <label className="font-medium pl-2">Select Your Gender</label>
            <div className="ml-8 mt-2 ">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.gender === "male"}
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
                  checked={formik.values.gender === "female"}
                />
                <span className="ml-2">Female</span>
              </label>
              <label className="inline-flex item-center ml-4 ">
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.gender === "other"}
                />
                <span className="ml-2">Other</span>
              </label>
            </div>

            <br />
            <label className="font-medium pl-2">Contact Number</label>
            <br />
            <input
              type="text"
              placeholder="Enter Your Contact Number"
              className="shadow appearance-none border m-2 w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="phoneno"
              id="phoneno"
              maxLength={10}
              // value={formik.values.phoneno}
              // onBlur={formik.handleBlur}
              onChange={(e) => {
                let inputValue = e?.target?.value;
                let isValid = _numberRegex_.test(inputValue);
                let fieldName = e?.target?.name;
                if (isValid || !inputValue) {
                  formik.setFieldValue([fieldName], inputValue);
                }
              }}
              value={formik.values.phoneno}
              onBlur={(e) => {
                let fieldName = e?.target?.name;
                formik.setFieldValue(
                  fieldName,
                  formik.values[fieldName]?.trim()
                );
              }}
            />
            <div className="text-red-600 pl-2">
              <ErrorMessage name="phoneno" />
            </div>

            <br />
            <label className="font-medium pl-2">Degree</label>
            <br />
            <input
              type="text"
              placeholder="Enter Your Degree"
              className="shadow appearance-none border m-2 w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="degree"
              id="degree"
              value={formik.values.degree}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="text-red-600 pl-2">
              <ErrorMessage name="degree" />
            </div>
            <br />
            <label className="font-medium pl-2">Specialization</label>
            <br />
            <input
              type="text"
              placeholder="Enter Your Specialization"
              className="shadow appearance-none border m-2 w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="specialization"
              id="specialization"
              value={formik.values.specialization}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="text-red-600 pl-2">
              <ErrorMessage name="specialization" />
            </div>
            <br />
            <label className="font-medium pl-2">Experience</label>
            <br />
            <input
              type="text"
              placeholder="Enter your Experience"
              className="shadow appearance-none border m-2 w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="experience"
              id="experience"
              value={formik.values.experience}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="text-red-600 pl-2">
              <ErrorMessage name="experience" />
            </div>
            <div className="mt-6">
              <label className="font-medium">Select Status</label>
              <Select
                className="shadow w-[20vw] mt-2"
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
            </div>
            <div className="flex gap-4">
              <button
                className=" cursor-pointer w-full border-0 mt-4 outline-0 m-4 rounded py-2 px-2 bg-[#005c69] text-white font-bold"
                type="submit"
                onClick={closeModal}
              >
                Add
              </button>

              <button
                className=" cursor-pointer w-full border-0 mt-4 outline-0 m-4 rounded py-2 px-2 bg-[#005c69] text-white font-bold"
                type="submit"
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
export default AddDoctor;
