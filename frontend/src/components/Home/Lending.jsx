const Lending = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between py-16 px-4 lg:px-24 bg-white">
        <div className="lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Your Trusted Lending Partner
          </h2>
          <p className="text-lg text-gray-800 mb-6">
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
      <div>
        <p className="text-center mt-12 font-semibold text-2xl">Our Team</p>
      </div>
    </div>
  );
};

export default Lending;
