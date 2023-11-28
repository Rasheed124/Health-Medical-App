import React from 'react'

const Join = () => {
  return (
    <>
 

      <div className="h-screen max-w-3xl mx-auto  flex flex-col justify-center items-center   w-full">
        <div className="bg-gradient-to-b p-5 py-7 from-green-200 to-white-900 w-full shadow-xl flex flex-col justify-center items-center   ">
          <div>
            <h1 className="text-2xl flex justify-center font-bold">
              Join as a Doctor or Patient
            </h1>
          </div>

          <div className=" font-san md:flex justify-evenly space-x-4 mx-0 auto">
            <div className="w-64 h-56 border-4 br-10 white rounded-3xl p-10  my-10 mx-0 border-green-600">
              <div className="w-6 h-6 border-2 white rounded-xl relative left-40 border-black bg-green-500"></div>
              <h1 className="text-black mt-20 font-bold">
                I'm a Doctor, Looking for Patient.
              </h1>
            </div>

            <div className="w-64 h-56 border-2 br-10 white rounded-3xl p-7 border-black my-10">
              <div className="w-6 h-6 border-2 white rounded-xl relative left-40  border-black"></div>
              <h1 className="text-black mt-20 font-bold">
                I'm a Patient Looking for a Doctor.
              </h1>
            </div>
          </div>

          <div className="flex justify-center my-5">
            <button className="inline-block rounded-md border border-white bg-green-900 px-12  py-3 text-sm font-medium  hover:bg-transparent hover:text-black text-white transition duration-500 hover:border-green-900">
              Create Account
            </button>
          </div>

          <div>
            <h1 className="my-5 flex justify-center font-bold">
              Already have an account? <a className='ml-2 underline' href="">Log in</a>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Join
