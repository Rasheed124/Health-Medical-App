import React from 'react'
import { BiSolidConversation } from "react-icons/bi";
import { DiStreamline } from "react-icons/di";
import { MdTimer,  MdConnectWithoutContact ,MdManageAccounts} from "react-icons/md";
import { VscGraphLine } from "react-icons/vsc";
import { FaCalendarAlt } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";


export default function Features() {
  return (
        <div className="bg-slate-100">
            <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
                <svg
                    viewBox="0 0 88 88"
                    className="w-full max-w-screen-xl text-slate-100"
                >
                    <circle fill="currentColor" cx="44" cy="44" r="15.5" />
                    <circle
                    fillOpacity="0.2"
                    fill="currentColor"
                    cx="44"
                    cy="44"
                    r="44"
                    />
                    <circle
                    fillOpacity="0.2"
                    fill="currentColor"
                    cx="44"
                    cy="44"
                    r="37.5"
                    />
                    <circle
                    fillOpacity="0.3"
                    fill="currentColor"
                    cx="44"
                    cy="44"
                    r="29.5"
                    />
                    <circle
                    fillOpacity="0.3"
                    fill="currentColor"
                    cx="44"
                    cy="44"
                    r="22.5"
                    />
                </svg>
                </div>
                <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                    <div className="p-5">
                    <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-slate-100">
                        <BiSolidConversation className=' text-[#0A7DCF] text-2xl'/>
                    </div>
                    <p className="mb-2 font-bold">Effortless and Confidential Conversations Between Patients and Doctors</p>
                    <p className="text-sm leading-5 text-gray-900">
                           - HealthConnect offers a secure platform for private discussions, ensuring your health information stays confidential and accessible only to you and your healthcare provider.
                    </p>
                    </div>
                    <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-[#0A7DCF] group-hover:scale-x-100" />
                </div>
                <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                    <div className="p-5">
                    <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-slate-100">
                        <DiStreamline className=' text-[#0A7DCF] text-2xl'/>
                    </div>
                    <p className="mb-2 font-bold"> Streamlined Prescription Handling from Doctors to Pharmacies</p>
                    <p className="text-sm leading-5 text-gray-900">
                        Facilitates the seamless transfer of prescriptions from doctors to pharmacies, reducing errors and saving time for patients and healthcare professionals alike.
                    </p>
                    </div>
                    <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-[#0A7DCF] group-hover:scale-x-100" />
                </div>
                <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                    <div className="p-5">
                    <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-slate-100">
                       <MdTimer className=' text-[#0A7DCF] text-2xl'/>
                    </div>
                    <p className="mb-2 font-bold">Never Miss a Dose with Timely Medication Alerts</p>
                    <p className="text-sm leading-5 text-gray-900">
                        Our system sends out reminders for medication times, helping you stay on track with your treatment plan without the stress of remembering every detail.
                    </p>
                    </div>
                    <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-[#0A7DCF] group-hover:scale-x-100" />
                </div>
                <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                    <div className="p-5">
                    <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-slate-100">
                        <VscGraphLine  className=' text-[#0A7DCF] text-2xl'/>
                    </div>
                    <p className="mb-2 font-bold">Monitor Your Health Progress with Ease</p>
                    <p className="text-sm leading-5 text-gray-900">
                       Track and monitor your health challenges, set goals, and view your progress over time, enabling a proactive approach to your wellbeing.
                    </p>
                    </div>
                    <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-[#0A7DCF] group-hover:scale-x-100" />
                </div>
                <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                    <div className="p-5">
                    <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-slate-100">
                       <MdConnectWithoutContact  className=' text-[#0A7DCF] text-2xl' />
                    </div>
                    <p className="mb-2 font-bold">Connect with Your Doctor Anytime, Anywhere</p>
                    <p className="text-sm leading-5 text-gray-900">
                       Provides a platform for scheduling appointments, teleconsultations, and direct messaging with healthcare providers, offering convenience and flexibility
                    </p>
                    </div>
                    <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-[#0A7DCF] group-hover:scale-x-100" />
                </div>
                <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                    <div className="p-5">
                    <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-slate-100">
                        <GiMedicines  className=' text-[#0A7DCF] text-2xl'/>
                    </div>
                    <p className="mb-2 font-bold">Hassle-Free Prescription Fulfilment</p>
                    <p className="text-sm leading-5 text-gray-900">
                       - Direct integration with pharmacies streamlines the process of prescription fulfilment, making medication pickup or delivery more efficient
                    </p>
                    </div>
                    <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-[#0A7DCF] group-hover:scale-x-100" />
                </div>
                <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                    <div className="p-5">
                    <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-slate-100">
                        <FaCalendarAlt className=' text-[#0A7DCF] text-2xl'/>
                    </div>
                    <p className="mb-2 font-bold">Simplify Your Health Calendar</p>
                    <p className="text-sm leading-5 text-gray-900">
                       Easy-to-use appointment scheduling tool that helps you book and manage your healthcare appointments without the back-and-forth.
                    </p>
                    </div>
                    <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-[#0A7DCF] group-hover:scale-x-100" />
                </div>
                <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                    <div className="p-5">
                    <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-slate-100">
                       <MdManageAccounts  className=' text-[#0A7DCF] text-2xl'/>
                    </div>
                    <p className="mb-2 font-bold">Simplifying Health Management with Intuitive Design</p>
                    <p className="text-sm leading-5 text-gray-900">
                       Designed with the user in mind, our platform offers an intuitive, easy-to-navigate interface, making health management accessible to everyone, regardless of tech-savviness.


                    </p>
                    </div>
                    <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-[#0A7DCF] group-hover:scale-x-100" />
                </div>
                </div>
            </div>
        </div>
    );
}
