import React from 'react'
import { MdUpload } from "react-icons/md";
export default function ProfileSetting() {
  return (
    <div className=" w-full">
      <form action=" " className=" max-w-[500px]">
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            {/* <input type="file" /> */}

            <div className="relative">
              <label htmlFor="Search" className="sr-only">
                {" "}
                Search{" "}
              </label>

              <input
                type="file"
                id="Search"
                className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
              />

              <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                <button
                  type="button"
                  className="text-gray-600 hover:text-gray-700"
                >
                  <span className="sr-only">Search</span>

                  <MdUpload />
                </button>
              </span>
            </div>
            <p>Allowed JPG, GIF or PNG, Max size of 2MB</p>
          </div>
        </div>
        <div className=" flex max-[991px]:flex-wrap gap-4">
          <div className=" w-full">
            <label htmlFor="">First Name</label> <br />
            <input
              type="text"
              placeholder="Teslim"
              className=" w-full border border-black pl-2 py-1 mt-2"
            />
          </div>
          <div className=" w-full">
            <label htmlFor="">Last Name</label> <br />
            <input
              type="text"
              placeholder="Agba"
              className=" w-full border border-black pl-2 py-1 mt-2"
            />
          </div>
        </div>
        <div className=" flex  max-[991px]:flex-wrap gap-4 pt-5">
          <div className=" w-full">
            <label htmlFor="">Date Of Birth</label>
            <input
              type="date"
              className=" w-full border border-black pl-2 py-1 mt-2"
            />
          </div>
          <div className=" w-full">
            <label htmlFor="">Blood Group</label>
            <select
              name=""
              id=""
              className=" w-full border border-black pl-2 py-1 mt-2"
            >
              <option value="">A</option>
              <option value="">AB</option>
              <option value="">B</option>
              <option value="">O</option>
            </select>
          </div>
        </div>
        <div className=" flex  max-[991px]:flex-wrap gap-4 pt-5">
          <div className=" w-full">
            <label htmlFor="">Email Id</label> <br />
            <input
              type="email"
              placeholder="Teslim@gmail.com"
              className=" w-full border border-black pl-2 py-1 mt-2"
            />
          </div>
          <div className=" w-full">
            <label htmlFor="">Number</label> <br />
            <input
              type="number"
              placeholder="Agba"
              className=" w-full border border-black pl-2 py-1 mt-2"
            />
          </div>
        </div>
        <div className=" w-full pt-5">
          <label htmlFor="">Adress</label> <br />
          <input
            type="text"
            placeholder="19, Erinola Salako Street"
            className=" w-full border border-black pl-2 py-1 mt-2"
          />
        </div>
        <div className=" flex  max-[991px]:flex-wrap gap-4 pt-5">
          <div className=" w-full">
            <label htmlFor="">City</label> <br />
            <input
              type="text"
              placeholder="Ogba"
              className=" w-full border border-black pl-2 py-1 mt-2"
            />
          </div>
          <div className=" w-full">
            <label htmlFor="">State</label> <br />
            <input
              type="text"
              placeholder="Lagos"
              className=" w-full border border-black pl-2 py-1 mt-2"
            />
          </div>
        </div>
        <div className=" flex  max-[991px]:flex-wrap gap-4 pt-5">
          <div className=" w-full">
            <label htmlFor="">Post Code</label> <br />
            <input
              type="text"
              placeholder="1234"
              className=" w-full border border-black pl-2 py-1 mt-2"
            />
          </div>
          <div className=" w-full">
            <label htmlFor="">Country</label> <br />
            <input
              type="text"
              placeholder="Nigeria"
              className=" w-full border border-black pl-2 py-1 mt-2"
            />
          </div>
        </div>
        <div className=" pt-5">
          <button className=" py-2 px-4 bg-[#0A7DCF] text-white hover:bg-[#53D2E3] rounded-md">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
