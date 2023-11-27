import { GrFormView } from "react-icons/gr";
import { IoCheckmark } from "react-icons/io5";
import { FaCheck, FaEye, FaTimes } from "react-icons/fa";
import { GiPawHeart } from "react-icons/gi";
import { RiPrinterFill } from "react-icons/ri";
import { MdCancel } from "react-icons/md";
import { HiOutlinePencilSquare } from "react-icons/hi2";

import { format } from "date-fns";

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DailyMedications() {
  const [medications, setMedications] = useState([]);
  const token = sessionStorage.getItem("userToken");

  // Use local state to keep track of the taken status for each medication
  const [takenMedications, setTakenMedications] = useState({});

  const fetchMedications = () => {
    axios
      .get("https://health-connect-cd7q.onrender.com/api/v1/medications", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // Initialize the takenMedications state based on the 'taken' property
        const initialTakenMedications = {};
        response.data.medications.forEach((medication) => {
          initialTakenMedications[medication._id] = medication.taken || false;
        });
        setTakenMedications(initialTakenMedications);

        setMedications(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleCheckboxChange = (medicationId) => {
    setTakenMedications((prevTakenMedications) => ({
      ...prevTakenMedications,
      [medicationId]: !prevTakenMedications[medicationId],
    }));

    // Call a function to send the updated medication data to the endpoint
    updateMedicationStatus(medicationId);
  };

  const updateMedicationStatus = (medicationId) => {
    const updatedMedication = medications.medications.find(
      (medication) => medication._id === medicationId,
    );

    // Update the 'taken' property based on the checkbox status
    updatedMedication.taken = takenMedications[medicationId];

    // Send the updated data to the endpoint
    axios
      .patch(
        `https://health-connect-cd7q.onrender.com/api/v1/medications/${medicationId}`,
        updatedMedication,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((response) => {
        // Handle the response if needed
      })
      .catch((error) => {
        console.error("Error updating medication status:", error);
      });
  };

  useEffect(() => {
    fetchMedications();
  }, [token]);

  console.log(medications);

  return (
    <>
      <div class="mx-auto max-w-screen-xl px-4  ">
        <h3 className="py-5">Daily Medications</h3>

        <div className="border-2 ">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 text-center divide-gray-200 bg-white text-sm">
              {/* Table Headers */}
              <thead className="text-left">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Name
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Dozage
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Frequency
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Action
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
                      {medication.dosage}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {medication.timefrequency}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        checked={takenMedications[medication._id] || false}
                        onChange={() => handleCheckboxChange(medication._id)}
                      />
                    </td>

                    {/* <td className="whitespace-nowrap px-4 space-x-2 py-2">
                      <div className="inline-flex gap-[5px] items-center">
                        <button className="text-[#1db9aa] flex mb-3 items-center font-medium text-[13px] bg-[#02b6b31f]  rounded-[5px] py-[4px] px-[8px]">
                          <FaEye />
                        </button>
                        <button className="text-[#26af48] flex mb-3 items-center font-medium text-[13px] bg-[#0fb76b1f]  rounded-[5px] py-[4px] px-[8px]">
                          <HiOutlinePencilSquare />
                        </button>
                        <button className="text-[#e63c3c] flex mb-3 items-center font-medium text-[13px] bg-[#f211361f]  rounded-[5px] py-[4px] px-[8px]">
                          <MdCancel />{" "}
                        </button>
                      </div>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
