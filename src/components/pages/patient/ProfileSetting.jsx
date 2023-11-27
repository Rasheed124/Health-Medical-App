import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { MdUpload } from "react-icons/md";


export default function ProfileSetting() {

  // State to store user information
  const [userData, setUserData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    dateofbirth: '',
    bloodgroup: '',
    number: '',
    address: '',
    city: '',
    state: '',
    postcode: '',
    country: '',
  });

  // State to track the editing mode
  const [isEditing, setIsEditing] = useState(false);

  // Fetch user information on component mount
  // useEffect(() => {
  //   // Replace 'YOUR_USER_API_ENDPOINT' with the actual endpoint to fetch user data
  //   axios.get('https://health-connect-cd7q.onrender.com/api/v1/me')
  //     .then(response => {
  //       setUserData(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching user data:', error.response ? error.response.data : error.message);
  //     });
  // }, []); // Empty dependency array means this effect runs once on mount

  // Update user information function
  const handleUpdate = (e) => {
    e.preventDefault();

    console.log(userData);

    // Replace 'YOUR_USER_API_ENDPOINT' with the actual endpoint to update user data
    axios.patch('https://health-connect-cd7q.onrender.com/api/v1/me/update', userData)
      .then(response => {
        console.log('User data updated successfully:', response.data);
        setUserData(response.data);
        setIsEditing(false);
      })
      .catch(error => {
        console.error('Error updating user data:', error.response ? error.response.data : error.message);
      });
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  return (
     <div className=" w-full">
     
      <form onSubmit={handleUpdate} className=" max-w-[500px]">
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
            <label htmlFor="firstname">First Name</label> <br />
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={userData.firstname}
              onChange={handleChange}
              className=" w-full border border-black pl-2 py-1 mt-2"
            />
          </div>
          <div className=" w-full">
            <label htmlFor="lastname">Last Name</label> <br />
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={userData.lastname}
              onChange={handleChange}
              className=" w-full border border-black pl-2 py-1 mt-2"
            />
          </div>
        </div>
        <div className=" flex  max-[991px]:flex-wrap gap-4 pt-5">
          <div className=" w-full">
            <label htmlFor="dateofbirth">Date Of Birth</label>
            <input
              type="date"
              id="dateofbirth"
              name="dateofbirth"
              value={userData.dateofbirth}
              onChange={handleChange}
              className=" w-full border border-black pl-2 py-1 mt-2"
            />
          </div>
          <div className=" w-full">
            <label htmlFor="bloodgroup">Blood Group</label>
            <select
              name="bloodgroup"
              id="bloodgroup"
              value={userData.bloodgroup}
              onChange={handleChange}
              className=" w-full border border-black pl-2 py-1 mt-2"
            >
              <option value="A">A</option>
              <option value="AB">AB</option>
              <option value="B">B</option>
              <option value="O">O</option>
            </select>
          </div>
        </div>
        <div className=" flex  max-[991px]:flex-wrap gap-4 pt-5">
          <div className=" w-full">
            <label htmlFor="email">Email Id</label> <br />
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              placeholder="Teslim@gmail.com"
              className=" w-full border border-black pl-2 py-1 mt-2"
            />
          </div>
          <div className=" w-full">
            <label htmlFor="number">Number</label> <br />
            <input
              type="tel"
              id="number"
              name="number"
              value={userData.number}
              onChange={handleChange}
              placeholder="Agba"
              className=" w-full border border-black pl-2 py-1 mt-2"
            />
          </div>
        </div>
        <div className=" w-full pt-5">
          <label htmlFor="address">Adress</label> <br />
          <input
            type="text"
            id="address"
            name="address"
            value={userData.address}
            onChange={handleChange}
            placeholder="19, Erinola Salako Street"
            className=" w-full border border-black pl-2 py-1 mt-2"
          />
        </div>
        <div className=" flex  max-[991px]:flex-wrap gap-4 pt-5">
          <div className=" w-full">
            <label htmlFor="city">City</label> <br />
            <input
              type="text"
              id="city"
              name="city"
              value={userData.city}
              onChange={handleChange}
              placeholder="Ogba"
              className=" w-full border border-black pl-2 py-1 mt-2"
            />
          </div>
          <div className=" w-full">
            <label htmlFor="state">State</label> <br />
            <input
              type="text"
              id="state"
              name="state"
              value={userData.state}
              onChange={handleChange}
              placeholder="Lagos"
              className=" w-full border border-black pl-2 py-1 mt-2"
            />
          </div>
        </div>
        <div className=" flex  max-[991px]:flex-wrap gap-4 pt-5">
          <div className=" w-full">
            <label htmlFor="postcode">Post Code</label> <br />
            <input
              type="text"
              id="postcode"
              name="postcode"
              value={userData.postcode}
              onChange={handleChange}
              placeholder="1100001"
              className=" w-full border border-black pl-2 py-1 mt-2"
            />
          </div>
          <div className=" w-full">
            <label htmlFor="country">Country</label> <br />
            <input
              type="text"
              id="country"
              name="country"
              value={userData.country}
              onChange={handleChange}
              placeholder="Nigeria"
              className=" w-full border border-black pl-2 py-1 mt-2"
            />
          </div>
        </div>
        <div className=" pt-5">
          <button type="submit" className="py-2 px-4 bg-[#0A7DCF] text-white hover:bg-[#53D2E3] rounded-md">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
