import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditMedication = ({ match }) => {
  const medicationId = match.params.id;

  const [medicationData, setMedicationData] = useState({
    name: '',
    description: '',
    note: '',
    startdate: '',
    enddate: '',
    timefrequency: '',
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch the existing medication data for editing
    axios.get(`https://health-connect-cd7q.onrender.com/api/v1/medications/${medicationId}`)
      .then(response => {
        setMedicationData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching medication data:', error.response ? error.response.data : error.message);
        setError('Error fetching medication data');
        setLoading(false);
      });
  }, [medicationId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    // Make the PUT or PATCH request to update the medication data
    axios.put(`https://health-connect-cd7q.onrender.com/api/v1/medications/${medicationId}`, medicationData)
      .then(response => {
        console.log('Medication updated successfully:', response.data);
        // You may want to handle success or redirect the user here
      })
      .catch(error => {
        console.error('Error updating medication:', error.response ? error.response.data : error.message);
        // Handle error
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <form onSubmit={handleUpdate} className="max-w-[400px]">
      
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
          <div className=" flex w-full gap-4 pt-2">
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
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-5">
                Update Medication
            </button>
        </div>
    </form>
  );
};

export default EditMedication;
