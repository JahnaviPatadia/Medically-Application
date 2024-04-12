import react from "react";
import image from "../../assests/images/d1.png";

const DoctorDetail = () => {
  return (
    <div>
      <p className="text-3xl font-bold text-center mt-4 mb-4">Profile</p>
      <p className="text-center text-xl">I am a Dermatologies.</p>
      <div className="flex gap-4 mt-6">
        <div className="w-1/3">
          <p className="text-2xl font-semibold pl-4 mt-2">About Me</p>
          <p className="pl-4 text-base">
            A dermatologist is a medical doctor who specializes in conditions
            that affect the skin, hair, and nails. Whether it's rashes,
            wrinkles, psoriasis, or melanoma, no one understands your skin,
            hair, than a board-certified dermatologist.
          </p>
          <button className="bg-[#005c69] ml-24 mt-8 p-2 text-white font-bold text-lg hover:bg-[#033838]">
            Book Appointment
          </button>
        </div>
        <div className=" py-4 px-4 w-1/3">
          <img src={image} height={800} width={800} />
        </div>
        <div className="w-1/3">
          <p className="pr-40 text-2xl font-semibold mt-2 pl-4 pb-2">Details</p>
          <p className="flex">
            <p className="font-semibold pl-4 mr-2 pb-2  ">Name: </p> Willion
            Peterson
          </p>
          <p className="flex ">
            <p className="font-semibold pl-4 mr-2 pb-2">Experience: </p> 25
            Years
          </p>
          <p className="flex ">
            <p className="font-semibold pl-4 mr-2 pb-2">Degree:</p> MD in
            Dermatologies
          </p>

          <p className="flex">
            <p className="font-semibold pl-4 mr-2 pb-2">Age: </p> 55 Years
          </p>
          <p className="flex">
            <p className="font-semibold pl-4 mr-2 pb-2">Contact Number: </p>{" "}
            1234567895
          </p>
          <p className="flex ">
            <p className="font-semibold pl-4 mr-2 ">Timings: </p> Mon-Fri(10AM
            to 7PM)
          </p>

          <p className="pl-20 pb-2"> Sat(10AM to 1PM)</p>
          <p className="flex w-2/3 ">
            <p className="font-semibold pl-4 mr-2 ">Address: </p> 14, No 125, A
            Block, Sribalaji Complex, Sultanpet
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetail;
