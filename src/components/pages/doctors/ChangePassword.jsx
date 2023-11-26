import React from 'react'

const ChangePassword = () => {
  return (
        <div className="w-full px-4  sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 ">
                  <form action="" className=" max-w-[400px]">
                   
                     
                      <div className="">
                      <label htmlFor="">Old Password</label>
                        <input
                          type="password"
                          className="w-full rounded-lg  border  border-black py-2 pl-3 mt-2 mb-5 pe-12 text-sm shadow-sm"
                        
                        />
                      </div>
                 

                 
                     
                      <div className="">
                      <label htmlFor="">New password</label>
                        <input
                          type="password"
                          className="w-full rounded-lg  border  border-black py-2 pl-3 mt-2 mb-5 pe-12 text-sm shadow-sm"
                       
                        />
                      </div>
                 

               
                      

                      <div className="">
                       <label htmlFor="">Confirm Password</label>
                        <input
                          type="password"
                          className="w-full rounded-lg  border  border-black py-2 pl-3 mt-2 mb-5 pe-12 text-sm shadow-sm"
                          placeholder=""
                        />
                      </div>
                  
                    <div className=" pt-2">
                        <button className=" py-2 px-4 bg-[#0A7DCF] text-white hover:bg-[#53D2E3] rounded-md">
                            Save Changes
                        </button>
                    </div>
                  </form>
                </div>
  )
}

export default ChangePassword
