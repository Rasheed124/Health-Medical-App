import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
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
                      <Link
                        to="/sign-up"
                        // target="_blank"
                        class="leading-pro hover:scale-102 hover:shadow-soft-xs active:opacity-85 ease-soft-in text-xs tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-[#0A7DCF] to-[#0A7DCF] rounded-3.5xl mb-0 mr-1 inline-block cursor-pointer border-0 bg-transparent px-8 py-3 text-center align-middle font-bold uppercase text-white transition-all"
                      >
                        Sign-Up
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* <header className="bg-[#E4E4E4]">
            <div className="mx-auto bg-[#E4E4E4] max-w-screen-xl px-4 sm:px-6 lg:px-8 sticky top-0">
                <div className="flex h-20 py-5 items-center justify-between">
                <div className="md:flex md:items-center md:gap-12">
                    <a className="block text-teal-600" href="/">
                    <span className="sr-only">Home</span>
                    <svg
                        className="h-8"
                        viewBox="0 0 28 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                        fill="currentColor"
                        />
                    </svg>
                    </a>
                </div>

                <div className="hidden md:block">
                    <nav aria-label="Global">
                    <ul className="flex items-center gap-6 text-sm">
                        <li>
                        <a
                            className="text-gray-500 transition hover:text-gray-500/75"
                            href="/"
                        >
                            About
                        </a>
                        </li>

                        <li>
                        <a
                            className="text-gray-500 transition hover:text-gray-500/75"
                            href="/"
                        >
                            Careers
                        </a>
                        </li>

                        <li>
                        <a
                            className="text-gray-500 transition hover:text-gray-500/75"
                            href="/"
                        >
                            History
                        </a>
                        </li>

                        <li>
                        <a
                            className="text-gray-500 transition hover:text-gray-500/75"
                            href="/"
                        >
                            Services
                        </a>
                        </li>

                        <li>
                        <a
                            className="text-gray-500 transition hover:text-gray-500/75"
                            href="/"
                        >
                            Projects
                        </a>
                        </li>

                        <li>
                        <a
                            className="text-gray-500 transition hover:text-gray-500/75"
                            href="/"
                        >
                            Blog
                        </a>
                        </li>
                    </ul>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <div className="sm:flex sm:gap-4">
                    <a
                        className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                        href="/"
                    >
                        Login
                    </a>

                    <div className="hidden sm:flex">
                        <a
                        className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                        href="/"
                        >
                        Register
                        </a>
                    </div>
                    </div>

                    <div className="block md:hidden">
                    <button
                        className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                        </svg>
                    </button>
                    </div>
                </div>
                </div>
            </div>
        </header> */}
    </>
  );
}
