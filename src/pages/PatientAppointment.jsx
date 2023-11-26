import React from "react";
import PatientSidebar from "../components/PatientSidebar";

import Profile from "../assets/profile.jpg";

import { FiAward } from "react-icons/fi";

import {
  FaRegClock,
  FaRegThumbsUp,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";

import { BiDollar } from "react-icons/bi";

import { IoMdInformationCircleOutline } from "react-icons/io";

import { MdLocationOn } from "react-icons/md";

const PatientAppointment = () => {
  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-10 gap-5 h-[800px]">
          <div className="col-span-2 ">
            <PatientSidebar />
          </div>
          <div className="col-span-8 px-5 py-10 overflow-y-scroll">
            <div className="w-full">
              <div className="h-auto max-[767px]:h-auto  border rounded-xl border-gray-400 text-[#101010] py-4 px-4 w-[95%] max-[767px]:w-full mt-4 max-[767px]:mt-[30px] max-[767px]:grid-cols-1 mb-6 text-start">
                <div className="flex items-center max-[767px]:flex-wrap gap-6 max-[767px]:justify-center justify-between">
                  <div className="flex max-[767px]:flex-wrap justify-center items-center">
                    <div>
                      <img
                        className="w-[150px] h-[150px]"
                        src={Profile}
                        alt=""
                      />
                    </div>
                    <div className="ml-[10px]">
                      <h5 className="font-semibold flex items-center">
                        <span className="mr-[3px]">Dr. Rasheed Balogun</span>
                        <FaCheckCircle className="text-green-700" />
                      </h5>
                      <p className="text-xs">Dentist</p>
                      <p className="flex mt-[10px] items-center">
                        <MdLocationOn />
                        <span className="text-xs ml-[5px] font-medium">
                          0.9 mi - Ogba, Lagos
                        </span>{" "}
                        <span className="ml-[3px]">
                          <a
                            className="text-[#0a7dcf] text-xs font-medium"
                            href=""
                          >
                            {" "}
                            Get Direction
                          </a>
                        </span>
                      </p>
                      <p className="flex mt-[5px] items-center">
                        <FiAward />
                        <span className="ml-[5px] text-xs font-medium">
                          15 Years of Experience
                        </span>
                      </p>
                      <p className="flex mt-[10px] gap-2 items-center">
                        <span className="flex bg-yellow-600 rounded-[5px] text-sm  px-2 text-white items-center">
                          <FaStar className="mr-[5px] " /> 4.5
                        </span>
                        <span className="text-xs font-medium">
                          (35 Reviews)
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <p className="flex mb-3 items-center">
                      {" "}
                      <FaRegClock className="text-[20px]" />{" "}
                      <span className="bg-green-400 text-green-800 rounded-[5px] ml-[12px] py-1 font-medium px-2">
                        {" "}
                        Available Today
                      </span>
                    </p>
                    <p className="flex mb-3 items-center">
                      {" "}
                      <FaRegThumbsUp className=" text-[20px]" />{" "}
                      <span className="ml-[12px] font-medium">
                        {" "}
                        98% (252 Votes)
                      </span>
                    </p>
                    <p className="flex mb-3 items-center">
                      {" "}
                      <BiDollar className=" text-[20px]" />{" "}
                      <span className="ml-[12px] mr-[5px] font-medium">
                        {" "}
                        $1500{" "}
                      </span>{" "}
                      <IoMdInformationCircleOutline className=" text-[20px]" />{" "}
                    </p>
                    <button className="bg-[#0a7dcf] mb-3 font-medium text-white rounded-[5px] py-2 px-4">
                      Book Appointment
                    </button>
                    <button className="border border-[#0a7dcf] font-medium bg-white text-[#0a7dcf] rounded-[5px] py-2 px-4">
                      Book Online Consultation
                    </button>
                  </div>
                </div>
              </div>
              <div className="h-auto max-[767px]:h-auto  border rounded-xl border-gray-400 text-[#101010] py-4 px-4 w-[95%] max-[767px]:w-full mt-4 max-[767px]:mt-[30px] max-[767px]:grid-cols-1 mb-6 text-start">
                <div className="flex items-center max-[767px]:flex-wrap gap-6 max-[767px]:justify-center justify-between">
                  <div className="flex max-[767px]:flex-wrap justify-center items-center">
                    <div>
                      <img
                        className="w-[150px] h-[150px]"
                        src={Profile}
                        alt=""
                      />
                    </div>
                    <div className="ml-[10px]">
                      <h5 className="font-bold flex items-center">
                        <span className="mr-[3px]">Dr. Faruq Basit</span>
                        <FaCheckCircle className="text-green-700" />
                      </h5>
                      <p className="text-xs">Cardiologist</p>
                      <p className="flex mt-[10px] items-center">
                        <MdLocationOn />
                        <span className="text-xs ml-[5px] font-medium">
                          0.4 mi - Aguda, Lagos
                        </span>{" "}
                        <span className="ml-[3px]">
                          <a
                            className="text-[#0a7dcf] text-xs font-medium"
                            href=""
                          >
                            {" "}
                            Get Direction
                          </a>
                        </span>
                      </p>
                      <p className="flex mt-[5px] items-center">
                        <FiAward />
                        <span className="ml-[5px] text-xs font-medium">
                          20 Years of Experience
                        </span>
                      </p>
                      <p className="flex mt-[10px] gap-2 items-center">
                        <span className="flex bg-yellow-600 rounded-[5px] text-sm  px-2 text-white items-center">
                          <FaStar className="mr-[5px] " /> 4.3
                        </span>
                        <span className="text-xs font-medium">
                          (41 Reviews)
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <p className="flex mb-3 items-center">
                      {" "}
                      <FaRegClock className="text-[20px]" />{" "}
                      <span className="text-[#bd4000] bg-[#d9964e] rounded-[5px] ml-[12px] py-1 font-medium px-2">
                        {" "}
                        Available Tomorrow
                      </span>
                    </p>
                    <p className="flex mb-3 items-center">
                      {" "}
                      <FaRegThumbsUp className=" text-[20px]" />{" "}
                      <span className="ml-[12px] font-medium">
                        {" "}
                        91% (360 Votes)
                      </span>
                    </p>
                    <p className="flex mb-3 items-center">
                      {" "}
                      <BiDollar className=" text-[20px]" />{" "}
                      <span className="ml-[12px] mr-[5px] font-medium">
                        {" "}
                        $2500{" "}
                      </span>{" "}
                      <IoMdInformationCircleOutline className=" text-[20px]" />{" "}
                    </p>
                    <button className=" mb-3 font-medium bg-[#0a7dcf] text-white rounded-[5px] py-2 px-4">
                      Book Appointment
                    </button>
                    <button className="border border-[#0a7dcf] font-medium bg-white text-[#0a7dcf] rounded-[5px] py-2 px-4">
                      Book Online Consultation
                    </button>
                  </div>
                </div>
              </div>
              <div className="h-auto max-[767px]:h-auto  border rounded-xl border-gray-400 text-[#101010] py-4 px-4 w-[95%] max-[767px]:w-full mt-4 max-[767px]:mt-[30px] max-[767px]:grid-cols-1 mb-6 text-start">
                <div className="flex items-center max-[767px]:flex-wrap gap-6 max-[767px]:justify-center justify-between">
                  <div className="flex max-[767px]:flex-wrap justify-center items-center">
                    <div>
                      <img
                        className="w-[150px] h-[150px]"
                        src={Profile}
                        alt=""
                      />
                    </div>
                    <div className="ml-[10px]">
                      <h5 className="font-bold flex items-center">
                        <span className="mr-[3px]">Dr. Qudus Malik</span>
                        <FaCheckCircle className="text-green-700" />
                      </h5>
                      <p className="text-xs">Opthamologist</p>
                      <p className="flex mt-[10px] items-center">
                        <MdLocationOn />
                        <span className="text-xs ml-[5px] font-medium">
                          0.2 mi - Ketu, Lagos
                        </span>{" "}
                        <span className="ml-[3px]">
                          <a
                            className="text-[#0a7dcf] text-xs font-medium"
                            href=""
                          >
                            {" "}
                            Get Direction
                          </a>
                        </span>
                      </p>
                      <p className="flex mt-[5px] items-center">
                        <FiAward />
                        <span className="ml-[5px] text-xs font-medium">
                          10 Years of Experience
                        </span>
                      </p>
                      <p className="flex mt-[10px] gap-2 items-center">
                        <span className="flex bg-yellow-600 rounded-[5px] text-sm  px-2 text-white items-center">
                          <FaStar className="mr-[5px] " /> 4.7
                        </span>
                        <span className="text-xs font-medium">
                          (39 Reviews)
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <p className="flex mb-3 items-center">
                      {" "}
                      <FaRegClock className="text-[20px]" />{" "}
                      <span className="bg-green-400 text-green-800 rounded-[5px] ml-[12px] py-1 font-medium px-2">
                        {" "}
                        Available Today
                      </span>
                    </p>
                    <p className="flex mb-3 items-center">
                      {" "}
                      <FaRegThumbsUp className=" text-[20px]" />{" "}
                      <span className="ml-[12px] font-medium">
                        {" "}
                        98% (252 Votes)
                      </span>
                    </p>
                    <p className="flex mb-3 items-center">
                      {" "}
                      <BiDollar className=" text-[20px]" />{" "}
                      <span className="ml-[12px] mr-[5px] font-medium">
                        {" "}
                        $1500{" "}
                      </span>{" "}
                      <IoMdInformationCircleOutline className=" text-[20px]" />{" "}
                    </p>
                    <button className="bg-[#0a7dcf] mb-3 font-medium text-white rounded-[5px] py-2 px-4">
                      Book Appointment
                    </button>
                    <button className="border border-[#0a7dcf] font-medium bg-white text-[#0a7dcf] rounded-[5px] py-2 px-4">
                      Book Online Consultation
                    </button>
                  </div>
                </div>
              </div>
              <div className="h-auto max-[767px]:h-auto  border rounded-xl border-gray-400 text-[#101010] py-4 px-4 w-[95%] max-[767px]:w-full mt-4 max-[767px]:mt-[30px] max-[767px]:grid-cols-1 mb-6 text-start">
                <div className="flex items-center max-[767px]:flex-wrap gap-6 max-[767px]:justify-center justify-between">
                  <div className="flex max-[767px]:flex-wrap justify-center items-center">
                    <div>
                      <img
                        className="w-[150px] h-[150px]"
                        src={Profile}
                        alt=""
                      />
                    </div>
                    <div className="ml-[10px]">
                      <h5 className="font-bold flex items-center">
                        <span className="mr-[3px]">Dr. Deborah Angel</span>
                        <FaCheckCircle className="text-green-700" />
                      </h5>
                      <p className="text-xs">Neurologist</p>
                      <p className="flex mt-[10px] items-center">
                        <MdLocationOn />
                        <span className="text-xs ml-[5px] font-medium">
                          1.9 mi - Yaba, Lagos
                        </span>{" "}
                        <span className="ml-[3px]">
                          <a
                            className="text-[#0a7dcf] text-xs font-medium"
                            href=""
                          >
                            {" "}
                            Get Direction
                          </a>
                        </span>
                      </p>
                      <p className="flex mt-[5px] items-center">
                        <FiAward />
                        <span className="ml-[5px] text-xs font-medium">
                          30 Years of Experience
                        </span>
                      </p>
                      <p className="flex mt-[10px] gap-2 items-center">
                        <span className="flex bg-yellow-600 rounded-[5px] text-sm  px-2 text-white items-center">
                          <FaStar className="mr-[5px] " /> 4.2
                        </span>
                        <span className="text-xs font-medium">
                          (45 Reviews)
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <p className="flex mb-3 items-center">
                      {" "}
                      <FaRegClock className="text-[20px]" />{" "}
                      <span className="bg-green-400 text-green-800 rounded-[5px] ml-[12px] py-1 font-medium px-2">
                        {" "}
                        Available Today
                      </span>
                    </p>
                    <p className="flex mb-3 items-center">
                      {" "}
                      <FaRegThumbsUp className=" text-[20px]" />{" "}
                      <span className="ml-[12px] font-medium">
                        {" "}
                        98% (252 Votes)
                      </span>
                    </p>
                    <p className="flex mb-3 items-center">
                      {" "}
                      <BiDollar className=" text-[20px]" />{" "}
                      <span className="ml-[12px] mr-[5px] font-medium">
                        {" "}
                        $1500{" "}
                      </span>{" "}
                      <IoMdInformationCircleOutline className=" text-[20px]" />{" "}
                    </p>
                    <button className="bg-[#0a7dcf] mb-3 font-medium text-white rounded-[5px] py-2 px-4">
                      Book Appointment
                    </button>
                    <button className="border border-[#0a7dcf] font-medium bg-white text-[#0a7dcf] rounded-[5px] py-2 px-4">
                      Book Online Consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientAppointment;
