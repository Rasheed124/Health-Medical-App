
import { GrFormView } from "react-icons/gr";
import { IoCheckmark } from "react-icons/io5";
import { FaCheck, FaEye, FaTimes } from "react-icons/fa";
import { GiPawHeart } from "react-icons/gi";
import { RiPrinterFill } from "react-icons/ri";
import { MdCancel } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

import { format } from "date-fns";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { Link } from "react-router-dom";

  export default function Medications() {
    const [medications, setMedications] = useState([]);
    const token = sessionStorage.getItem("userToken");

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [medicationToDelete, setMedicationToDelete] = useState(null);

 

    const fetchMedications = () => {
      axios
        .get("https://health-connect-cd7q.onrender.com/api/v1/medications", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setMedications(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    useEffect(() => {
      fetchMedications();
    }, [token]);

    // Function to handle medication deletion
    const handleDelete = (medicationId) => {
      axios
        .delete(
          `https://health-connect-cd7q.onrender.com/api/v1/medications/${medicationId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then(() => {
          fetchMedications(); // Refresh medication list after deletion
        })
        .catch((error) => {
          console.error("Error deleting medication:", error);
        });
    };

    return (
      <>
        <div class="mx-auto max-w-screen-xl px-4  relative">
          <h3 className="py-5">Patient Appointment</h3>

          <div className="border-2   ">
            <div className="overflow-x-auto flex justify-end">
              <table className="min-w-full divide-y-2 text-center divide-gray-200 bg-white text-sm">
                <thead className="text-left">
                  <tr>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Name
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Start Date
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      End Date
                    </th>

                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Actions
                    </th>
                    <th className="px-4 py-2"></th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-left">
                  {medications.medications?.map((medication) => (
                    <tr key={medication._id}>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {medication.name}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {format(new Date(medication.startdate), "MM/dd/yyyy")}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {format(new Date(medication.enddate), "MM/dd/yyyy")}
                      </td>

                      <td className="whitespace-nowrap px-4 space-x-2 py-2">
                        <div className="inline-flex gap-[5px] items-center">
                          <button className="text-[#1db9aa] flex mb-3 items-center font-medium text-[13px] bg-[#02b6b31f]  rounded-[5px] py-[4px] px-[8px]">
                            <FaEye />
                          </button>
                          <Link to={`/medications/${medication._id}/edit`}>
                            <button className="text-[#26af48] flex mb-3 items-center font-medium text-[13px] bg-[#0fb76b1f]  rounded-[5px] py-[4px] px-[8px]">
                              <HiOutlinePencilSquare />
                            </button>
                          </Link>
                          <button
                            className="text-[#e63c3c] flex mb-3 items-center font-medium text-[13px] bg-[#f211361f]  rounded-[5px] py-[4px] px-[8px]"
                            onClick={() => handleDelete(medication._id)}
                          >
                            <MdDeleteForever />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Modal Cofirmation */}
              {modalIsOpen && (
                <div className=" right-20 fixed top-24">
                  <div className="rounded-lg bg-white p-8 shadow-2xl max-w-md mx-auto  ">
                    <h2 className="text-lg font-bold">
                      Are you sure you want to delete
                    </h2>

                    <div className="mt-4 flex gap-2">
                      <button
                        type="button"
                        className="rounded bg-green-50 px-4 py-2 text-sm font-medium text-green-600"
                      >
                        Yes, I'm sure
                      </button>

                      <button
                        type="button"
                        className="rounded bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600"
                      >
                        No, go back
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  };


