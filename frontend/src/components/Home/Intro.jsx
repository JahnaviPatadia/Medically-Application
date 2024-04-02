import React from "react";
import image from "../../assests/images/homeimage.jpg";

const Intro = () => {
  return (
    <>
      <div className="flex mt-[50px] mb-[50px] sm:flex-col lg:flex-row">
        <div className="w-2/4 flex justify-center align-middle">
          <img src={image} width={600} />
        </div>
        <div className="w-2/4 flex justify-center align-middle flex-col gap-5">
          <p className="text-2xl pl-4 bold">Welcome to Medically System</p>
          <p className="text-justify pl-4">
            A clinic management system is a software solution designed to
            streamline administrative tasks and patient care processes within a
            healthcare facility. It typically includes features such as
            appointment scheduling, patient records management, billing, and
            inventory management. These systems aim to improve efficiency,
            accuracy, and overall patient experience.
          </p>
          <p className="text-justify pl-4">
            Clinic management systems also facilitate communication between
            healthcare providers, enable electronic health records (EHR)
            management, and support decision-making through data analysis and
            reporting functionalities.
          </p>
        </div>
      </div>
    </>
  );
};

export default Intro;
