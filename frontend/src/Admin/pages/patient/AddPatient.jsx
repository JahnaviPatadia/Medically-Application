import React from "react";
import logo from "../../../assests/images/logo.jpg";
import { useFormik, ErrorMessage, FormikProvider } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Select from "react-select";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialValues = {
  role: "Patient",
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmpassword: "",
  phoneno: "",

  gender: "",
};

const SignupSchema = Yup.object({
  email: Yup.string()
    .email("Invalid Email")
    .required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
  firstname: Yup.string().required("Please enter your first name"),
  lastname: Yup.string().required("Please enter your last name"),
  phoneno: Yup.string().required("Please enter your contact no"),
  gender: Yup.string().required("Please enter your gender"),
});

const AddPatient = () => {
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
        if (response.data.code === 200) {
          toast.success(response.data.message);
          navigate("/admin/dashboard/patient");
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
          <div className="border-b-2 border border-[#d0d5dd] mb-1"></div>
          <form className="signupform" onSubmit={formik.handleSubmit}>
            <label className="font-medium">First Name</label>
            <br />
            <input
              type="text"
              placeholder="Enter Your First Name"
              className="shadow appearance-none border pb-2 mt-2 w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              className="shadow appearance-none border w-full py-3 mt-2 px-2 text-gray-700 leading-tight focus: outline-none focus-shadow-outline"
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
            <label className="font-medium">Email</label>
            <br />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="shadow appearance-none border w-full py-3 mt-2 px-2 text-gray-700 leading-tight focus: outline-none focus-shadow-outline"
              name="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="text-red-600">
              <ErrorMessage name="email" />
            </div>

            <br />
            <label className=" font-medium ">Select Your Gender</label>
            <div className="ml-8 mt-2">
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
              <label className="inline-flex items-center ml-4">
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
            <label className="font-medium">Contact Number</label>
            <br />
            <input
              type="number"
              placeholder="Enter Your Contact Number"
              className="shadow appearance-none border w-full mt-2 py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="phoneno"
              id="phoneno"
              maxLength={10}
              value={formik.values.phoneno}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div>
              <ErrorMessage name="number" />
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

export default AddPatient;

// const AddPatient = () => {
//   return <h1>THis is Patient</h1>;
// };

// export default AddPatient;
