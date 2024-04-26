import React from "react";
import logo from "../../assests/images/logo.jpg";
import { useFormik, ErrorMessage, FormikProvider } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Select from "react-select";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialValues = {
  role: "",
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmpassword: "",
  phoneno: "",
  degree: "",
  experience: "",
  state: "",
  city: "",
  userStatus: "Active",
  address: "",
  specialization: "",
  pincode: "",
};

const roleOptions = [
  { value: "Patient", label: "Patient" },
  { value: "Doctor", label: "Doctor" },
];

const options = [
  { value: "Gujarat", label: "Gujarat" },
  { value: "Rajasthan", label: "Rajasthan" },
  { value: "Maharastra", label: "Maharashtra" },
];

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
  phoneno: Yup.string().required("Please enter your contact number"),
  degree: Yup.string().when("role", {
    is: "Doctor",
    then: () => Yup.string().required("Degree is required"),
    otherwise: () => Yup.string().notRequired(),
  }),
  experience: Yup.string().when("role", {
    is: "Doctor",
    then: () => Yup.string().required("Experience is required"),
    otherwise: () => Yup.string().notRequired(),
  }),
  city: Yup.string().when("role", {
    is: "Doctor",
    then: () => Yup.string().required("City is required"),
    otherwise: () => Yup.string().notRequired(),
  }),
  state: Yup.string().when("role", {
    is: "Doctor",
    then: () => Yup.string().required("State is required"),
    otherwise: () => Yup.string().notRequired(),
  }),
  address: Yup.string().when("role", {
    is: "Doctor",
    then: () => Yup.string().required("Address is required"),
    otherwise: () => Yup.string().notRequired(),
  }),
  specialization: Yup.string().when("role", {
    is: "Doctor",
    then: () => Yup.string().required("Specialization is required"),
    otherwise: () => Yup.string().notRequired(),
  }),
  pincode: Yup.string().when("role", {
    is: "Doctor",
    then: () => Yup.string().required("Pincode is required"),
    otherwise: () => Yup.string().notRequired(),
  }),
});

const Signup = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/auth/login");
  };
  const handleSubmit = async (values) => {
    try {
      values = { ...values, userStatus: "Active" };
      const response = await axios.post(
        "http://localhost:3001/api/sign-up",
        values
      );
      console.log(response);
      if (response.data.code === 200) {
        toast.success(response.data.message);
        navigate("/auth/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error:", error.response.data);
      toast.error("Failed to sign up. Please try again later.");
    }
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: SignupSchema,
    onSubmit: handleSubmit,
  });

  // console.log(formik.values);
  console.log(formik.errors);

  return (
    <FormikProvider value={formik}>
      <div className="flex justify-center items-center min-h-screen">
        <div className="z-10 bg-white max-w-md w-full p-6 my-6">
          <div className="image flex justify-center items-center">
            <img src={logo} height={30} width={30}></img>
            <h1 className="font-bold text-3xl text-center m-0">Medically</h1>
          </div>
          <h3 className="text-2xl mb-2 font-medium">Signup</h3>
          <p className="">
            Don't have an account?
            <button
              onClick={() => goToLogin()}
              className="font-medium ml-1 mb-4 underline underline-offset-2"
            >
              Login
            </button>
          </p>
          <div className="border-b-2 border border-[#d0d5dd] mb-1"></div>
          <label className="font-medium">Select Your Role</label>
          <br />
          <Select
            id="role"
            name="role"
            options={roleOptions}
            onChange={(e) => {
              formik.setFieldValue("role", e?.value);
            }}
            onBlur={formik.handleBlur}
            className="mb-4"
          />

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
            <label className="font-medium">Email</label>
            <br />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="shadow appearance-none border w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            <label className="font-medium">Password</label>
            <br />
            <input
              type="password"
              placeholder="Enter Your Password"
              className="shadow appearance-none border w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="text-red-600">
              <ErrorMessage name="password" />
            </div>

            <br />
            <label className="font-medium">Confirm Password</label>
            <br />
            <input
              type="password"
              placeholder="Enter Your Confirm Password"
              className="shadow appearance-none border w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="confirmpassword"
              id="confirmpassword"
              value={formik.values.confirmpassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="text-red-600">
              <ErrorMessage name="password" />
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
              type="text"
              placeholder="Enter Your Contact Number"
              className="shadow appearance-none border w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="phoneno"
              id="phoneno"
              maxLength={10}
              value={formik.values.phoneno}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="text-red-600">
              <ErrorMessage name="number" />
            </div>

            <br />

            {formik.values.role === "Doctor" && (
              <div>
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
                  type="number"
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
                  value={formik.values.specialization}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <div className="text-red-600">
                  <ErrorMessage name="specialization" />
                </div>

                <br />
                <label className="font-medium ">State</label>
                <br />
                <Select
                  className="shadow"
                  name="state"
                  options={options}
                  onChange={(e) => {
                    formik.setFieldValue("state", e?.value);
                  }}
                  onBlur={formik.handleBlur}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      primary25: "#e2f3f2",
                      primary: "#005c69",
                    },
                  })}
                />
                <div className="text-red-600">
                  <ErrorMessage name="state" />
                </div>

                <br />
                <label className="font-medium">City</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter Your City"
                  className="shadow appearance-none border w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="city"
                  id="city"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <div className="text-red-600">
                  <ErrorMessage name="city" />
                </div>

                <br />
                <label className="font-medium">Pincode</label>
                <br />
                <input
                  type="number"
                  placeholder="Enter Your Pincode"
                  className="shadow appearance-none border w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="pincode"
                  id="number"
                  value={formik.values.pincode}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <div className="text-red-600">
                  <ErrorMessage name="pincode" />
                </div>

                <br />
                <label className="font-medium">Address</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter Your Address"
                  className="shadow appearance-none border w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <div className="text-red-600">
                  <ErrorMessage name="address" />
                </div>
              </div>
            )}
            <p className="underline cursor-pointer mb-2 mt-3 pl-64">
              Forgot Password
            </p>
            <button
              className=" cursor-pointer w-full border-0 outline-0 py-2 px-2 bg-[#005c69] text-white font-bold"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </FormikProvider>
  );
};

export default Signup;
