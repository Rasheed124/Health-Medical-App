import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Patients from '../pages/doctors/Patients';
import Appointment from '../pages/doctors/Appointment';
import Home from '../pages/doctors/Home';
import ProfileSetting from '../pages/doctors/ProfileSetting';

// From Patient
import MedicalReport from '../pages/patient/MedicalReport';


export default function DoctorControl() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointments" element={<Appointment />} />
        {/* <Route path="/patients" element={<Patients />} /> */}
        <Route path="/medical-report" element={<MedicalReport />} />
        <Route path="/profile-setting" element={<ProfileSetting />} />
      </Routes>
    </>
  );
}
