import React from "react";
import health7 from '../../../../src/assets/health7.jpg'
export default function Intro() {
  return (
    <div id="intro" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Empowering Health,
              <br className="hidden md:block" />
              Simplifying Care:
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-600" />
                <span className="relative inline-block text-[#0A7DCF]">
                  Discover HealthConnect"
                </span>
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              At HealthConnect, we streamline healthcare communication, making
              it simple for patients, doctors, and pharmacies to connect. Our
              user-friendly platform empowers efficient health management
              through innovation.
            </p>
          </div>
          <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
          <div className="bg-white border-l-4 shadow-sm border-[#0A7DCF]">
              <div className="h-full p-5 border border-l-0 rounded-r">
               <h6 className="mb-2 text-lg font-semibold leading-5">For Patients:</h6>
                <p className="text-sm text-gray-900">
                  "HealthConnect simplifies my health management
                  beautifully. It's like having a personal health assistant in
                  my pocket! "
                </p>
               <p  className=" pt-3"> Emily Johnson</p>
              </div>
            </div>
            <div className="bg-white border-l-4 shadow-sm border-[#0A7DCF]">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <p className="text-sm text-gray-900">
                 <h6 className="mb-2 text-lg  font-semibold leading-5">
                  For Doctors:
                </h6>
                 "HealthConnect has transformed my patient care
                  - it’s efficient, secure, and incredibly user-friendly."
                </p>
                <p className=" pt-3"> Dr. John Smith </p>
               
              </div>
            </div>
            
          </div>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src={health7}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
