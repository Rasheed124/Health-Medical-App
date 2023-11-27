import { GrFormView } from "react-icons/gr";
import { IoCheckmark } from "react-icons/io5";
import { FaEye, FaTimes, FaUpload } from "react-icons/fa";
import { MdUpload } from "react-icons/md";
import { GiPawHeart } from "react-icons/gi";
import { RiPrinterFill } from "react-icons/ri";



export default function MedicalReport() {
  return (
    <>
      <div className="w-full">
        <div className="h-[30%] max-[767px]:h-auto  border rounded-xl border-gray-400 text-[#101010] py-4 px-4 w-[95%] max-[767px]:w-full mt-4 max-[767px]:mt-[30px] max-[767px]:grid-cols-1 mb-6 text-start">
          <h5 className="text-[#101010] p-4 font-bold border-b w-full ">
            File Name
          </h5>
          {/* <div className="grid grid-cols-[40%_60%] gap-4 max-[767px]:grid-cols-1">
            <div className="py-4">
              <input
                className="w-[70%] border outline-none p-2 rounded-none"
                placeholder="Musa.JPEG"
                type="text"
              />
            </div>
            <div className="flex items-center">
              <button className=" flex items-center rounded-full text-white py-2 px-4 bg-[#0a7dcf]">
                <FaUpload className="mr-[5px]" /> Upload File
              </button>
            </div>
          </div> */}
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
                className=" w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
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
        <div className="h-auto max-[767px]:h-auto  border rounded-xl border-gray-400 text-[#101010] py-4 px-4 w-[95%] max-[767px]:w-full mt-4 max-[767px]:mt-[30px] max-[767px]:grid-cols-1 mb-6 text-start">
          <h5 className="text-[#101010] p-4 font-bold border-b w-full ">
            Details
          </h5>
          <div className="flex gap-[30%] flex-wrap">
            <div className="flex items-center justify-center">
              <h5 className="text-[#101010] p-4 font-bold  w-full ">
                Teslim.JPEG
              </h5>
            </div>
            <div className="flex  items-center p-4">
              <button className=" flex items-center rounded-full text-white py-2 px-4 bg-green-500">
                <FaEye className="mr-[5px]" /> View Record
              </button>
            </div>
          </div>
          <div className="flex gap-[30%] flex-wrap">
            <div className="flex items-center justify-center">
              <h5 className="text-[#101010] p-4 font-bold  w-full ">
                Teslim.JPEG
              </h5>
            </div>
            <div className="flex  items-center p-4">
              <button className=" flex items-center rounded-full text-white py-2 px-4 bg-green-500">
                <FaEye className="mr-[5px]" /> View Record
              </button>
            </div>
          </div>
          <div className="flex gap-[30%] flex-wrap">
            <div className="flex items-center justify-center">
              <h5 className="text-[#101010] p-4 font-bold  w-full ">
                Teslim.JPEG
              </h5>
            </div>
            <div className="flex  items-center p-4">
              <button className=" flex items-center rounded-full text-white py-2 px-4 bg-green-500">
                <FaEye className="mr-[5px]" /> View Record
              </button>
            </div>
          </div>
          <div className="flex gap-[30%] flex-wrap">
            <div className="flex items-center justify-center">
              <h5 className="text-[#101010] p-4 font-bold  w-full ">
                Teslim.JPEG
              </h5>
            </div>
            <div className="flex  items-center p-4">
              <button className=" flex items-center rounded-full text-white py-2 px-4 bg-green-500">
                <FaEye className="mr-[5px]" /> View Record
              </button>
            </div>
          </div>
          <div className="flex gap-[30%] flex-wrap">
            <div className="flex items-center justify-center">
              <h5 className="text-[#101010] p-4 font-bold  w-full ">
                Teslim.JPEG
              </h5>
            </div>
            <div className="flex  items-center p-4">
              <button className=" flex items-center rounded-full text-white py-2 px-4 bg-green-500">
                <FaEye className="mr-[5px]" /> View Record
              </button>
            </div>
          </div>
          <div className="flex gap-[30%] flex-wrap">
            <div className="flex items-center justify-center">
              <h5 className="text-[#101010] p-4 font-bold  w-full ">
                Teslim.JPEG
              </h5>
            </div>
            <div className="flex  items-center p-4">
              <button className=" flex items-center rounded-full text-white py-2 px-4 bg-green-500">
                <FaEye className="mr-[5px]" /> View Record
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
