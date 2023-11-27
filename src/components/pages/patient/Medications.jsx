
import { GrFormView } from "react-icons/gr";
import { IoCheckmark } from "react-icons/io5";
import { FaCheck, FaEye, FaTimes } from "react-icons/fa";
import { GiPawHeart } from "react-icons/gi";
import { RiPrinterFill } from "react-icons/ri";
import { MdCancel } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

import { format } from "date-fns";
import Modal from "react-modal"; // Import the modal library

import React, { useEffect, useState } from "react";
import axios from "axios";
import { HiOutlinePencilSquare } from "react-icons/hi2";

  export default function Medications() {
    const [medications, setMedications] = useState([]);
    const token = sessionStorage.getItem("userToken");

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [medicationToDelete, setMedicationToDelete] = useState(null);


     const openModal = (medicationId) => {
       setMedicationToDelete(medicationId);
       setModalIsOpen(true);
     };

     // Function to handle closing the modal
     const closeModal = () => {
       setMedicationToDelete(null);
       setModalIsOpen(false);
     };

     // Function to handle medication deletion
    //  const handleDelete = (medicationId) => {
    //    openModal(medicationId);
    //  };


    // console.log(token);
    // useEffect(() => {
    //   axios
    //     .get("https://health-connect-cd7q.onrender.com/api/v1/medication", {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     })
    //     .then((response) => {
    //       setMedications(response.data);

    //     })
    //     .catch((error) => {
    //       console.error("Error fetching data:", error);
    //     });
    // }, [token]);

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
          openModal(medicationId);
    };

     const confirmDelete = () => {
       axios
         .delete(
           `https://health-connect-cd7q.onrender.com/api/v1/medications/${medicationToDelete}`,
           {
             headers: {
               Authorization: `Bearer ${token}`,
             },
           },
         )
         .then(() => {
           closeModal();
           fetchMedications();
         })
         .catch((error) => {
           console.error("Error deleting medication:", error);
         });
     };

    return (
      <>
        <div class="mx-auto max-w-screen-xl px-4  ">
         
          <h3 className="py-5">Patient Appointment</h3>

       
          <div className="border-2 ">
            <div className="overflow-x-auto">
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
                          <button className="text-[#26af48] flex mb-3 items-center font-medium text-[13px] bg-[#0fb76b1f]  rounded-[5px] py-[4px] px-[8px]">
                            <HiOutlinePencilSquare />
                          </button>
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
            </div>
          </div>
        </div>

        {/* Modal */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Delete Medication Modal"
          className="modal"
          overlayClassName="modal-overlay"
        >
          <div className="rounded-lg bg-white p-8 shadow-2xl">
            <h2 className="text-lg font-bold">
              Are you sure you want to do that?
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Doing that could have cause some issues elsewhere, are you 100%
              sure it's OK?
            </p>
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                className="rounded bg-green-50 px-4 py-2 text-sm font-medium text-green-600"
                onClick={confirmDelete}
              >
                Yes, I'm sure
              </button>
              <button
                type="button"
                className="rounded bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600"
                onClick={closeModal}
              >
                No, go back
              </button>
            </div>
          </div>
        </Modal>
      </>
    );
  };


