
import { FaPills, FaUser } from "react-icons/fa";
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
 import { CiPillsBottle1 } from "react-icons/ci";
import { signOut } from "firebase/auth";

import { auth } from "../../firebase";
import { useState } from "react";
import health9 from '../../../src/assets/health9.jpg'


export default function PatientSidebar() {

const [isLoggedIn, setIsLoggedIn] = useState(true);


  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Successfully signed out
        sessionStorage.removeItem("userType");
        sessionStorage.removeItem("userToken");
        setIsLoggedIn(false); // Update the state to reflect the logout
        navigate("/");
      })
      .catch((error) => {
        // Handle signout error
        console.error("Error signing out:", error);
      });
  };
    return (
      <div className="flex flex-col justify-between border-e bg-white border border-gray-[#C1C1C1] h-full">
        <div className="pt-10">
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-20 h-20   mb-3 rounded-full shadow"
              src={health9}
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
                to="/patient"
                class="flex items-center gap-2 rounded-lg py-4 px-3 text-gray-700"
              >
                <BiSolidDashboard className="text-xl" />

                <span class="text-sm font-medium"> Dashboard </span>
              </Link>
            </li>
            <li>
              <Link
                to={"/patient/book-an-appointment"}
                class="flex items-center gap-2 rounded-lg py-4 px-3 text-gray-700"
              >
                <BsPersonDash className="text-xl" />

                <span class="text-sm font-medium"> Appointemnt </span>
              </Link>
            </li>

            <li>
              <Link
                to={"/patient/medical-report"}
                class="flex items-center gap-2 rounded-lg py-4 px-3 text-gray-700"
              >
                <LuCalendarDays className="text-xl" />

                <span class="text-sm font-medium"> Medical Report </span>
              </Link>
            </li>

            <li>
              <Link
                to={"/patient/create-medication"}
                class="flex items-center gap-2 rounded-lg py-4 px-3 text-gray-700"
              >
                <TbMessageCircle2Filled className="text-xl" />

                <span class="text-sm font-medium"> Create Medication</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/patient/profile-settings"}
                class="flex items-center gap-2 rounded-lg py-4 px-3 text-gray-700"
              >
                <IoPerson className="text-xl" />

                <span class="text-sm font-medium"> Profile Settings</span>
              </Link>
            </li>

            <li>
              <Link
                to={"/patient/medication"}
                class="flex items-center gap-2 rounded-lg py-4 px-3 text-gray-700"
              >
                <FaPills className="text-xl" />
                <span class="text-sm font-medium"> Medication</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/patient/daily-medication"}
                class="flex items-center gap-2 rounded-lg py-4 px-3 text-gray-700"
              >
                <CiPillsBottle1 className="text-xl" />

                <span class="text-sm font-medium">Daily Medication</span>
              </Link>
            </li>

            <li>
              <Link
                to={"/patient/change-password"}
                class="flex items-center gap-2 rounded-lg py-4 px-3 text-gray-700"
              >
                <TbPasswordUser className="text-xl" />

                <span class="text-sm font-medium"> Change Password</span>
              </Link>
            </li>
            {isLoggedIn ? (
              <li>
                <Link
                  to={"/"}
                  onClick={handleLogout}
                  className="flex items-center gap-2 rounded-lg py-4 px-3 text-gray-700"
                >
                  <IoIosLogOut className="text-xl" />
                  <span className="text-sm font-medium"> Sign Out</span>
                </Link>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    );
}
