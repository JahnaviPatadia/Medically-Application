import React from "react";
import axios from "axios";
import logo from "../../assests/images/logo.jpg";
import bg from "../../assests/images/Login.png";
import { useFormik, ErrorMessage, FormikProvider } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { LoginSchema } from "../schemas";

const initialValues = {
  email: "",
  password: "",
};

const LoginSchema = Yup.object({
  email: Yup.string()
    .email("Invalid Email")
    .required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
});

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await axios.post(
          "http://localhost:3001/api/sign-in",
          values
        );
        if (response.data.code === 200) {
          toast.success(response.data.message);
          navigate("/doctor-list");
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <FormikProvider value={formik}>
      <div className=" flex justify-center items-center min-h-screen">
        <div className=" z-10 bg-white max-w-md w-full p-6 ">
          <div className="image flex justify-center items-center">
            <img src={logo} height={30} width={30}></img>
            <h1 className="font-bold text-3xl text-center m-0">Medically</h1>
          </div>

          <h3 className="text-2xl mb-2 font-medium">Login</h3>
          <p className="">
            Don't have an account?
            <button
              onClick={() => navigate("/auth/signup")}
              className="font-medium ml-1 mb-4 underline underline-offset-2"
            >
              Sign Up
            </button>
          </p>
          <div className="border-b-2 border-[#d0d5dd] mb-4"></div>
          <form className="loginform" onSubmit={formik.handleSubmit}>
            <label className=" font-medium">Email</label>
            <br />
            <input
              type="email"
              placeholder="Enter Your Email"
              className=" shadow appearance-none border w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="text-red-600">
              <ErrorMessage name="email" />
            </div>

            <label className=" font-medium">
              <br />
              Password
            </label>
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

            <p className=" pl-64  underline cursor-pointer mb-2 mt-3">
              Forget password?
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

export default Login;
