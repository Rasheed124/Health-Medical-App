import React from "react";

export default function CallToAction() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        <div className="relative lg:w-1/2">
          <img
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
            className="object-cover w-full lg:absolute h-80 lg:h-full"
          />
          <svg
            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
          </svg>
        </div>
        <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <div>
            <p className="inline-block px-3  py-1 mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-[#0A7DCF]">
              Brand new
            </p>
          </div>
          <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
            Enhance Your Medical Practice with HealthConnect
          </h5>
          <p className="mb-5 text-gray-800">
            <span className="font-bold">Step into the future</span> of
            healthcare with HealthConnect. Our platform is designed to
            streamline your practice, from managing patient records to digital
            prescription services. Experience
          </p>
          <p className="mb-5 text-gray-800">
            <span className="font-bold">increased efficiency, </span> improved
            patient communication, and better health outcomes. Join our network
            of healthcare professionals transforming patient care.
          </p>
         
          <div className="flex items-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#0A7DCF] hover:bg-[#0A7DCF]/80 focus:shadow-outline focus:outline-none"
            >
           Register
            </button>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-[#0A7DCF] hover:text-[#0A7DCF]"
            >
             Explore Features
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
