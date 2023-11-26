import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Patients from '../pages/doctors/Patients';
import Appointment from '../pages/doctors/Appointment';
import Home from '../pages/doctors/Home';
import ProfileSetting from '../pages/doctors/ProfileSetting';
import ChangePassword from '../pages/doctors/ChangePassword';
import ProfileSettings from '../pages/doctors/ProfileSettings';


export default function DoctorControl() {
  return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointments" element={<Appointment />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/profile-setting" element={<ProfileSetting />} />
          <Route path="/Change-password" element={<ChangePassword />} />
          <Route path="/Profile-Settings" element={<ProfileSettings />} />
       </Routes>
    </>

  )
}
