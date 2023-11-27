import React from 'react'
import PatientControl from '../main-controller/PatientControl'
import PatientSidebar from '../sidebar/PatientSidebar'

export default function Patient() {
  return (
    <>
      <div className="py-20">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="grid min-[992px]:grid-cols-10 max-[991px]:grid-rows-2 gap-5 max-[991px]:h-[1600px] min-[992px]:h-[800px]">
            <div className="max-[991px]:h-[700px] min-[992px]:col-span-2 ">
              <PatientSidebar />
            </div>
            <div className="min-[992px]:col-span-8 max-[991px]:h-[1000px] px-5 py-10 overflow-y-scroll">
              <PatientControl />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}