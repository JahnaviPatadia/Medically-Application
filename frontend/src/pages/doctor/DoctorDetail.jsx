import react, { useEffect, useState } from "react";
import image from "../../assests/images/d1.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const DoctorDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setdata] = useState([]);

  const fetchDoctorData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/user/doctor/${id}`
      );
      console.log(response?.data?.data);
      setdata(response?.data?.data);
    } catch (error) {
      console.error("Error fetching doctor details", error);
    }
  };

  useEffect(() => {
    fetchDoctorData();
  }, []);

  return (
    <>
      <div className="flex gap-2">
        <div className="py-4 px-4 w-1/3">
          <img src={image} height={400} width={400} />
          <div className="text-center ">
            <button className="shadow border-white border-4 border-double mt-8 pl-8 pr-4 py-2 bg-[#005c69] hover:bg-[#033838] text-white pl-8">
              Book Appointment
            </button>
            <div className="pr-64 ">
              <p className="mt-8 font-semibold text-lg pl-40 ">Address: </p>
              <p className="pl-28">3/4 Sukan Complex,LT Road, Ahmedabad</p>
            </div>
          </div>
        </div>
        <div>
          <p className="mt-4 text-2xl font-semibold ">
            {data?.firstname + " " + data?.lastname}, MS
          </p>
          <p className="mt-8 text-lg font-normal font-semibold">Heighlights</p>
          <p className="mt-2">- Board Certified</p>
          <p>- Has Online scheduling</p>
          <p className="mt-8 font-semibold">Biography</p>
          <p>
            A cardiologist is a medical doctor who specializes in diagnosing and
            treating diseases and conditions related to the heart and blood
            vessels. A cardiologist is a healthcare provider who can treat chest
            pain, high blood pressure and heart failure, as well as problems
            with your heart valves, blood vessels and other heart and vascular
            issues. They can order tests like electrocardiograms,
            echocardiograms and CTs (computed tomography) to find out what’s
            wrong.
          </p>
          <br />
          <p>
            They can order tests like electrocardiograms, echocardiograms and
            CTs (computed tomography) to find out what’s wrong. With their
            diagnosis, they can order medicine, help you start healthier
            exercise and eating habits or do cardiac catheterization. A
            cardiologist will do a physical exam and discuss your symptoms,
            medical history and family history with you. It’s important to let
            your cardiologist know if other people in your family have had heart
            problems because that can increase the chances of you having a heart
            problem.
          </p>
        </div>
        <div className="w-full mt-8">
          <p className="font-semibold ">Office Hours</p>
          <br />
          <p>Monday: 10:00 AM to 6:00 PM</p>
          <p>Tuesday: 10:00 AM to 6:00 PM</p>
          <p>Wednesday: 10:00 AM to 6:00 PM</p>
          <p>Thursday: 10:00 AM to 6:00 PM</p>
          <p>Friday: 10:00 AM to 6:00 PM</p>
          <p>Saturday: 10:00 AM to 1:00 PM</p>
          <div>
            <button className="py-2 shadow ml-8 border-white border-4 border-double mt-4 flex bg-[#005c69] hover:bg-[#033838] text-white justify-end pr-4 pl-4">
              View Phone
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDetail;
