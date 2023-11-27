import React from "react";
import { Link } from "react-router-dom";

import {  signOut } from "firebase/auth";

import { auth } from "../../src/firebase";

export default function Header() {

 const isAuthenticated = () => {
   // Check if userType exists in session storage
   const userType = sessionStorage.getItem("userType");


   // Return true if userType exists, indicating the user is authenticated
   return !!userType;
 };

 const handleLogout = () => {
   signOut(auth)
     .then(() => {
       // Successfully signed out
       sessionStorage.removeItem("userType");
      sessionStorage.removeItem("userToken");

       window.location.reload(); // Refresh the page to reflect the logout
     })
     .catch((error) => {
       // Handle signout error
       console.error("Error signing out:", error);
     });
 };

  return (
    <>
      <div class="container sticky top-0 z-sticky mx-auto z-30">
        <div class="flex flex-wrap -mx-3">
          <div class="w-full max-w-full px-3 flex-0">
            {/* <!-- Navbar --> */}
            <nav class="absolute top-0 left-0 right-0 flex flex-wrap items-center p-4 mx-6 my-4 shadow-soft-2xl rounded-blur bg-white/80 backdrop-blur-2xl backdrop-saturate-200 lg:flex-nowrap lg:justify-start">
              <div class="flex items-center justify-between w-full p-0 pl-6 mx-auto flex-wrap-inherit">
                <Link
                  class="py-2.375 text-sm mr-4 ml-4 whitespace-nowrap font-bold text-slate-700 lg:ml-0"
                  to="/"
                >
                  {" "}
                  HealthConnect{" "}
                </Link>
                <button
                  navbar-trigger
                  class="px-3 py-1 ml-2 leading-none   transition-all bg-transparent border border-transparent border-solid rounded-lg shadow-none cursor-pointer text-lg  ease-soft-in-out md:hidden"
                  type="button"
                  aria-controls="navigation"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="inline-block mt-2 align-middle    bg-center bg-no-repeat bg-cover w-6 h-6 bg-none">
                    <span
                      bar1
                      class="w-5.5 rounded-xs relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300"
                    ></span>
                    <span
                      bar2
                      class="w-5.5 rounded-xs mt-1.75 relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300"
                    ></span>
                    <span
                      bar3
                      class="w-5.5 rounded-xs mt-1.75 relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300"
                    ></span>
                  </span>
                </button>
                <div
                  navbar-menu
                  class="items-center flex-grow overflow-hidden transition-all duration-500 ease-soft lg-max:max-h-0 basis-full flex lg:basis-auto"
                >
<<<<<<< HEAD
                  <ul class="md:flex  hidden    pl-0 mx-auto mb-0 list-none lg:flex-row xl:ml-auto">
                    <li>
                      <Link
                        class="flex items-center px-4 py-2 mr-2 font-normal transition-all lg-max:opacity-0 duration-250 ease-soft-in-out text-sm text-slate-700 lg:px-2"
                        aria-current="page"
                        to="/doctor"
                      >
                        <i class="mr-1 fa fa-chart-pie opacity-60"></i>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        class="block px-4 py-2 mr-2 font-normal transition-all lg-max:opacity-0 duration-250 ease-soft-in-out text-sm text-slate-700 lg:px-2"
                        to="/"
                      >
                        <i class="mr-1 fa fa-user opacity-60"></i>
                           About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        class="flex items-center px-4 py-2 mr-2 font-normal transition-all lg-max:opacity-0 duration-250 ease-soft-in-out text-sm text-slate-700 lg:px-2"
                        aria-current="page"
                        to="/doctor"
                      >
                        <i class="mr-1 fa fa-chart-pie opacity-60"></i>
                       Features
                      </Link>
                    </li>
                    <li>
                      <Link
                        class="flex items-center px-4 py-2 mr-2 font-normal transition-all lg-max:opacity-0 duration-250 ease-soft-in-out text-sm text-slate-700 lg:px-2"
                        aria-current="page"
                        to="/doctor"
                      >
                        <i class="mr-1 fa fa-chart-pie opacity-60"></i>
                      Faq
                      </Link>
                    </li>
                    {/* <li>
                      <Link
                        class="block px-4 py-2 mr-2 font-normal transition-all lg-max:opacity-0 duration-250 ease-soft-in-out text-sm text-slate-700 lg:px-2"
                        to="/sign-up"
                      >
                        <i class="mr-1 fas fa-user-circle opacity-60"></i>
                        Sign Up
                      </Link>
                    </li>
                    <li>
                      <Link
                        class="block px-4 py-2 mr-2 font-normal transition-all lg-max:opacity-0 duration-250 ease-soft-in-out text-sm text-slate-700 lg:px-2"
                        to="/sign-in"
                      >
                        <i class="mr-1 fas fa-key opacity-60"></i>
                        Sign In
                      </Link>
                    </li> */}
                  </ul>
                  {/* <!-- online builder btn  --> */}
                  <li class="md:flex items-center hidden ">
                    <Link
                      class="leading-pro ease-soft-in text-[#0A7DCF] border-[#0A7DCF] text-xs tracking-tight-soft bg-150 bg-x-25 rounded-3.5xl hover:border-[#0A7DCF] hover:scale-102 hover:text-[#0A7DCF] active:hover:border-[#0A7DCF] active:hover:scale-102 active:hover:text-[#0A7DCF] active:opacity-85 active:shadow-soft-xs active:bg-[#0A7DCF] active:border-[#0A7DCF] mr-2 mb-0 inline-block cursor-pointer border border-solid bg-transparent py-3 px-8 text-center align-middle font-bold uppercase shadow-none transition-all hover:bg-transparent hover:opacity-75 hover:shadow-none active:scale-100 active:text-white active:hover:bg-transparent active:hover:opacity-75 active:hover:shadow-none"
                      // target="_blank"
                      to="/sign-in"
                    >
                      Login
                    </Link>
                  </li>
                  <ul class="hidden pl-0 mb-0 list-none lg:block lg:flex-row">
                    <li>
=======
                  <ul className="flex flex-col pl-0 mx-auto mb-0 list-none lg:flex-row xl:ml-auto">
                    {sessionStorage.getItem("userType") === "doctor" ? (
                      <li>
                        <Link
                          className="flex items-center px-4 py-2 mr-2 font-normal transition-all lg-max:opacity-0 duration-250 ease-soft-in-out text-sm text-slate-700 lg:px-2"
                          aria-current="page"
                          to="/doctor"
                        >
                          <i className="mr-1 fa fa-chart-pie opacity-60"></i>
                          Dashboard
                        </Link>
                      </li>
                    ) : (
                      isAuthenticated() && (
                        <li>
                          <Link
                            className="block px-4 py-2 mr-2 font-normal transition-all lg-max:opacity-0 duration-250 ease-soft-in-out text-sm text-slate-700 lg:px-2"
                            to="/patient"
                          >
                            <i className="mr-1 fa fa-user opacity-60"></i>
                            Dashboard
                          </Link>
                        </li>
                      )
                    )}
                    {!sessionStorage.getItem("userType") && (
                      <li>
                        <Link
                          className="flex items-center px-4 py-2 mr-2 font-normal transition-all lg-max:opacity-0 duration-250 ease-soft-in-out text-sm text-slate-700 lg:px-2"
                          aria-current="page"
                          to="#"
                        >
                          <i className="mr-1 fa fa-chart-pie opacity-60"></i>
                          Dashboard
                        </Link>
                      </li>
                    )}
                  </ul>
                  {/* <!-- online builder btn  --> */}
                  <li class="flex items-center list-none lg:block lg:flex-row">
                    {isAuthenticated() ? (
>>>>>>> 2ad946ee8b5a8868344caf5a1762ecaa31e00ca4
                      <Link
                        class="leading-pro ease-soft-in text-[#0A7DCF] border-[#0A7DCF] text-xs tracking-tight-soft bg-150 bg-x-25 rounded-3.5xl hover:border-[#0A7DCF] hover:scale-102 hover:text-[#0A7DCF] active:hover:border-[#0A7DCF] active:hover:scale-102 active:hover:text-[#0A7DCF] active:opacity-85 active:shadow-soft-xs active:bg-[#0A7DCF] active:border-[#0A7DCF] mr-2 mb-0 inline-block cursor-pointer border border-solid bg-transparent py-3 px-8 text-center align-middle font-bold uppercase shadow-none transition-all hover:bg-transparent hover:opacity-75 hover:shadow-none active:scale-100 active:text-white active:hover:bg-transparent active:hover:opacity-75 active:hover:shadow-none"
                        onClick={handleLogout}
                      >
                        Sign Out
                      </Link>
                    ) : (
                      <li className="">
                        <Link
                          class="leading-pro ease-soft-in text-[#0A7DCF] border-[#0A7DCF] text-xs tracking-tight-soft bg-150 bg-x-25 rounded-3.5xl hover:border-[#0A7DCF] hover:scale-102 hover:text-[#0A7DCF] active:hover:border-[#0A7DCF] active:hover:scale-102 active:hover:text-[#0A7DCF] active:opacity-85 active:shadow-soft-xs active:bg-[#0A7DCF] active:border-[#0A7DCF] mr-2 mb-0 inline-block cursor-pointer border border-solid bg-transparent py-3 px-8 text-center align-middle font-bold uppercase shadow-none transition-all hover:bg-transparent hover:opacity-75 hover:shadow-none active:scale-100 active:text-white active:hover:bg-transparent active:hover:opacity-75 active:hover:shadow-none"
                          to="/sign-in"
                        >
                          Login
                        </Link>
                      </li>
                    )}
                  </li>
                  {!isAuthenticated() && (
                    <ul class="hidden pl-0 mb-0 list-none lg:block lg:flex-row">
                      <li>
                        <Link
                          to="/sign-up"
                          // target="_blank"
                          class="leading-pro hover:scale-102 hover:shadow-soft-xs active:opacity-85 ease-soft-in text-xs tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-[#0A7DCF] to-[#0A7DCF] rounded-3.5xl mb-0 mr-1 inline-block cursor-pointer border-0 bg-transparent px-8 py-3 text-center align-middle font-bold uppercase text-white transition-all"
                        >
                          Sign-Up
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
