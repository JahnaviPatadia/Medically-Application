import react from "react";
import image from "../assests/images/doctor1.jpg";

const ContactUs = () => {
  return (
    <>
      <div>
        <div className="flex">
          <img src={image} className="h-80 w-120 my-8 rounded-r-full" />
          <div className="flex justify-center flex-col items-center w-full">
            <p className="text-4xl mt-4 font-semibold">Contact Us</p>
            <form className="mt-8">
              <label className="font-semibold text-lg ">First Name:</label>
              <br />
              <input
                type="text"
                placeholder="Enter Your First Name "
                className="border shadow p-2"
              />
              <br />
              <label className="font-semibold text-lg ">Last Name:</label>
              <br />
              <input
                type="text"
                placeholder="Enter Your Last Name"
                className="border shadow p-2"
              />
              <br />
              <label className="font-semibold text-lg">Email:</label>
              <br />
              <input
                type="text"
                placeholder="Enter Your Email"
                className="border shadow p-2"
              />
              <br />
              <label className="font-semibold text-lg">Message:</label>
              <br />
              <input
                type="text"
                placeholder="Enter Your Message "
                className="border shadow p-2"
              />
              <br />
              <button className="bg-[#008891] text-white border shadow mt-2 py-2 px-12">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex gap-20 my-8 justify-center mx-16">
        <div className="px-4 py-4 mt-8 bg-[#E2F3F2] w-1/3">
          <p className="font-semibold">Call Us:</p>
          <p>7418529637</p>
          <p>8527417412</p>
        </div>
        <div className="px-4 py-4 mt-8 bg-[#E2F3F2] w-1/3">
          <p className="font-semibold">Location:</p>
          <p>604 Sukan Complex, LG Road, </p>
          <p>Ahmedabad</p>
        </div>
        <div className="px-4 py-4 mt-8 bg-[#E2F3F2] w-1/3">
          <p className="font-semibold">Time Slots:</p>
          <p>Mon to Fri: 10:00 AM to 7:00 PM</p>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
