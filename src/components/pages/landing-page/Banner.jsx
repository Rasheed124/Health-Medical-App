import React from 'react'
   import { GiPadlock } from "react-icons/gi";
   import { RiHealthBookLine } from "react-icons/ri";
   import { MdOutlineManageAccounts } from "react-icons/md";

import { Link } from 'react-router-dom';
export default function Banner() {
  return (
    <div id='Banner' className="mb-16">
        <div className="bg-slate-100 pt-24">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3  mb-4 text-sm py-2 font-semibold tracking-wider text-white uppercase rounded-full bg-[#0A7DCF]">
                        HealthConnect
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                    <svg
                        viewBox="0 0 52 24"
                        fill="currentColor"
                        className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-[#0A7DCF] lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                        <defs>
                        <pattern
                            id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                            x="0"
                            y="0"
                            width=".135"
                            height=".30"
                        >
                            <circle cx="1" cy="1" r=".7" />
                        </pattern>
                        </defs>
                        <rect
                        fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                        width="52"
                        height="24"
                        />
                    </svg>
                    <span className="relative"> Revolutionising</span>
                    </span>{' '}
                     Healthcare Communication  for Patients and Professionals            
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Seamless integration of patient-doctor  communication, prescription management, and health tracking in one platform
                </p>
                </div>
                <div className="flex items-center sm:justify-center">
               <Link to='/sign-up'>
                 <button
                    type="submit"
                    className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#0A7DCF] hover:bg-[#0A7DCF]/80 focus:shadow-outline focus:outline-none"
                >
                    Get started
                </button>
               </Link>
                <a
                    href="#features"
                    aria-label=""
                    className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-[#0A7DCF]"
                >
                    Learn more
                </a>
                </div>
            </div>
        </div>
        <div className="relative px-4 sm:px-0">
        <div className="absolute inset-0 bg-gray-100 h-1/2" />
        <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
            <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-slate-100">
               <GiPadlock className=' text-[#0A7DCF] text-2xl'/>
            </div>
            <p className="font-bold tracking-wide text-gray-800">
               Secure and Private Communication      
            </p>
            </div>
            <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-slate-100">
                <MdOutlineManageAccounts className=' text-[#0A7DCF] text-2xl'/>
            </div>
            <p className="font-bold tracking-wide text-gray-800">
               Easy Prescription Management          
            </p>
            </div>
            <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-slate-100">
               <RiHealthBookLine className=' text-[#0A7DCF] text-2xl'/>
            </div>
            <p className="font-bold tracking-wide text-gray-800">
                Real-Time Health Tracking        
            </p> 
            </div>
        </div>
        </div>
    </div>
  )
}
