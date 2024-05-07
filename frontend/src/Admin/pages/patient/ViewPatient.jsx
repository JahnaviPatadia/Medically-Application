import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewPatient = ({ id }) => {
  const [data, setData] = useState([]);

  const fetchPatientData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/user/patient/${id}`
      );
      console.log(response?.data?.data);
      setData(response?.data?.data);
      //   formik.setValues(response?.data?.data);
    } catch (error) {
      console.erro("Error", error.response.data);
    }
  };

  useEffect(() => {
    fetchPatientData();
  }, [id]);

  return (
    <div className="flex justify-center   items-center ">
      <div className="z-10 bg-white  w-full p-6 my-6">
        <div className="border-b-2 border border-[#d0d5dd] mb-1"></div>

        <label>
          <label className="font-medium">First Name:</label> {data?.firstname}
        </label>

        <br />
        <label>
          <label className="font-medium">Last Name:</label> {data?.lastname}
        </label>

        <br />
        <label>
          <label className="font-medium">Email:</label> {data?.email}
        </label>

        <br />
        <label>
          <label className="font-medium">Gender:</label> {data?.gender}
        </label>

        <br />
        <label>
          <label className="font-medium">Contact Number:</label> {data?.phoneno}
        </label>

        <br />
        <label>
          <label className="font-medium">Status: </label> {data?.userStatus}
        </label>
      </div>
    </div>
  );
};

export default ViewPatient;
