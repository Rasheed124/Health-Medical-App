import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Patients from '../pages/doctors/Patients';
import Appointment from '../pages/doctors/Appointment';
import Home from '../pages/doctors/Home';
import MedicalReport from '../pages/patient/MedicalReport';
import ProfileSettings from '../pages/doctors/ProfileSettings';
import ChangePassword from '../pages/doctors/ChangePassword';
import TrackMedication from '../pages/doctors/TrackMedication';


export default function DoctorControl() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointments" element={<Appointment />} />
        <Route path="/tracking-medication" element={<TrackMedication />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/profile-settings" element={<ProfileSettings />} />
        <Route path="/medical-report" element={<MedicalReport />} />
      </Routes>
    </>
  );
}
