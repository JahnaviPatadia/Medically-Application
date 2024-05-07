import React from "react";
import image from "../assests/images/d1.png";
import { useNavigate } from "react-router-dom";

const DoctorCard = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="border mx-20 my-10">
      <div>
        <img src={data.image} height={300} width={300} />
      </div>
      <div className="pl-2 mt-2 ">
        <p className="flex">
          <p className="font-semibold mr-2">Name: </p>{" "}
          {data?.firstname + " " + data?.lastname}
        </p>
        <p className="flex">
          <p className="font-semibold mr-2">Specialist: </p>{" "}
          {data?.specialization}
        </p>
        <p className="flex">
          <p className="font-semibold mr-2">Experience: </p> {data.experience}
        </p>
        {/* <p className="mb-3 flex">
          <p className="font-semibold mr-2">Age: </p> {props.age}
        </p> */}
        <button
          onClick={() => navigate(`/doctor-list/${data._id}`)}
          className="hover:bg-[#033838] p-6 bg-[#005c69] py-2 px-5 text-white text-center mb-3"
        >
          View
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
