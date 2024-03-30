import React from "react";
import logo from "../../assests/images/logo.jpg";
import { useFormik, ErrorMessage, FormikProvider } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const initialValues = {
  role: "",
  name: "",
  email: "",
  password: "",
  number: "",
  degree: "",
  experience: "",
  address: "",
};

const SignupSchema = Yup.object({
  email: Yup.string()
    .email("Invalid Email")
    .required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  name: Yup.string().required("Please enter your name"),
  number: Yup.number().required("Please enter your contact number"),
  degree: Yup.string().required("Please enter your degree"),
  experience: Yup.number().required("Please enter your experience"),
  address: Yup.string().required("Please enter your address"),
  qualification: Yup.string().required("Please enter your qualififcation"),
});

const Signup = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/auth/login");
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

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

          <label className="font-medium">Select Your Role</label>
          <br />
          <select
            id="role"
            name="role"
            onChange={formik.handleChange}
            value={formik.values.role}
            className="shadow  border w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>
          <div className="border-b-2 border border-[#d0d5dd] mb-1"></div>
          <form className="signupform" onSubmit={formik.handleSubmit}>
            <label className="font-medium">Enter Your Name</label>
            <br />
            <input
              type="text"
              placeholder=" Name"
              className="shadow appearance-none border w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="name"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="text-red-600">
              <ErrorMessage name="name" />
            </div>

            <br />
            <label className="font-medium">Enter Your Email</label>
            <br />
            <input
              type="email"
              placeholder=" Email"
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
            <label className="font-medium">Enter Your Password</label>
            <br />
            <input
              type="password"
              placeholder=" Password"
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
            <label className="font-medium">Enter Your Contact Number</label>
            <br />
            <input
              type="number"
              placeholder="Number"
              className="shadow appearance-none border w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="number"
              id="number"
              value={formik.values.number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="text-red-600">
              <ErrorMessage name="number" />
            </div>

            <br />

            {formik.values.role === "doctor" && (
              <div>
                <label className="font-medium">Enter Your Degree</label>
                <br />
                <input
                  type="text"
                  placeholder="Degree"
                  className="shadow appearance-none border w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="degree"
                  id="degree"
                  value={formik.values.text}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <div className="text-red-600">
                  <ErrorMessage name="degree" />
                </div>

                <br />
                <label className="font-medium">Enter Your Experience</label>
                <br />
                <input
                  type="number"
                  placeholder="Experience"
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
                <label className="font-medium">Enter Your Address</label>
                <br />
                <input
                  type="text"
                  placeholder="Address"
                  className="shadow appearance-none border w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <div className="text-red-600">
                  <ErrorMessage name="address" />
                </div>

                <br />
                <label className="font-medium">Enter Your Qualification</label>
                <br />
                <input
                  type="text"
                  placeholder="Qualification"
                  className="shadow appearance-none border w-full py-3 px-2 text-gray-700 leading-tight focus:outiline-none focus:shadow-outline"
                  name="qualification"
                  value={formik.values.qualification}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <div className="text-red-600">
                  <ErrorMessage name="qualification" />
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
