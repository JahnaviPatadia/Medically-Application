 {/* <div className="mt-24">
        <h2 className="font-semibold text-center text-2xl">Our Blog</h2>
        <p className="text-center mt-2 mx-24">
          Clinic management involves organizing and optimizing administrative
          and clinical tasks within a healthcare facility to ensure efficient
          patient care and smooth operation. It includes appointment scheduling,
          patient records management, staff coordination, billing, and inventory
          management.
        </p>
        <div className="flex gap-6 mb-10 mx-16 mt-20">
          <div className="w-1/3  ">
            <img className="mt-10" src={image1} height={400} width={400} />
            <p className="font-semibold text-center mt-2 ">Dermatology</p>
            <p className="mt-2">
              Dermatology is the branch of medicine dealing with the skin. It is
              a speciality with both medical and surgical aspects. A
              dermatologist is a specialist medical doctor who manages diseases
              related to skin, hair, nails, and some cosmetic problems.
            </p>
          </div>
          <div className="w-1/3">
            <img className="mt-10 " src={image2} height={300} width={398} />
            <p className="font-semibold text-center mt-2">Immunologies</p>
            <p className="mt-2">
              An immunologist treats health issues brought on by immune system
              problems. Also known as allergists, immunologists are doctors who
              diagnose, treat, and work to prevent immune system disorders.
            </p>
          </div>
          <div className="w-1/3">
            <img className="mt-10" src={image3} height={100} width={398} />
            <p className="font-semibold text-center mt-2">Cardiologist</p>
            <p className="mt-2">
              A cardiologist is a medical doctor who studies and treats diseases
              and conditions of the cardiovascular system — the heart and blood
              vessels — including heart rhythm disorders, coronary artery
              disease, heart attacks, heart defects and infections, and related
              disorders.
            </p>
          </div>
        </div>
      </div> */}
      {/* <div>
        <p className="text-4xl font-semibold mx-16 text-center">Contact Us</p>
        <div className="flex justify-center item-center border-2 border-black p-2  my-4 mt-8">
          <div className=" flex flex-col pr-40">
            <input
              className="ml-6 border-b-2 border-black outline-none py-2 placeholder-black"
              placeholder="Full Name"
              type="text"
              name="Full Name"
            />

            <input
              className="ml-6 border-b-2 border-black outline-none py-2 placeholder-black"
              placeholder="Email"
              type="text"
              name="Email"
            />

            <input
              className="ml-6 border-b-2 border-black outline-none py-2 placeholder-black"
              placeholder="Discription"
              type="text"
              name="Discription"
            />
            <button className=" mt-4 rounded-full ml-6 mx-2 py-1  bg-black text-white">
              Contact Us
            </button>
          </div>
          <div>
            <p className="pl-40 text-xl font-semibold">Contact</p>
            <p className="pl-40 text-medium">medically112@gmail.com</p>
          </div>
        </div>
      </div> */}

        <div className="mx-10 mt-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              image={doctor.image}
              name={doctor.name}
              description={doctor.description}
              rating={doctor.rating}
              views={doctor.views}
            />
          ))}
        </div>
      </div>
      <div>
        <p className="text-center mt-24 text-2xl font-semibold">Our Services</p>
        <p className="text-center mt-2 mx-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper
          in magna quis tincidunt. Donec at nisi et eros blandit elementum
          fermentum eget augue
        </p>
        <div className="flex mx-10 justify-center items-center gap-20 mt-24">
          <div className="w-1/3">
            <SlCalender className="text-8xl text-white rounded text-center bg-[#008891] p-4" />
            <p className="font-semibold mt-2">Appointment </p>
            <ul className="list-disc mt-2 mx-4">
              <li>Set up timings without any hurdle</li>
              <li>Manage patient appointments with online</li>
              <li>Handle the queue in a waiting room instantly</li>
            </ul>
          </div>
          <div className="w-1/3">
            <FaFolder className="text-8xl m text-white rounded bg-[#008891] p-4" />
            <p className="font-semibold mt-2">Patient Records</p>
            <ul className="list-disc mt-2 mx-4">
              <li>
                Keep a track of your patient visits & history; easily and
                digitally!
              </li>
              <li>Printed prescriptions for easy understanding</li>
              <li>Improved care</li>
            </ul>
          </div>
          <div className="w-1/3">
            <MdOutlineVideoCall className="text-8xl text-white rounded bg-[#008891] p-4" />
            <p className="font-semibold mt-2">VideoCall Meet</p>
            <ul className="list-disc mt-2 mx-4">
              <li>24/7 availability</li>
              <li>Talk to any doctor around the world</li>
              <li>
                Convenient virtual consultations with trusted healthcare
                proffesionals.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-24 flex mx-10 pr-4">
        <img src={image} height={600} width={700} />
        <div>
          <p className="font-semibold text-3xl pl-4">
            We are the Leading Cloud Service Provider
          </p>
          <p className="pl-4 mt-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has.
          </p>
          <br />
          <p className="pl-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has.
          </p>
        </div>
      </div>