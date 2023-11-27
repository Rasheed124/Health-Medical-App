import React, { useState } from "react";
import { auth } from "../../firebase";
import health from "../../assets/Health.png";

import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      // navigate("./doctor");
      const userToken = user.user.accessToken;

      const userType = user.user.displayName;

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


         setEmail("");
         setPassword("");
    
    } catch (error) {
      // Handle network error
      console.error("Error:", error);
    }
  };

  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Night"
            src="https://img.freepik.com/premium-vector/flat-medical-insurance-people-concept-design-health-insurance-concept_123447-3848.jpg?w=740"
            className="absolute inset-0 h-full w-full object-cover opacity-80 "
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="/">
              <span className="sr-only">Home</span>
              <img src={health} alt="" />
            </a>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Sign in to HealthConnect
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nam dolorum aliquam, quibusdam aperiam voluptatum.
            </p>
          </div>
        </section>

        <main className="flex items-center  px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl w-full lg:max-w-xl">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                href="/"
              >
                <span className="sr-only">Home</span>
              </a>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Sign In to HealthConnect
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="w-full mx-auto mb-0 mt-8 max-w-md space-y-4"
            >
              {/* ... (same as your existing form structure) */}
              {/* Add event handlers to update the state based on user input */}
              <div className="mb-4">
                <label className="block text-sm mb-1 font-medium text-gray-700">
                  Enter email
                </label>
                <input
                  type="email"
                  required
                  className="w-full rounded-lg border border-gray-200 py-2 px-4 pe-12 text-sm shadow-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm mb-1 font-medium text-gray-700">
                  Enter password
                </label>
                <input
                  type="password"
                  required
                  className="w-full rounded-lg border border-gray-200 py-2 px-4 pe-12 text-sm shadow-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  No account?
                  <Link className="underline" to="/sign-up">
                    Sign up
                  </Link>
                </p>

                <button
                  type="submit"
                  className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default SignIn;
