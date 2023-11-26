import React, { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Your backend API endpoint
    const apiUrl = "https://your-backend-api.com/SignIn";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Handle successful login (e.g., redirect or set authentication state)
        console.log("Login successful!");
      } else {
        // Handle authentication error
        console.error("Login failed");
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
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

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
