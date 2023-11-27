import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateMedication = () => {
    const [medicationData, setMedicationData] = useState({
      name: '',
      description: '',
      note: '',
      startdate: '',
      enddate: '',
      timefrequency: [],
      // assignedto: '',
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
      const { name, value, type, checked } = e.target;
  
      if (type === 'checkbox') {
        // If it's a checkbox, update the state array based on its checked status
        setMedicationData((prevData) => {
          if (checked) {
            return {
              ...prevData,
              timefrequency: [...prevData.timefrequency, name],
            };
          } else {
            return {
              ...prevData,
              timefrequency: prevData.timefrequency.filter((time) => time !== name),
            };
          }
        });
      } else {
        // For other input types, update the state as usual
        setMedicationData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Make the POST request with Axios
      axios.post('https://health-connect-cd7q.onrender.com/api/v1/medication', medicationData, {
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
          <label htmlFor="">Name</label>
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
          <label htmlFor="">Prescription</label> <br />
          <textarea
            type="text"
            id="description"
            name="description"
            value={medicationData.description}
            onChange={handleChange}
            cols="30"
            rows="4"
            className=" w-full resize-none mt-2 border border-black rounded-md"
          ></textarea>
        </div>
        <div className=" pt-5">
          <label htmlFor="">Date/Day</label>
          <div className=" flex w-full gap-4 pt-2">
            <input
              type="date"
              id="startdate"
              name="startdate"
              value={medicationData.startdate}
              onChange={handleChange}
              className=" w-full py-2 pl-2 rounded-md border border-black"
            />
            <input
              type="date"
              id="enddate"
              name="enddate"
              value={medicationData.enddate}
              onChange={handleChange}
              className=" w-full py-2 pl-2 rounded-md border border-black"
            />
          </div>
        </div>
        <div className="space-y-2 pt-5">
          <label htmlFor="">Time/Frequency</label> <br />
          <div className="">
            <input
              type="checkbox"
              name="morning"
              id="morning"
              checked={medicationData.timefrequency.includes('morning')}
              onChange={handleChange}
              className=" mr-2" 
            />
            <label htmlFor="morning">Morning</label>
          </div>
          <div className="">
            <input 
              type="checkbox"
              name="afternoon"
              id="afternoon"
              checked={medicationData.timefrequency.includes('afternoon')}
              onChange={handleChange}
              className=" mr-2" 
            />
            <label htmlFor="afternoon">Afternoon</label>
          </div>
          <div className="">
            <input 
              type="checkbox"
              name="evening"
              id="evening"
              checked={medicationData.timefrequency.includes('evening')}
              onChange={handleChange}
              className=" mr-2"
            />
            <label htmlFor="evening">Evening</label>
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
