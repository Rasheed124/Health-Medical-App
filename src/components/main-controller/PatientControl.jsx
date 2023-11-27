import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/patient/Home';
import ProfileSetting from '../pages/patient/ProfileSetting';
import BookAppointment from '../pages/patient/BookAppointment';
import Medications from '../pages/patient/Medications';
import EditMedication from '../pages/patient/EditMedication';
import MedicalReport from '../pages/patient/MedicalReport';
import ChangePassword from '../pages/patient/ChangePassword';
import CreateMedication from '../pages/patient/CreateMedication';
import DailyMedications from '../pages/patient/DailyMedications';



export default function PatientControl() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile-settings" element={<ProfileSetting />} />
        <Route path="/book-an-appointment" element={<BookAppointment />} />
        <Route path="/medications" element={<Medications />} />
        <Route path="/medications/:id/edit" element={<EditMedication />} />
        <Route path="/medical-report" element={<MedicalReport />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route
          path="/create-medication"
          element={<CreateMedication />}
        />
        <Route
          path="/daily-medication"
          element={<DailyMedications />}
        />
      </Routes>
    </>
  );
}
