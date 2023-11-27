import React from "react";
import health from '../../src/assets/Health.png'
import { IoMenu } from "react-icons/io5";
import Hamburger from "hamburger-react";
import { useState } from "react";
export default function Header() {

  let Links = [
    {name:"Home",link:"#Banner"},
    {name:"About Us",link:"#intro"},
    {name:"Features",link:"#features"},
    {name:"Faq",link:"#faq"},
  ];

  let [open, setOpen] = useState(false);
  
  return (
    <>
      

      <div className="shadow-md z-[1000] w-full fixed top-0 left-0">
        <div className="md:flex  items-center justify-between bg-white py-4 md:px-10 px-7">
          <div className="flex items-center">
            <a
              className="py-2.375 text-sm mr-4 ml-4 whitespace-nowrap font-bold text-slate-700 lg:ml-0"
              href="/"
            >
              {" "}
              <img className="w-[70%]" src={health} alt="" />
            </a>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-1 cursor-pointer md:hidden"
          >
            <Hamburger />
          </div>
          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${ open ? 'top-[20]':'top-[-490px]' }`}>
            {Links.map((link) => (
              <li key={link.name} className="md:ml-2 lg:ml-8 text-xl md:my-0 my-7">
                <a className="text-gray-800" href={link.link}>
                  {link.name}
                </a>
              </li>
            ))}
            <div className="flex md:ml-8">
              <a
                className="leading-pro ease-soft-in text-[#0A7DCF] border-[#0A7DCF] text-xs tracking-tight-soft bg-150 bg-x-25 rounded-3.5xl hover:border-[#0A7DCF] hover:scale-102 hover:text-[#0A7DCF] active:hover:border-[#0A7DCF] active:hover:scale-102 active:hover:text-[#0A7DCF] active:opacity-85 active:shadow-soft-xs active:bg-[#0A7DCF] active:border-[#0A7DCF] mr-2 mb-0 inline-block cursor-pointer border border-solid bg-transparent py-3 px-8 text-center align-middle font-bold uppercase shadow-none transition-all hover:bg-transparent hover:opacity-75 hover:shadow-none active:scale-100 active:text-white active:hover:bg-transparent active:hover:opacity-75 active:hover:shadow-none"
                // target="_blank"
                href="/sign-in"
              >
                Sign-in
              </a>

              <a
                href="/sign-up"
                // target="_blank"
                className="leading-pro hover:scale-102 hover:shadow-soft-xs active:opacity-85 ease-soft-in text-xs tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-[#0A7DCF] to-[#0A7DCF] rounded-3.5xl mb-0 mr-1 inline-block cursor-pointer border-0 bg-transparent px-8 py-3 text-center align-middle font-bold uppercase text-white transition-all"
              >
                Sign-Up
              </a>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
