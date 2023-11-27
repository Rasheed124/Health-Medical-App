import React, { useState } from "react";
import { auth } from "../../firebase";

import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("patient"); // Default to "patient"

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      // navigate("./doctor");
      const userToken = user.user.accessToken;

      console.log(userToken);

      // Save user type and ID to sessionStorage
      sessionStorage.setItem("userType", userType);
      // Save the user token to sessionStorage
      sessionStorage.setItem("userToken", userToken);

      // Navigate to the desired page based on user type
      if (userType === "doctor") {
        navigate("/doctor");
      } else {
        navigate("/patient");
      }
    } catch (error) {
      // Handle network error
      console.error("Error:", error);
    }
  };

  return (
    <div className="mx-auto max-w-screen-xl h-screen flex justify-center items-center flex-col px-4 py-16 sm:px-6 lg:px-8 w-full">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Login</h1>

        <p className="mt-4 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
          nulla eaque error neque ipsa culpa autem, at itaque nostrum!
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full mx-auto mb-0 mt-8 max-w-md space-y-4"
      >
        {/* ... (same as your existing form structure) */}
        {/* Add event handlers to update the state based on user input */}
        <input
          type="email"
          required
          className="w-full  rounded-lg  border border-black py-3 pl-3 pe-12 text-sm shadow-sm"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          required
          className="w-full rounded-lg border border-black py-3 pl-3 pe-12 text-sm shadow-sm"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Select User Type:
          </label>
          <select
            className="w-full border border-black mt-1 p-2  rounded-md"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="block rounded-lg bg-blue-500 px-10 py-3 text-sm font-medium text-white"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
