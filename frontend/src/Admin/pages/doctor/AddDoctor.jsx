import React from "react";
import logo from "../../../assests/images/logo.jpg";
import { useFormik, ErrorMessage, FormikProvider } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import Select from "react-select";

const initialValues = {
  role: "Doctor",
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  phoneno: "",
  confirmpassword: "",
  gender: "",
  degree: "",
  experience: "",
  specialization: "",
};

const SignupSchema = Yup.object({
  email: Yup.string()
    .email("Invalid Email")
    .required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
  firstname: Yup.string().required("Please enter your firstname"),
  lastname: Yup.string().required("Please enter your lastname"),
  phoneno: Yup.string().required("Please enter your contact number"),
  gender: Yup.string().required("Please enter your gender"),
  degree: Yup.string().required("Please enter your degree"),
  experience: Yup.string().required("Please enter your experience"),
  specialization: Yup.string().required("Please enter your specialization"),
});

const AddDoctor = () => {
  const navigate = useNavigate();

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
            <input
              type="text"
              placeholder="Enter Your Password"
              className="shadow appearance-none border m-2 w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="text-red-600 pl-2">
              <ErrorMessage name="password" />
            </div>

            <br />
            <label className="font-medium pl-2">Confirm Password</label>
            <br />
            <input
              type="text"
              placeholder="Enter Your Confirm Password"
              className="shadow appearance-none border w-full m-2 py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="confirmpassword"
              id="confirmpassword"
              value={formik.values.confirmpassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="text-red-600 pl-2">
              <ErrorMessage name="confirmpassword" />
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
              type="number"
              placeholder="Enter Your Contact Number"
              className="shadow appearance-none border m-2 w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="phoneno"
              id="phoneno"
              maxLength={10}
              value={formik.values.phoneno}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
            <div className="flex gap-4">
              <button
                className=" cursor-pointer w-full border-0 mt-4 outline-0 m-4 rounded py-2 px-2 bg-[#005c69] text-white font-bold"
                type="submit"
              >
                Add Patient
              </button>

              <button
                className=" cursor-pointer w-full border-0 mt-4 outline-0 m-4 rounded py-2 px-2 bg-[#005c69] text-white font-bold"
                type="submit"
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
