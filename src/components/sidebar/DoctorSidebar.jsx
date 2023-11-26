import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiSolidDashboard } from "react-icons/bi";
import { BsPersonDash } from "react-icons/bs";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { LuCalendarDays } from "react-icons/lu";
import { GoClockFill } from "react-icons/go";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { IoStarOutline } from "react-icons/io5";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { IoPerson } from "react-icons/io5";
import { IoMdShare } from "react-icons/io";
import { TbPasswordUser } from "react-icons/tb";
import { IoIosLogOut } from "react-icons/io";

export default function DoctorSidebar() {
  return (
    <div className="flex flex-col justify-between border-e bg-white border border-gray-[#C1C1C1] h-full">
      <div className="pt-10">
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-20 h-20 mb-3 rounded-full shadow"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col items-center space-y-0.5">
            <h2 className="text-lg font-bold">Agba Teslim</h2>
            <p className="text-sm text-gray-800">Patient</p>
            <p className="text-sm font-semibold text-gray-800">
              Lagos, Nigeria
            </p>
          </div>
        </div>

        <ul className="mt-6 divide-y divide-solid">
          <li>
            <Link
              to="/doctor"
              class="flex items-center gap-2 rounded-lg py-4 px-3 text-gray-700"
            >
              <BiSolidDashboard className="text-xl" />

              <span class="text-sm font-medium"> Dashboard </span>
            </Link>
          </li>
          <li>
            <Link
              to={"/doctor/appointments"}
              class="flex items-center gap-2 rounded-lg py-4 px-3 text-gray-700"
            >
              <BsPersonDash className="text-xl" />

              <span class="text-sm font-medium"> Appointemnt </span>
            </Link>
          </li>

          <li>
            <Link
              to={"/doctor/medical-report"}
              class="flex items-center gap-2 rounded-lg py-4 px-3 text-gray-700"
            >
              <LuCalendarDays className="text-xl" />

              <span class="text-sm font-medium"> Medical Report </span>
            </Link>
          </li>

          {/* <li>
            <Link
              to={"/patient"}
              class="flex items-center gap-2 rounded-lg py-4 px-3 text-gray-700"
            >
              <TbMessageCircle2Filled className="text-xl" />

              <span class="text-sm font-medium"> Messages</span>
            </Link>
          </li> */}
          <li>
            <Link
              to={"/doctor/profile-settings"}
              class="flex items-center gap-2 rounded-lg py-4 px-3 text-gray-700"
            >
              <IoPerson className="text-xl" />

              <span class="text-sm font-medium"> Profile Settings</span>
            </Link>
          </li>

          <li>
            <Link
              to={"/doctor/change-password"}
              class="flex items-center gap-2 rounded-lg py-4 px-3 text-gray-700"
            >
              <TbPasswordUser className="text-xl" />

              <span class="text-sm font-medium"> Change Password</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/"}
              class="flex items-center gap-2 rounded-lg py-4 px-3 text-gray-700"
            >
              <IoIosLogOut className="text-xl" />

              <span class="text-sm font-medium"> Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
