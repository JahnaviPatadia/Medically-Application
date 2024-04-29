import react from "react";
import logo from "../../assests/images/logo.jpg";
import { useFormik, ErrorMessage, FormikProvider } from "formik";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const AdminLogin = () => {
  const LoginSchema = Yup.object({
    email: Yup.string()
      .email("Invalid Email")
      .required("Please enter your email"),
    password: Yup.string().min(6).required("Please enter your password"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: LoginSchema,
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
          <div className="border-b-2 border-[#d0d5dd] mb-4"></div>
          <form className="loginform" onSubmit={formik.handleSubmit}>
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
            <label className="font-medium mt-4">Password</label>
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
            <p className="pl-64 mt-3">Forgot Password</p>
            <button
              className="cursor-pointer w-full border-0 mt-4 outline-0 py-2 px-2 bg-[#005c69] text-white font-bold"
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

export default AdminLogin;