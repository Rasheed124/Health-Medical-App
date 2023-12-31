import React from "react";
import health6 from '../../../../src/assets/health6.jpg'
import health8 from '../../../../src/assets/health8.jpg'
import health10 from '../../../../src/assets/health10.jpg'
import { MdOutlineHealthAndSafety } from "react-icons/md";
export default function More() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-slate-100">
            <MdOutlineHealthAndSafety className=" text-[#0A7DCF] text-2xl" />
          </div>
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Control Your Health
              <br className="hidden md:block" />
              Journey with {" "}
              <span className="inline-block text-[#0A7DCF]">HealthConnect</span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Join our proactive healthcare community. HealthConnect simplifies
              health management for peace of mind.
            </p>
          </div>
          <div>
            <a
              href="/sign-up"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-[#0A7DCF] hover:text-[#0A7DCF]"
            >
              Get Started
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
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <img
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src={health10}
              alt=""
            />
            <img
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src={health6}
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src={health8}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
