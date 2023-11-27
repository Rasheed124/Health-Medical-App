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

 export default function TrackMedication() {
   const [medications, setMedications] = useState([]);
   const token = sessionStorage.getItem("userToken");

   // Use local state to keep track of the taken status for each medication
  //  const [takenMedications, setTakenMedications] = useState({});

   const fetchMedications = () => {
     axios
       .get(
         "https://health-connect-cd7q.onrender.com/api/v1/trackmedications/6564981f6c7aa43139b91731",
         {
           headers: {
             Authorization: `Bearer ${token}`,
           },
         },
       )
       .then((response) => {
         // Initialize the takenMedications state based on the 'taken' property
        //  const initialTakenMedications = {};
        //  response.data.medications.forEach((medication) => {
        //    initialTakenMedications[medication._id] = medication.taken || false;
        //  });
        //  setTakenMedications(initialTakenMedications);

         setMedications(response.data);
       })
       .catch((error) => {
         console.error("Error fetching data:", error);
       });
   };

  //  const handleCheckboxChange = (medicationId) => {
  //    const updatedTakenMedications = {
  //      ...takenMedications,
  //      [medicationId]: !takenMedications[medicationId],
  //    };

  //    setTakenMedications(updatedTakenMedications);

  //    // Call a function to send the updated medication data to the endpoint
  //    updateMedicationStatus(
  //      medicationId,
  //      updatedTakenMedications[medicationId],
  //    );
  //  };

  //  const updateMedicationStatus = (medicationId, taken) => {
  //    const updatedMedication = medications.medications.find(
  //      (medication) => medication._id === medicationId,
  //    );

  //    // Update the 'taken' property based on the checkbox status
  //    updatedMedication.taken = taken;

  //    // Send the updated data to the endpoint
  //    axios
  //      .patch(
  //        `https://health-connect-cd7q.onrender.com/api/v1/medications/${medicationId}`,
  //        updatedMedication,
  //        {
  //          headers: {
  //            Authorization: `Bearer ${token}`,
  //          },
  //        },
  //      )
  //      .then((response) => {
  //        // Handle the response if needed
  //      })
  //      .catch((error) => {
  //        console.error("Error updating medication status:", error);
  //      });
  //  };

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
                         checked
                         id=""
                        //  checked={takenMedications[medication._id] || false}
                        //  onChange={() => handleCheckboxChange(medication._id)}
                       />
                     </td>

                  
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
