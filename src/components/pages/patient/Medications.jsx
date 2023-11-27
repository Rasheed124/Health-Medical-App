
import { GrFormView } from "react-icons/gr";
import { IoCheckmark } from "react-icons/io5";
import { FaCheck, FaEye, FaTimes } from "react-icons/fa";
import { GiPawHeart } from "react-icons/gi";
import { RiPrinterFill } from "react-icons/ri";
import { MdCancel } from "react-icons/md";

import { format } from "date-fns";

import React, { useEffect, useState } from "react";
import axios from "axios";

  export default function Medications() {
    const [medications, setMedications] = useState([]);
        const token =  sessionStorage.getItem("userToken");
        // console.log(token);
    useEffect(() => {
      axios
        .get("https://health-connect-cd7q.onrender.com/api/v1/medication", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setMedications(response.data);
          
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, [token]); 

    // console.log(medications)


    
    return (
      <>
        <div class="mx-auto max-w-screen-xl px-4  ">
          {/* <div class="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100 border-2">
            <div class="flex flex-col px-4 py-8 text-center"></div>

            <div class="flex flex-col px-4 py-8 text-center"></div>
          </div> */}
          <h3 className="py-5">Patient Appointment</h3>

          {/* <div class="space-x-6 pb-5">
            <a
              className="inline-block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              href="/download"
            >
              Upcomings
            </a>
            <p className="inline-block rounded ">Today</p>
          </div> */}

          <div className="border-2 ">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y-2 text-center divide-gray-200 bg-white text-sm">
                <thead className="text-left">
                  <tr>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Name
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Start Date
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      End Date
                    </th>

                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Aside By
                    </th>
                    <th className="px-4 py-2"></th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-left">
                  {medications.medications?.map((medication) => (
                    <tr key={medication._id}>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {medication.name}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {format(new Date(medication.startdate), "MM/dd/yyyy")}

                    
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {format(new Date(medication.enddate), "MM/dd/yyyy")}

                      </td>

                      <td className="whitespace-nowrap px-4 space-x-2 py-2">
                        <div className="inline-flex gap-[5px] items-center">
                          <button className="text-[#1db9aa] flex mb-3 items-center font-medium text-[13px] bg-[#02b6b31f]  rounded-[5px] py-[4px] px-[8px]">
                            <FaEye />
                          </button>
                          <button className="text-[#26af48] flex mb-3 items-center font-medium text-[13px] bg-[#0fb76b1f]  rounded-[5px] py-[4px] px-[8px]">
                            <FaCheck />
                          </button>
                          <button className="text-[#e63c3c] flex mb-3 items-center font-medium text-[13px] bg-[#f211361f]  rounded-[5px] py-[4px] px-[8px]">
                            <MdCancel />{" "}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  };


