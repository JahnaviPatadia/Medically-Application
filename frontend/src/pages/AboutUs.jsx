import react from "react";
import image from "../assests/images/homeimage.jpg";
import image1 from "../assests/images/immunologies1.jpg";

const AboutUs = () => {
  return (
    <>
      <div>
        <div className="text-4xl font-semibold text-center mt-2">About Us</div>
        <div className="flex gap-16 my-6">
          <p className="mt-8 ml-8 pl-4 text-justify">
            A Medically is a software solution designed to streamline
            administrative tasks and patient care processes within a healthcare
            facility. It typically includes features such as appointment
            scheduling, patient records management, billing, and inventory
            management. These systems aim to improve efficiency, accuracy, and
            overall patient experience. Medically also facilitate communication
            between healthcare providers, enable electronic health records (EHR)
            management, and support decision-making through data analysis and
            reporting functionalities.
          </p>
          <img src={image} className="mr-16 mt-8 h-64 w-100 shadow rounded" />
        </div>
        <div>
          <div className="flex gap-4 my-12">
            <p className="font-semibold text-4xl w-full bg-[#E2F3F2] text-center pt-12"></p>
            <p className="w-92 mt-2 text-justify">
              A dentist is a healthcare provider who diagnoses and treats oral
              health conditions. Taking good care of your teeth and gums can
              help you reduce your risk for other serious health conditions,
              like heart disease and stroke. You should visit a dentist
              regularly for routine exams and cleanings.
            </p>
            <div className="bg-[#E2F3F2] text-[#E2F3F2]  w-full"></div>
          </div>
        </div>
        <div>
          <div className="flex gap-6 mx-16 my-6">
            <img src={image1} className="h-64 w-100 shadow rounded" />
            <p className="mt-20 pr-4 pl-4 text-justify">
              Immunology is the study of the immune system and is a very
              important branch of the medical and biological sciences. The
              immune system protects us from infection through various lines of
              defence. If the immune system is not functioning as it should, it
              can result in disease, such as autoimmunity, allergy and cancer
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
