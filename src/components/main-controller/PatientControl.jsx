import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/patient/Home';
import ProfileSetting from '../pages/patient/ProfileSetting';
import BookAppointment from '../pages/patient/BookAppointment';
import ChangePassword from '../pages/patient/ChangePassword';
import MedicalDetails from '../pages/patient/MedicalDetails';
import CreateMedication from '../pages/patient/CreateMedication';



export default function PatientControl() {
  return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile-setting" element={<ProfileSetting />} />
          <Route path="/book-an-appointment" element={<BookAppointment />} />
           <Route path="/medical-details" element={<MedicalDetails />} />
            <Route path="/Change-password" element={<ChangePassword />} />
             <Route path="/Create-medication" element={<CreateMedication />} />
       </Routes>
    </>

  )
}
