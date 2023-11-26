import React from 'react'
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function PatientSidebar() {
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
                <h2 className="text-lg font-bold">Patient Aguilerra</h2>
                <p className="text-sm text-gray-800">Product Manager</p>
                <p className="text-sm font-semibold text-gray-800">Product Manager</p>
            </div>
            </div>
        
            <ul className="mt-6 divide-y divide-solid">
            <li>
                <Link
                to="/"
                class="flex items-center gap-3 rounded-lg py-4 px-3 text-gray-700"
                >
                <FaUser />

                <span class="text-sm font-medium"> Dashboard </span>
                </Link>
            </li>
            <li>
                <Link
                to="/profile-setting"
                class="flex items-center gap-3 rounded-lg py-4 px-3 text-gray-700"
                >
                <FaUser />

                <span class="text-sm font-medium"> Profile Setting </span>
                </Link>
            </li>
            <li>
                <Link
                to="/book-an-appointment"
                class="flex items-center gap-3 rounded-lg py-4 px-3 text-gray-700"
                >
                <FaUser />

                <span class="text-sm font-medium"> Book an Appointment </span>
                </Link>
            </li>
            </ul>
        </div>
        
        </div>
    )
}
