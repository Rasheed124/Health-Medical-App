import { GrFormView } from "react-icons/gr";
import { IoCheckmark } from "react-icons/io5";
import { FaCheck, FaEye, FaTimes } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

export default function Home() {
  return (
    <>
      <div class="px-4  ">
        {/* <div class="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100 border-2">
          <div class="flex flex-col px-4 py-8 text-center"></div>

          <div class="flex flex-col px-4 py-8 text-center"></div>
        </div> */}
        <h3 className="py-5">Patient Appointment</h3>

        <div class="space-x-6 pb-5">
          <a
            className="inline-block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
            href="/download"
          >
            Upcomings
          </a>
          <p className="inline-block rounded ">Today</p>
        </div>

        <div className="border-2 ">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 text-center divide-gray-200 bg-white text-sm">
              <thead className="">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Patient Name
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    App Date
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Purpose
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Type
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Paid Amount
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Action
                  </th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    <div className="flex">
                      <img
                        className="object-cover w-14 h-14 mr-4 rounded-full shadow"
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                        alt="Person"
                      />
                      <div className="flex flex-col items-start justify-center">
                        <p className="text-lg font-bold">Oliver Aguilerra</p>
                        <p className="text-sm text-gray-800">Product Manager</p>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    24/05/1995
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    Web Developer
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    $120,000
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    $120,000
                  </td>
                  <td className="whitespace-nowrap px-4 space-x-2 py-2">
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
                   
                  </td>
                </tr>
          
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    <div className="flex">
                      <img
                        className="object-cover w-14 h-14 mr-4 rounded-full shadow"
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                        alt="Person"
                      />
                      <div className="flex flex-col items-start justify-center">
                        <p className="text-lg font-bold">Oliver Aguilerra</p>
                        <p className="text-sm text-gray-800">Product Manager</p>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    24/05/1995
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    Web Developer
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    $120,000
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    $120,000
                  </td>
                  <td className="whitespace-nowrap px-4 space-x-2 py-2">
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
                   
                  </td>
                </tr>
          
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
