import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateMedication = () => {
    const [medicationData, setMedicationData] = useState({
      name: '',
      description: '',
      dosage: '',
      note: '',
      startdate: '',
      enddate: '',
      timefrequency: '',
    });
  
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(true);
  
    // Assuming you have the user token stored in the session
    const userToken = sessionStorage.getItem('userToken');

    useEffect(() => {
      // Fetch the list of patients from the API
      axios.get('https://health-connect-cd7q.onrender.com/api/v1/patients', {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
        .then(response => {
          setPatients(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching patients:', error.response ? error.response.data : error.message);
          setLoading(false);
        });
    }, [userToken]);

    const handleChange = (e) => {
      const { name, value } = e.target;
    
      // For radio inputs, directly update the state value based on the selected radio option
      setMedicationData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();

      // Make the POST request with Axios
      axios.post('https://health-connect-cd7q.onrender.com/api/v1/medications', medicationData, {
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        console.log('Medication added successfully:', response.data);
        // You may want to handle success or redirect the user here
      })
      .catch(error => {
        console.error('Error adding medication:', error.response ? error.response.data : error.message);
        // Handle error
      });

    };


  return (
    <div className=" w-full">
      <h2 className=" py-4 text-xl text-[#0a7dcf] font-bold">
        {" "}
        Create A Medication
      </h2>
      <form onSubmit={handleSubmit} className=" max-w-[400px]">
        <div className=" w-full">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={medicationData.name}
            onChange={handleChange}
            placeholder="Medication Name"
            className=" w-full border border-black py-2 pl-3 mt-2 rounded-md"
          />
        </div>
        <div className=" pt-5">
          <label htmlFor="description">Prescription</label> <br />
          <textarea
            type="text"
            id="description"
            name="description"
            value={medicationData.description}
            onChange={handleChange}
            cols="30"
            rows="4"
            className=" w-full resize-none p-2 mt-2 border border-black rounded-md"
          ></textarea>
        </div>
        <div className=" w-full">
          <label htmlFor="dosage">Dosage</label>
          <input
            type="text"
            id="dosage"
            name="dosage"
            value={medicationData.dosage}
            onChange={handleChange}
            placeholder="Dosage"
            className=" w-full border border-black py-2 pl-3 mt-2 rounded-md"
          />
        </div>
        <div className=" pt-5">
          <label htmlFor="">Date/Day</label>
          <div className=" flex w-full  max-[991px]:flex-wrap gap-4 pt-2">
            <input
              type="date"
              id="startdate"
              name="startdate"
              value={medicationData.startdate}
              onChange={handleChange}
              className=" w-full p-2 rounded-md border border-black"
            />
            <input
              type="date"
              id="enddate"
              name="enddate"
              value={medicationData.enddate}
              onChange={handleChange}
              className=" w-full p-2 rounded-md border border-black"
            />
          </div>
        </div>
        <div className="space-y-2 pt-5">
          <label htmlFor="">Time/Frequency</label> <br />
          <div className="">
            <input
              type="radio"
              id="day"
              name="timefrequency"
              value="day"
              checked={medicationData.timefrequency === 'day'}
              onChange={handleChange}
              className=" mr-2"
            />
            <label htmlFor="day">Day</label>
          </div>
          <div className="">
            <input
              type="radio"
              id="afternoon"
              name="timefrequency"
              value="afternoon"
              checked={medicationData.timefrequency === 'afternoon'}
              onChange={handleChange}
              className=" mr-2"
            />
            <label htmlFor="afternoon">Afternoon</label>
          </div>
          <div className="">
          <input
            type="radio"
            id="night"
            name="timefrequency"
            value="night"
            checked={medicationData.timefrequency === 'night'}
            onChange={handleChange}
            className=" mr-2"
          />
          <label htmlFor="night">Night</label>
          </div>
        </div>
        <div className=" pt-5">
          <label htmlFor="">Note</label> <br />
          <textarea
            name="note"
            id="note"
            value={medicationData.note}
            onChange={handleChange}
            cols="30"
            rows="3"
            className=" w-full resize-none rounded-md mt-2 border border-black"
          ></textarea>
        </div>
        <div className=" pt-2">
            <button type="submit" className=" py-2 px-4 bg-[#0A7DCF] text-white hover:bg-[#53D2E3] rounded-md">
                Create Medication
            </button>
        </div>
      </form>
    </div>
  );
};

export default CreateMedication;
