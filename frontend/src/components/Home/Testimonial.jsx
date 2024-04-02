import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import image from "../../assests/images/doctor2.jpg";
import image1 from "../../assests/images/d2.png";
import image2 from "../../assests/images/doctor3.jpg";
import image3 from "../../assests/images/doctor4.jpg";
import image4 from "../../assests/images/doctor5.jpg";

const Testimonial = () => {
  return (
    <div>
      <div>
        <p className="text-3xl text-center">Testimonial</p>
        <p className="text-center mt-4 text-lg">
          Take a look at what people say about us
        </p>
      </div>
      <div className="flex flex-col lg:flex-row">
        <Swiper
          className="my-8 "
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img
              className=" mx-20  rounded-full mt-12 "
              src={image}
              height={150}
              width={150}
            />

            <p className="text-justify mt-4">
              Dermatologists are medical doctors who specialize in diagnosing
              and treating diseases of the skin, hair, nails and mucus membrane.
              Some dermatologists are also surgeons.
            </p>
            <p className="font-semibold text-2xl text-center mt-4">
              Dr. Devang Shah
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="text-center mx-20 rounded-full mt-12"
              src={image1}
              height={150}
              width={150}
            />

            <p className="text-justify mt-2">
              Immunologists are doctors who diagnose, treat, and work to prevent
              immune system disorders. You may see an immunologist if you have
              food or seasonal allergies, hay fever.
            </p>
            <p className="font-semibold mt-4 text-2xl text-center">
              Dr. Raj Patel
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="mx-20 rounded-full mt-12"
              src={image3}
              height={150}
              width={150}
            />

            <p className="text-justify mt-2">
              A dentist is a healthcare provider who diagnoses and treats oral
              health conditions. Taking good care of your teeth and gums can
              help you reduce your risk.
            </p>
            <p className="font-semibold mt-4 text-2xl text-center">
              Dr.Reema Vyas
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="mx-20 rounded-full mt-12"
              src={image4}
              height={150}
              width={150}
            />

            <p className="text-justify">
              A cardiologist is a physician who's an expert in the care of your
              heart and blood vessels. They can treat or help you prevent a
              number of cardiovascular problems.{" "}
            </p>
            <p className="font-semibold mt-4 text-center text-2xl">
              Dr. Hardik Jani
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
