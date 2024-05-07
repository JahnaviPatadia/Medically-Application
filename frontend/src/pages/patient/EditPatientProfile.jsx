import react from "react";
import { useFormik, ErrorMessage, FormikProvider } from "formik";
import * as Yup from "yup";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  contactno: "",
};

const PatientUpdateSchema = Yup.object({
  email: Yup.string()
    .email("Invalid Email")
    .required("Please enter your email"),
  firstname: Yup.string().required("Please enter your first name"),
  lastname: Yup.string().required("Please enter your last name"),
  contactno: Yup.string().required("Please enter your contact no"),
});

const EditPatientProfile = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: PatientUpdateSchema,
    // onSubmit: handleSubmit,
  });

  return (
    <>
      <div className="flex  mt-2 mb-20 ">
        <FormikProvider value={formik}>
          <form>
            <label className="font-medium ml-20 ">First Name:</label>
            <br />
            <input
              type="text"
              placeholder="Enter your first name"
              className="ml-20 pr-2 border shadow w-full p-2"
              name="firstname"
              id="firstname"
              value={formik.values.firstname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <br />
            <div className="text-red-600 ml-20">
              <ErrorMessage name="firstname" />
            </div>
            <br />
            <label className="font-medium ml-20">Last Name:</label>
            <br />
            <input
              type="text"
              placeholder="Enter your last name"
              className="ml-20 border shadow w-full p-2"
              name="lastname"
              id="lastname"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <br />
            <div className="text-red-600 ml-20">
              <ErrorMessage name="lastname" />
            </div>
            <br />
            <label className="font-medium ml-20">Email:</label>
            <br />
            <input
              type="text"
              placeholder="Enter your email"
              className="ml-20 border shadow w-full p-2"
              name="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <br />
            <div className="text-red-600 ml-20">
              <ErrorMessage name="email" />
            </div>
            <br />
            <label className="font-medium ml-20">Contact Number:</label>
            <br />
            <input
              type="text"
              placeholder="Enter your contact number"
              className="ml-20 border shadow w-full p-2"
              name="contactno"
              id="contactno"
              value={formik.values.contactno}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <br />
            <div className="text-red-600 pl-20">
              <ErrorMessage name="contactno" />
            </div>
            <button className="mt-4 p-2 shadow cursor bg-[#005c69] hover:bg-[#033838] ml-20 text-white">
              Edit Profile
            </button>
          </form>
        </FormikProvider>
      </div>
    </>
  );
};

export default EditPatientProfile;
