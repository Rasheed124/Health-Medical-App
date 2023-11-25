import React from 'react'
import Sidebar from './sidebar'
import Main from './Main'

export default function Layout() {
  return (
    <div className="py-20">    
        <div className="max-w-6xl mx-auto px-4 md:px-10">
            <div className="grid grid-cols-10 gap-5 h-[800px]">
                <div className="col-span-2 ">
                    <Sidebar />
                </div>
                <div className="col-span-8 px-5 py-10 overflow-y-scroll">
                    <Main />
                </div>
            </div>
        </div>
    </div>
  )
}
