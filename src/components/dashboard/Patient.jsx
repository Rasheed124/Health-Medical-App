import React from 'react'
import PatientControl from '../main-controller/PatientControl'
import PatientSidebar from '../sidebar/PatientSidebar'

export default function Patient() {
  return (
    <>
      <div className="py-20">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-10 gap-5 h-[800px]">
            <div className="col-span-2 ">
              <PatientSidebar />
            </div>
            <div className="col-span-8 px-5 py-10 overflow-y-scroll">
              <PatientControl />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}