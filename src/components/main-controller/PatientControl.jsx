import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/patient/Home';
import ProfileSetting from '../pages/patient/ProfileSetting';
import BookAppointment from '../pages/patient/BookAppointment';
import Medications from '../pages/patient/Medications';
import MedicalReport from '../pages/patient/MedicalReport';



export default function PatientControl() {
  return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile-setting" element={<ProfileSetting />} />
          <Route path="/book-an-appointment" element={<BookAppointment />} />
          <Route path="/medication" element={<Medications />} />
          <Route path="/medical-report" element={<MedicalReport />} />
       </Routes>
    </>

  )
}
