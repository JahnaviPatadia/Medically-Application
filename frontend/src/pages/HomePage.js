import Lending from "../components/Home/Lending";
import { SlCalender } from "react-icons/sl";
import { FaFolder } from "react-icons/fa";
import { MdOutlineVideoCall } from "react-icons/md";
import image from "../assests/images/homeimage.jpg";
import Header from "../components/layout/Header";
import { useBlazeSlider } from "react-blaze-slider";
import "blaze-slider/dist/blaze.css";
import image1 from "../assests/images/immunology1.jpg";
import image2 from "../assests/images/dermatology1.jpg";
import image3 from "../assests/images/dentist1.jpg";
import image4 from "../assests/images/hematology1.jpg";
import image5 from "../assests/images/ENT.jpg";
import image6 from "../assests/images/cardio1.jpg";
import image7 from "../assests/images/dermatology1.jpg";
import image8 from "../assests/images/immunology1.jpg";
import image9 from "../assests/images/dentist1.jpg";
import Intro from "../components/Home/Intro";

const HomePage = () => {

  return (
    <>
      <div className="space-container">
        <Lending />
      </div>
      <div className=" flex-col lg:flex-row flex px-10 gap-12  py-5 shadow bg-[#E2F3F2] w-[100%]">
        <div>
          <div>
            <img
              className="text-center mx-auto mb-4"
              src={image7}
              height={100}
              width={100}
            />
          </div>
          <h1 className="font-semibold text-3xl text-center">Dermatologies</h1>
          <p className="mt-2 text-justify">
            Dermatology involves the study, research, diagnosis, and management
            of any health conditions that may affect the skin, fat hair, nails,
            and membranes. A dermatologist is the health professional who
            specializes in this area of healthcare.
          </p>
        </div>
        <div>
          <div>
            <img
              className="text-center mx-auto mb-4"
              src={image8}
              height={100}
              width={100}
            />
          </div>
          <p className="font-semibold text-center text-3xl">Immunologies</p>
          <p className="mt-2 text-justify">
            An immunologist treats health issues brought on by immune system
            problems. Also known as allergists, immunologists are doctors who
            diagnose, treat, and work to prevent immune system disorders.
          </p>
        </div>
        <div>
          <div>
            <img
              className="text-center mx-auto mb-4"
              src={image9}
              height={100}
              width={100}
            />
          </div>
          <p className="font-semibold text-3xl text-center">Dentist</p>
          <p className="mt-2 text-justify">
            A dentist is a healthcare provider who diagnoses and treats oral
            health conditions. Taking good care of your teeth and gums can help
            you reduce your risk for other serious health conditions, like heart
            disease and stroke.
          </p>
        </div>
      </div>
      <div className="space-container">
        <Intro />
        <div className="mb-12 py-12">
          <div>
            <p className="  text-3xl text-center mt-12 ">Our Services</p>
          </div>
          <div className="flex flex-col lg:flex-row  mx-12 mt-12 gap-12">
            <div className="bg-[#008891] p-4 rounded text-white">
              <div>
                <img
                  className="text-center mx-auto mb-4"
                  src={image1}
                  height={100}
                  width={100}
                />
              </div>
              <p className="font-semibold text-2xl text-center">Immunologies</p>
              <p className="mt-4 text-justify">
                Immunology is the study of the immune system and is a very
                important branch of the medical and biological sciences. The
                immune system protects us from infection through various lines of
                defence. If the immune system is not functioning as it should, it
                can result in disease, such as autoimmunity, allergy and cancer
              </p>
            </div>
            <div className="bg-[#008891] p-4 rounded text-white">
              <div>
                <img
                  className="text-center mx-auto mb-4"
                  src={image2}
                  height={100}
                  width={100}
                />
              </div>
              <p className="font-semibold text-2xl text-center">Dermatology</p>
              <p className="mt-4 text-justify">
                Dermatology involves the study, research, diagnosis, and
                management of any health conditions that may affect the skin, fat
                hair, nails, and membranes. A dermatologist is the health
                professional who specializes in this area of healthcare.
              </p>
            </div>
            <div className="bg-[#008891] p-4 rounded text-white">
              <div>
                <img
                  className="text-center mx-auto mb-4"
                  src={image3}
                  height={100}
                  width={100}
                />
              </div>
              <p className="font-semibold text-2xl text-center">Dentist</p>
              <p className="mt-4 text-justify">
                A dentist is a healthcare provider who diagnoses and treats oral
                health conditions. Taking good care of your teeth and gums can
                help you reduce your risk for other serious health conditions,
                like heart disease and stroke. You should visit a dentist
                regularly for routine exams and cleanings.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 mx-12 mt-12 gap-12">
            <div className="bg-[#008891] p-4 rounded text-white">
              <div>
                <img
                  className="text-center mx-auto mb-4"
                  src={image4}
                  height={100}
                  width={100}
                />
              </div>
              <p className="font-semibold text-2xl text-center">Hematologist</p>
              <p className="mt-4 text-justify">
                Haematologists are specialist doctors who diagnose and treat all
                kinds of blood diseases. Many different health issues can affect
                the blood, from anaemias to cancers. Your haematologist may refer
                you for a range of medical tests, and prescribe treatments for
                your blood condition.
              </p>
            </div>
            <div className="bg-[#008891] p-4 rounded text-white">
              <div>
                <img
                  className="text-center mx-auto mb-4"
                  src={image5}
                  height={100}
                  width={100}
                />
              </div>
              <p className="font-semibold text-2xl text-center">ENT</p>
              <p className="mt-4 text-justify">
                The ears, nose and throat all have essential roles to play
                including for our senses, speech, breathing and eating. ENT
                disorders can sometimes get in the way of these essential
                functions, causing symptoms such as: Hearing problems including
                tinnitus and hearing loss. Difficulty swallowing.
              </p>
            </div>
            <div className="bg-[#008891] p-4 rounded text-white">
              <div>
                <img
                  className="text-center mx-auto mb-4"
                  src={image6}
                  height={100}
                  width={100}
                />
              </div>
              <p className="font-semibold text-2xl text-center">Cardiologist</p>
              <p className="mt-4 text-justify">
                A cardiologist is a medical doctor who studies and treats diseases
                and conditions of the cardiovascular system, the heart and blood
                vessels, including heart rhythm disorders, coronary artery
                disease, heart attacks, heart defects and infections, and related
                disorders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
