import react from "react";
import { Formik, FormikProvider, ErrorMessage, useFormik } from "formik";

const initialValues = {
  currentpassword: "",
  newpassword: "",
  confirmpassword: "",
};

const ChangePassword = () => {
  const formik = useFormik({
    initialValues: initialValues,
  });

  return (
    <>
      <div className="mt-4 mb-16">
        <FormikProvider value={formik}>
          <form>
            <label className="font-medium ml-20 ">Current Password:</label>
            <br />
            <input
              type="text"
              placeholder="Enter your current password"
              className="ml-20 pr-2 border shadow w-1/3 p-2"
              name="currentpassword"
              id="currentpassword"
              value={formik.values.currentpassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="text-red-600">
              <ErrorMessage name="currentpassword" />
            </div>
            <br />
            <label className="font-medium ml-20">New Password:</label>
            <br />
            <input
              type="text"
              placeholder="Enter your new password"
              className="ml-20 pr-2 border shadow w-1/3 p-2"
              name="newpassword"
              id="newpassword"
              value={formik.values.newpassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="text-red-600">
              <ErrorMessage name="newpassword" />
            </div>
            <br />
            <label className="font-medium ml-20">Confirm Password:</label>
            <br />
            <input
              type="text"
              placeholder="Enter your confirm password"
              className="ml-20 pr-2 border shadow w-1/3 p-2"
              name="confirmpassword"
              id="confirmpassword"
              value={formik.values.confirmpassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="text-red-600">
              <ErrorMessage name="confirmpassword" />
            </div>
            <button className="mt-4 p-2 shadow cursor bg-[#005c69] hover:bg-[#033838] ml-20 text-white">
              Update Password
            </button>
          </form>
        </FormikProvider>
      </div>
    </>
  );
};

export default ChangePassword;
