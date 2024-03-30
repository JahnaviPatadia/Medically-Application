import Lending from "../components/Home/Lending";
import { SlCalender } from "react-icons/sl";
import { FaFolder } from "react-icons/fa";
import { MdOutlineVideoCall } from "react-icons/md";
import image from "../assests/images/homeimage.jpg";
import Header from "../components/layout/Header";
import { useBlazeSlider } from "react-blaze-slider";
import "blaze-slider/dist/blaze.css";
import image1 from "../assests/images/dermatologies.jpg";
import image2 from "../assests/images/immunologies1.jpg";
import image3 from "../assests/images/cardiologist.jpg";
import Slider from "../components/Home/Slider";
import Footer from "../components/Footer";

const DoctorCard = ({ image, name, description, rating, views }) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mt-10">
      <img
        className="w-full h-60 object-cover object-center"
        src={image}
        alt={name}
      />
      <div className="p-3 ">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <div className="flex items-center mb-2">
          <svg
            className="w-3 h-3 fill-current text-yellow-500 mr-1"
            viewBox="0 0 20 20"
          >
            <path d="M10 1l2.55 5.859L18 7.75l-4.438 3.938L15.5 19l-5.5-4.5-5.5 4.5 1.438-7.312L2 7.75l5.45-.891z" />
          </svg>
          <span className="text-gray-700">{rating}</span>
        </div>
        <div className="flex items-center">
          <svg
            className="w-3 h-3 fill-current text-gray-600 mr-1"
            viewBox="0 0 20 20"
          >
            <path d="M10 2C5.25 2 1 6.25 1 11s4.25 9 9 9 9-4.25 9-9-4.25-9-9-9zm0 16c-3.859 0-7-3.141-7-7s3.141-7 7-7 7 3.141 7 7-3.141 7-7 7zm0-10c-1.125 0-2 .875-2 2s.875 2 2 2 2-.875 2-2-.875-2-2-2z" />
          </svg>
          <span className="text-gray-700">{views}</span>
        </div>
      </div>
    </div>
  );
};

const doctors = [
  {
    id: 1,
    image:
      "https://www.yudaah.com/demo/dental-clinic-website-template/assets/images/team/d1.jpg",
    name: "Dr. John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4.5,
    views: 120,
  },
  {
    id: 1,
    image:
      "https://www.yudaah.com/demo/dental-clinic-website-template/assets/images/team/d1.jpg",
    name: "Dr. John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4.5,
    views: 120,
  },
  {
    id: 1,
    image:
      "https://www.yudaah.com/demo/dental-clinic-website-template/assets/images/team/d1.jpg",
    name: "Dr. John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4.5,
    views: 120,
  },
];

const HomePage = () => {

  return (
    <>
      <Lending />
    </>
  );
};

export default HomePage;
