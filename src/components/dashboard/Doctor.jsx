import React from 'react'
import DoctorSidebar from '../sidebar/DoctorSidebar'
import DoctorControl from '../main-controller/DoctorControl'

export default function Doctor() {
  return (
    <>
      <div className="py-20">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-10 gap-5 h-[800px]">
            <div className="col-span-2 ">
              <DoctorSidebar />
            </div>
            <div className="col-span-8 px-5 py-10 overflow-y-scroll">
              <DoctorControl />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
