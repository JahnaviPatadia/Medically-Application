import react from "react";
import image from "../../assests/images/doctor1.jpg";
import image1 from "../../assests/images/immunology1.jpg";
import image2 from "../../assests/images/dermatology1.jpg";
import image3 from "../../assests/images/dentist1.jpg";
import image4 from "../../assests/images/hematology1.jpg";
import image5 from "../../assests/images/ENT.jpg";
import image6 from "../../assests/images/cardio1.jpg";
import image7 from "../../assests/images/dermatology1.jpg";
import image8 from "../../assests/images/immunology1.jpg";
import image9 from "../../assests/images/dentist1.jpg";

const Lending = () => {
  return (
    <div>
      <div className="flex  flex-col lg:flex-row items-center justify-center lg:justify-between py-16 px-4 lg:px-24 bg-white">
        <div className="lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Your Trusted Lending Partner
          </h2>
          <p className="text-lg text-gray-800 mb-6 text-justify">
            Get the financial support you need with our flexible lending
            solutions. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Duis dapibus justo eu sapien egestas, eu tempor mi placerat.
          </p>
          <a
            href="#"
            className="bg-[#008891] text-white font-bold py-3 px-8 rounded-full inline-block transition duration-300 shadow-md"
          >
            Get Started
          </a>
        </div>

        <div className="lg:w-1/2 mt-">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Lending Image"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className=" flex-col lg:flex-row flex px-12 gap-12  py-8 shadow bg-[#E2F3F2]">
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
      <div className="flex mx-16 my-16 ">
        <div className="flex-col lg:flex-row">
          <img src={image} height={600} width={1400} />
        </div>

        <div className=" px-8">
          <p className="text-4xl mb-4 ">welcome to Medically System</p>
          <p className="text-justify">
            A clinic management system is a software solution designed to
            streamline administrative tasks and patient care processes within a
            healthcare facility. It typically includes features such as
            appointment scheduling, patient records management, billing, and
            inventory management. These systems aim to improve efficiency,
            accuracy, and overall patient experience.
          </p>
          <p className="mt-4 text-justify">
            Clinic management systems also facilitate communication between
            healthcare providers, enable electronic health records (EHR)
            management, and support decision-making through data analysis and
            reporting functionalities.
          </p>
        </div>
      </div>
      <div className=" bg-[#E2F3F2] mb-12 py-12 shadow ">
        <div>
          <p className="  text-3xl text-center mt-12 ">Our Services</p>
          <p className="mx-16 mt-4 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            semper in magna quis tincidunt. Donec at nisi et eros blandit
            elementum fermentum eget augue
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 mx-12 mt-12 gap-12">
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
      <div>
        <div>
          <p className="font-semibold text-center text-3xl">Best Doctors</p>
        </div>
      </div>
    </div>
  );
};

export default Lending;
