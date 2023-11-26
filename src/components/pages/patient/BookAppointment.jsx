import React from 'react'
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

export default function BookAppointment() {
  return (
    <>
      <div className="w-full">
        <div className="h-auto max-[767px]:h-auto  border rounded-xl border-gray-400 text-[#101010] py-4 px-4 w-[95%] max-[767px]:w-full mt-4 max-[767px]:mt-[30px] max-[767px]:grid-cols-1 mb-6 text-start">
          <div className="flex items-center max-[767px]:flex-wrap gap-6 max-[767px]:justify-center justify-between">
            <div className="flex max-[767px]:flex-wrap justify-center items-center">
              <div>
                <img
                  className="object-cover w-14 h-14 mr-4 rounded-full shadow"
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                  alt="Person"
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
                    <a className="text-[#0a7dcf] text-xs font-medium" href="">
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
                  <span className="text-xs font-medium">(35 Reviews)</span>
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
                <span className="ml-[12px] font-medium"> 98% (252 Votes)</span>
              </p>
              <p className="flex mb-3 items-center">
                {" "}
                <BiDollar className=" text-[20px]" />{" "}
                <span className="ml-[12px] mr-[5px] font-medium"> $1500 </span>{" "}
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
    </>
  );
}
