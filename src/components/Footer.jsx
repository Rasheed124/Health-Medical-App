import React from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-slate-100">
      <div className=" py-10">
        <div className="grid   md:grid-cols-2 max-w-[1200px] m-auto px-6 gap-10  ">
          <div className=" max-w-[400px]">
            <h2 className="text-[#0A7DCF] text-2xl md:text-3xl lg:text-4xl font-bold">HealthConnect</h2>
            <p className=" text-[1rem] pt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit voluptate quisquam voluptas pariatur nulla cumque!
            </p>
          </div>
          <div className="grid  max-w-[600px]   gap-10 md:grid-cols-2 lg:grid-cols-3   ">
            <div>
              <p className="font-medium text-xl tracking-wide text-[#0A7DCF]">
                For Patients
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Seach for doctors
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Register
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wide text-xl text-[#0A7DCF]">
                For Doctors
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Appointments
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Chat
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wide text-xl text-[#0A7DCF]">
                Contact Us
              </p>
              <ul className="mt-3 space-y-2">
                <li>No 15 Yaba, Lagos. </li>
                <li>+2349097101</li>
                <li>info@HealthConnect.com</li>
              </ul>
            </div>
          </div>
          <div className=" w-full pb-8">
            <span className="  text-[#0A7DCF] text-xl">
              Subscribe for updates
            </span>
            <form className=" max-w-[400px] flex gap-2 pt-3">
              <input placeholder="Email" required type="Email" className=" py-2 pl-3 w-full border border-[#0A7DCF] outline-[#0A7DCF]" />
              <button type="submit" className="  bg-[#0A7DCF] py-2 px-5 rounded-md text-white">
                Subscribe
              </button>
            </form>
            <div className=" flex gap-3  pt-6">
              <FaFacebook className=" text-2xl text-[#0A7DCF]" />
              <FaInstagram className=" text-2xl text-[#0A7DCF]" />
              <FaLinkedinIn className=" text-2xl text-[#0A7DCF]" />
            </div>
          </div>
        </div>
       <div className=" px-6">
         <div className="flex flex-col md:flex-row text-center md:text-start  justify-between max-w-[1200px] m-auto pt-5 border-t border-[#0A7DCF] ">
          <p className="text-[1rem] text-[#0A7DCF]">
            © Copyright 2020 Lorem Inc. All rights reserved.
          </p>
          <div className="">
            <ul className=" flex flex-col md:flex-row gap-2 ">
              <li className=" md:border-r  text-[#0A7DCF] border-black pr-3"><a href="/">Privacy Policy</a></li>
              <li className=" text-[#0A7DCF]"><a href="/">Terms and Conditions</a></li>
            </ul>
          </div>
        </div>
       </div>
      </div>
    </footer>
  );
}
