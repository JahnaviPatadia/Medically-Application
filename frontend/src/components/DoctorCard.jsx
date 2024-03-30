import React from "react";
import image from "../assests/images/d1.png";
import { useNavigate } from "react-router-dom";

const DoctorCard = (props) => {
  const navigate = useNavigate();

  const goToDetails = (id) => {
    navigate(`/doctor-list/${id}`);
  };

  return (
    <div className="border mx-20 my-10">
      <div>
        <img src={props.image} height={300} width={300} />
      </div>
      <div className="pl-2 mt-2 ">
        <p className="flex">
          <p className="font-semibold mr-2">Name: </p> {props.name}
        </p>
        <p className="flex">
          <p className="font-semibold mr-2">Specialist: </p> {props.specialist}
        </p>
        <p className="flex">
          <p className="font-semibold mr-2">Experience: </p> {props.experience}
        </p>
        <p className="mb-3 flex">
          <p className="font-semibold mr-2">Age: </p> {props.age}
        </p>
        <button
          onClick={() => goToDetails(props.age)}
          className="hover:bg-[#033838] p-6 bg-[#005c69] py-2 px-5 text-white text-center mb-3"
        >
          View
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
