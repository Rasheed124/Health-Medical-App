import React from "react";
import health from "../../src/assets/Health.png";
import { FaInstagram, FaLinkedinIn, FaFacebook } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-slate-100">
      <div className=" py-10 px-6">
        <div className="grid lg:max-w-[900px] sl:max-w-[1200px] m-auto md:grid-cols-2 gap-10 px-6 sl:px-0  ">
          <div className=" max-w-[400px]">
            <img src={health} alt="" />
            <p className=" pt-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
              repudiandae maiores sint veniam suscipit quis aperiam. Alias natus
              magnam repellat.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 lg:grid-cols-3 max-w-[500px] ">
            <div>
              <p className="font-medium text-[1.2rem] tracking-wide text-[#0A7DCF]">
                For Patients
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Search for Doctors
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
              <p className="font-medium tracking-wide text-[1.2rem] text-[#0A7DCF]">
                For Doctors
              </p>
              <ul className="mt-2 space-y-2">
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
              <p className="font-medium tracking-wide text-[1.2rem] text-[#0A7DCF]">
                Contact Us
              </p>
              <ul className="mt-2 space-y-2">
                <li>No 16 , Yaba Lagos</li>
                <li>+2349093307101</li>
                <li>info@HealthConnect.com</li>
              </ul>
            </div>
          </div>
          <div className=" max-w-[400px]">
            <span className=" text-[#0A7DCF] text-xl">
              Subscribe for updates
            </span>
            <form className=" flex gap-2 pt-2 ">
              <input
                placeholder="Email"
                required
                type="email"
                className=" py-2 pl-3 w-full border border-[#0A7DCF] outline-[#0A7DCF] "
              />
              <button
                type="submit"
                className=" bg-[#0A7DCF] py-2 px-5 rounded-md text-white"
              >
                Subscribe
              </button>
            </form>
            <div className=" flex gap-3 pt-4 pb-6">
              <FaFacebook className=" text-2xl text-[#0A7DCF] " />
              <FaInstagram className=" text-2xl text-[#0A7DCF]" />
              <FaLinkedinIn className=" text-2xl text-[#0A7DCF]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between pt-5  max-w-[1200px] m-auto border-t text-center md:text-start border-[#0A7DCF] sm:flex-row">
          <p className="text-[1rem]  text-[#0A7DCF]">
            © Copyright 2020 Lorem Inc. All rights reserved.
          </p>
          <div className="">
            <ul className=" flex   flex-col md:flex-row gap-3">
              <li className=" border-r pr-3 text-[#0A7DCF] border-black">
                <a href="/">Privacy Policy</a>
              </li>
              <li className="text-[#0A7DCF]">
                <a href="/">Terms and Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
