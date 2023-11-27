import { GrFormView } from "react-icons/gr";
import { IoCheckmark } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import { GiPawHeart } from "react-icons/gi";
import { RiPrinterFill } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <div class=" px-4  ">
        <div class="grid grid-cols-1 gap-4  sm:grid-cols-4 sm:divide-x sm:divide-gray-100 border-2">
          <div class="flex flex-col px-3 py-8 text-center">
            <div className="flex flex-col items-center">
              <GiPawHeart className="text-6xl text-red-600" />
              <div className="flex flex-col items-center">
                <p className="text-lg font-bold">Oliver Aguilerra</p>
                <p className="text-sm text-gray-800">Product Manager</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col px-3 py-8 text-center">
            <div className="flex flex-col items-center">
              <GiPawHeart className="text-6xl text-red-600" />
              <div className="flex flex-col items-center">
                <p className="text-lg font-bold">Oliver Aguilerra</p>
                <p className="text-sm text-gray-800">Product Manager</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col px-3 py-8 text-center">
            <div className="flex flex-col items-center">
              <GiPawHeart className="text-6xl text-red-600" />
              <div className="flex flex-col items-center">
                <p className="text-lg font-bold">Oliver Aguilerra</p>
                <p className="text-sm text-gray-800">Product Manager</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col px-3 py-8 text-center">
            <div className="flex flex-col items-center">
              <GiPawHeart className="text-6xl text-red-600" />
              <div className="flex flex-col items-center">
                <p className="text-lg font-bold">Oliver Aguilerra</p>
                <p className="text-sm text-gray-800">Product Manager</p>
              </div>
            </div>
          </div>
        </div>

        {/* Patient Status */}
        <div class="border-2 my-7 p-3">
          <h3 className="py-5 font-semibold">Graph Status</h3>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 border-t-2 py-10 lg:gap-8">
            <div className="flex flex-col justify-center py-2 items-center rounded-lg space-y-2 bg-red-200">
              <p className="text-lg font-bold">BMI Status</p>
              <div className="flex flex-col items-center">
                <GiPawHeart className="text-4xl text-red-600" />
              </div>
              <p className="text-sm text-gray-800">Product Manager</p>
            </div>
            <div className="flex flex-col justify-center py-2 items-center rounded-lg space-y-2 bg-green-200">
              <p className="text-lg font-bold">BMI Status</p>
              <div className="flex flex-col items-center">
                <GiPawHeart className="text-4xl text-red-600" />
              </div>
              <p className="text-sm text-gray-800">Product Manager</p>
            </div>
            <div className="flex flex-col justify-center py-2 items-center rounded-lg space-y-2 bg-purple-200">
              <p className="text-lg font-bold">BMI Status</p>
              <div className="flex flex-col items-center">
                <GiPawHeart className="text-4xl text-red-600" />
              </div>
              <p className="text-sm text-gray-800">Product Manager</p>
            </div>
            <div className="flex flex-col justify-center py-2 items-center rounded-lg space-y-2 bg-blue-200">
              <p className="text-lg font-bold">BMI Status</p>
              <div className="flex flex-col items-center">
                <GiPawHeart className="text-4xl text-red-600" />
              </div>
              <p className="text-sm text-gray-800">Product Manager</p>
            </div>
          </div>

          {/* <div class="flex flex-col px-3 py-8 text-center">
                    <div className="flex flex-col items-center">
                      <GiPawHeart className="text-6xl text-red-600" />
                      <div className="flex flex-col items-center">
                        <p className="text-lg font-bold">Oliver Aguilerra</p>
                        <p className="text-sm text-gray-800">Product Manager</p>
                      </div>
                    </div>
                  </div>
              */}
        </div>

        <div class="space-x-6 pb-5 border-2 p-2">
          <div className="  w-full">
            <div className="sm:hidden">
              <label htmlFor="Tab" className="sr-only">
                Tab
              </label>

              <select id="Tab" className="w-full rounded-md border-gray-200">
                <option>Settings</option>
                <option>Messages</option>
                <option>Archive</option>
                <option select>Notifications</option>
              </select>
            </div>

            <div className="hidden sm:block">
              <div className="border-b border-gray-200 w-full">
                <nav
                  className="-mb-px flex  lg:justify-between lg:items-center w-full gap-6"
                  aria-label="Tabs"
                >
                  <a
                    href="#"
                    className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Appointment
                  </a>

                  <a
                    href="#"
                    className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Prescriptions
                  </a>

                  <a
                    href="#"
                    className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Medical Records
                  </a>

                  <a
                    href="#"
                    className="shrink-0 border-b-2 border-sky-500 px-1 pb-4 text-sm font-medium text-sky-600"
                    aria-current="page"
                  >
                    Billing
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="border-2 p-2">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 text-center divide-gray-200 bg-white text-sm">
              <thead className="">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Doctor
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Appt Date
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Medical Records
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Booking Date
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Amount
                  </th>

                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Follow up
                  </th>

                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Status
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
                        <p className="max-[991px]:text-sm text-lg font-bold">Oliver <br /> Aguilerra</p>
                        <p className="text-sm text-gray-800">Product Manager</p>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-left">
                    24/05/1995
                    <p className="text-blue-400 "> 10:00Am </p>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    Web Developer
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
                    <a
                      class="inline-flex items-center gap-2 rounded border border-indigo-600 bg-indigo-600/70 px-4 py-2 text-xs font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                      href="/download"
                    >
                      <span class="text-sm font-medium"> Confirm </span>
                    </a>
                  </td>
                  <td className="whitespace-nowrap px-4 space-x-2 py-2">
                    <a
                      class="inline-flex items-center gap-2 rounded border border-indigo-600 bg-indigo-600/70 px-4 py-2 text-xs font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                      href="/download"
                    >
                      <RiPrinterFill className="text-xl" />

                      <span class="text-sm font-medium"> Print </span>
                    </a>
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
