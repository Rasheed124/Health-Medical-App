import React from "react";
import PatientSidebar from "../components/PatientSidebar";

import { FaUpload } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

const MedicalDetails = () => {
  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-10 gap-5 h-[800px]">
          <div className="col-span-2 ">
            <PatientSidebar />
          </div>
          <div className="col-span-8 px-5 py-10 overflow-y-scroll">
            <div className="w-full">
              <div className="h-[30%] max-[767px]:h-auto  border rounded-xl border-gray-400 text-[#101010] py-4 px-4 w-[95%] max-[767px]:w-full mt-4 max-[767px]:mt-[30px] max-[767px]:grid-cols-1 mb-6 text-start">
                <h5 className="text-[#101010] p-4 font-bold border-b w-full ">
                  File Name
                </h5>
                <div className="grid grid-cols-[40%_60%] gap-4 max-[767px]:grid-cols-1">
                  <div className="py-4">
                    <input
                      className="w-[70%] border outline-none p-2 rounded-none"
                      placeholder="Musa.JPEG"
                      type="text"
                    />
                  </div>
                  <div className="flex items-center">
                    <button className=" flex items-center rounded-full text-white py-2 px-4 bg-[#0a7dcf]">
                      <FaUpload className="mr-[5px]" /> Upload File
                    </button>
                  </div>
                </div>
              </div>
              <div className="h-auto max-[767px]:h-auto  border rounded-xl border-gray-400 text-[#101010] py-4 px-4 w-[95%] max-[767px]:w-full mt-4 max-[767px]:mt-[30px] max-[767px]:grid-cols-1 mb-6 text-start">
                <h5 className="text-[#101010] p-4 font-bold border-b w-full ">
                  Details
                </h5>
                <div className="flex gap-[30%] flex-wrap">
                  <div className="flex items-center justify-center">
                    <h5 className="text-[#101010] p-4 font-bold  w-full ">
                      Teslim.JPEG
                    </h5>
                  </div>
                  <div className="flex  items-center p-4">
                    <button className=" flex items-center rounded-full text-white py-2 px-4 bg-green-500">
                      <FaEye className="mr-[5px]" /> View Record
                    </button>
                  </div>
                </div>
                <div className="flex gap-[30%] flex-wrap">
                  <div className="flex items-center justify-center">
                    <h5 className="text-[#101010] p-4 font-bold  w-full ">
                      Teslim.JPEG
                    </h5>
                  </div>
                  <div className="flex  items-center p-4">
                    <button className=" flex items-center rounded-full text-white py-2 px-4 bg-green-500">
                      <FaEye className="mr-[5px]" /> View Record
                    </button>
                  </div>
                </div>
                <div className="flex gap-[30%] flex-wrap">
                  <div className="flex items-center justify-center">
                    <h5 className="text-[#101010] p-4 font-bold  w-full ">
                      Teslim.JPEG
                    </h5>
                  </div>
                  <div className="flex  items-center p-4">
                    <button className=" flex items-center rounded-full text-white py-2 px-4 bg-green-500">
                      <FaEye className="mr-[5px]" /> View Record
                    </button>
                  </div>
                </div>
                <div className="flex gap-[30%] flex-wrap">
                  <div className="flex items-center justify-center">
                    <h5 className="text-[#101010] p-4 font-bold  w-full ">
                      Teslim.JPEG
                    </h5>
                  </div>
                  <div className="flex  items-center p-4">
                    <button className=" flex items-center rounded-full text-white py-2 px-4 bg-green-500">
                      <FaEye className="mr-[5px]" /> View Record
                    </button>
                  </div>
                </div>
                <div className="flex gap-[30%] flex-wrap">
                  <div className="flex items-center justify-center">
                    <h5 className="text-[#101010] p-4 font-bold  w-full ">
                      Teslim.JPEG
                    </h5>
                  </div>
                  <div className="flex  items-center p-4">
                    <button className=" flex items-center rounded-full text-white py-2 px-4 bg-green-500">
                      <FaEye className="mr-[5px]" /> View Record
                    </button>
                  </div>
                </div>
                <div className="flex gap-[30%] flex-wrap">
                  <div className="flex items-center justify-center">
                    <h5 className="text-[#101010] p-4 font-bold  w-full ">
                      Teslim.JPEG
                    </h5>
                  </div>
                  <div className="flex  items-center p-4">
                    <button className=" flex items-center rounded-full text-white py-2 px-4 bg-green-500">
                      <FaEye className="mr-[5px]" /> View Record
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

export default MedicalDetails;
