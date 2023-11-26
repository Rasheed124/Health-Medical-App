import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/patient/Home';
import ProfileSetting from '../pages/patient/ProfileSetting';
import BookAppointment from '../pages/patient/BookAppointment';



export default function PatientControl() {
  return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile-setting" element={<ProfileSetting />} />
          <Route path="/book-an-appointment" element={<BookAppointment />} />
       </Routes>
    </>

  )
}
