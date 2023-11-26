import React from "react";
import DoctorSidebar from "../components/DoctorSidebar";

import Profile from "../assets/profile.jpg";

import { IoTime } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

import { FaPhoneAlt, FaEye } from "react-icons/fa";

import { FaCheck } from "react-icons/fa6";

import { MdCancel } from "react-icons/md";

import {
  FaRegClock,
  FaRegThumbsUp,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";

import { BiDollar } from "react-icons/bi";

import { IoMdInformationCircleOutline } from "react-icons/io";

import { MdLocationOn } from "react-icons/md";


const DoctorAppointment = () => {
  return (
    <>
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-10 gap-5 h-[800px]">
            <div className="col-span-2 ">
              <DoctorSidebar />
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
                      <div className="ml-[20px]">
                        <h5 className="font-semibold flex items-center">
                          <span className="mr-[3px]">Susan Taiwo</span>
                        </h5>
                        <p className="flex mt-[10px] items-center">
                          <IoTime />
                          <span className="text-xs ml-[5px] font-medium">
                            12 Nov 2023, 5:00 PM
                          </span>{" "}
                        </p>
                        <p className="flex mt-[5px] items-center">
                          <MdLocationOn />
                          <span className="ml-[5px] text-xs font-medium">
                            Lagos, Nigeria
                          </span>
                        </p>
                        <p className="flex mt-[5px] items-center">
                          <IoMdMail />
                          <span className="ml-[5px] text-xs font-medium">
                            susantaiwo@gmail.com
                          </span>
                        </p>
                        <p className="flex mt-[5px] items-center">
                          <FaPhoneAlt />
                          <span className="ml-[5px] text-xs font-medium">
                            +234 905 000 0000
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="inline-flex gap-[5px] items-center">
                      <button className="text-[#1db9aa] flex mb-3 items-center font-medium text-[13px] bg-[#02b6b31f]  rounded-[5px] py-[4px] px-[8px]">
                        <FaEye /> <span className="ml-[3px]">View</span>
                      </button>
                      <button className="text-[#26af48] flex mb-3 items-center font-medium text-[13px] bg-[#0fb76b1f]  rounded-[5px] py-[4px] px-[8px]">
                        <FaCheck /> <span className="ml-[3px]">Accept</span>
                      </button>
                      <button className="text-[#e63c3c] flex mb-3 items-center font-medium text-[13px] bg-[#f211361f]  rounded-[5px] py-[4px] px-[8px]">
                        <MdCancel /> <span className="ml-[3px]">Cancel</span>
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
                      <div className="ml-[20px]">
                        <h5 className="font-semibold flex items-center">
                          <span className="mr-[3px]">John Ejike</span>
                        </h5>
                        <p className="flex mt-[10px] items-center">
                          <IoTime />
                          <span className="text-xs ml-[5px] font-medium">
                            11 Nov 2023, 4:00 PM
                          </span>{" "}
                        </p>
                        <p className="flex mt-[5px] items-center">
                          <MdLocationOn />
                          <span className="ml-[5px] text-xs font-medium">
                            Ikeja, Nigeria
                          </span>
                        </p>
                        <p className="flex mt-[5px] items-center">
                          <IoMdMail />
                          <span className="ml-[5px] text-xs font-medium">
                            johnejike@gmail.com
                          </span>
                        </p>
                        <p className="flex mt-[5px] items-center">
                          <FaPhoneAlt />
                          <span className="ml-[5px] text-xs font-medium">
                            +234 905 000 6755
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="inline-flex gap-[5px] items-center">
                      <button className="text-[#1db9aa] flex mb-3 items-center font-medium text-[13px] bg-[#02b6b31f]  rounded-[5px] py-[4px] px-[8px]">
                        <FaEye /> <span className="ml-[3px]">View</span>
                      </button>
                      <button className="text-[#26af48] flex mb-3 items-center font-medium text-[13px] bg-[#0fb76b1f]  rounded-[5px] py-[4px] px-[8px]">
                        <FaCheck /> <span className="ml-[3px]">Accept</span>
                      </button>
                      <button className="text-[#e63c3c] flex mb-3 items-center font-medium text-[13px] bg-[#f211361f]  rounded-[5px] py-[4px] px-[8px]">
                        <MdCancel /> <span className="ml-[3px]">Cancel</span>
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
                      <div className="ml-[20px]">
                        <h5 className="font-semibold flex items-center">
                          <span className="mr-[3px]">Razak Deola</span>
                        </h5>
                        <p className="flex mt-[10px] items-center">
                          <IoTime />
                          <span className="text-xs ml-[5px] font-medium">
                            9 Nov 2023, 9:00 PM
                          </span>{" "}
                        </p>
                        <p className="flex mt-[5px] items-center">
                          <MdLocationOn />
                          <span className="ml-[5px] text-xs font-medium">
                            Ibadan, Nigeria
                          </span>
                        </p>
                        <p className="flex mt-[5px] items-center">
                          <IoMdMail />
                          <span className="ml-[5px] text-xs font-medium">
                            razakdeola02@gmail.com
                          </span>
                        </p>
                        <p className="flex mt-[5px] items-center">
                          <FaPhoneAlt />
                          <span className="ml-[5px] text-xs font-medium">
                            +234 905 000 0000
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="inline-flex gap-[5px] items-center">
                      <button className="text-[#1db9aa] flex mb-3 items-center font-medium text-[13px] bg-[#02b6b31f]  rounded-[5px] py-[4px] px-[8px]">
                        <FaEye /> <span className="ml-[3px]">View</span>
                      </button>
                      <button className="text-[#26af48] flex mb-3 items-center font-medium text-[13px] bg-[#0fb76b1f]  rounded-[5px] py-[4px] px-[8px]">
                        <FaCheck /> <span className="ml-[3px]">Accept</span>
                      </button>
                      <button className="text-[#e63c3c] flex mb-3 items-center font-medium text-[13px] bg-[#f211361f]  rounded-[5px] py-[4px] px-[8px]">
                        <MdCancel /> <span className="ml-[3px]">Cancel</span>
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
                      <div className="ml-[20px]">
                        <h5 className="font-semibold flex items-center">
                          <span className="mr-[3px]">Jessica Williams</span>
                        </h5>
                        <p className="flex mt-[10px] items-center">
                          <IoTime />
                          <span className="text-xs ml-[5px] font-medium">
                            9 Nov 2023, 1:00 PM
                          </span>{" "}
                        </p>
                        <p className="flex mt-[5px] items-center">
                          <MdLocationOn />
                          <span className="ml-[5px] text-xs font-medium">
                            Lagos, Nigeria
                          </span>
                        </p>
                        <p className="flex mt-[5px] items-center">
                          <IoMdMail />
                          <span className="ml-[5px] text-xs font-medium">
                            jessicawilliams@gmail.com
                          </span>
                        </p>
                        <p className="flex mt-[5px] items-center">
                          <FaPhoneAlt />
                          <span className="ml-[5px] text-xs font-medium">
                            +234 905 000 0000
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="inline-flex gap-[5px] items-center">
                      <button className="text-[#1db9aa] flex mb-3 items-center font-medium text-[13px] bg-[#02b6b31f]  rounded-[5px] py-[4px] px-[8px]">
                        <FaEye /> <span className="ml-[3px]">View</span>
                      </button>
                      <button className="text-[#26af48] flex mb-3 items-center font-medium text-[13px] bg-[#0fb76b1f]  rounded-[5px] py-[4px] px-[8px]">
                        <FaCheck /> <span className="ml-[3px]">Accept</span>
                      </button>
                      <button className="text-[#e63c3c] flex mb-3 items-center font-medium text-[13px] bg-[#f211361f]  rounded-[5px] py-[4px] px-[8px]">
                        <MdCancel /> <span className="ml-[3px]">Cancel</span>
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
                      <div className="ml-[20px]">
                        <h5 className="font-semibold flex items-center">
                          <span className="mr-[3px]">Leonard Thompson</span>
                        </h5>
                        <p className="flex mt-[10px] items-center">
                          <IoTime />
                          <span className="text-xs ml-[5px] font-medium">
                            8 Nov 2023, 3:00 PM
                          </span>{" "}
                        </p>
                        <p className="flex mt-[5px] items-center">
                          <MdLocationOn />
                          <span className="ml-[5px] text-xs font-medium">
                            Lagos, Nigeria
                          </span>
                        </p>
                        <p className="flex mt-[5px] items-center">
                          <IoMdMail />
                          <span className="ml-[5px] text-xs font-medium">
                            leonardthompson@gmail.com
                          </span>
                        </p>
                        <p className="flex mt-[5px] items-center">
                          <FaPhoneAlt />
                          <span className="ml-[5px] text-xs font-medium">
                            +234 905 000 0000
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="inline-flex gap-[5px] items-center">
                      <button className="text-[#1db9aa] flex mb-3 items-center font-medium text-[13px] bg-[#02b6b31f]  rounded-[5px] py-[4px] px-[8px]">
                        <FaEye /> <span className="ml-[3px]">View</span>
                      </button>
                      <button className="text-[#26af48] flex mb-3 items-center font-medium text-[13px] bg-[#0fb76b1f]  rounded-[5px] py-[4px] px-[8px]">
                        <FaCheck /> <span className="ml-[3px]">Accept</span>
                      </button>
                      <button className="text-[#e63c3c] flex mb-3 items-center font-medium text-[13px] bg-[#f211361f]  rounded-[5px] py-[4px] px-[8px]">
                        <MdCancel /> <span className="ml-[3px]">Cancel</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorAppointment;
