
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";


import Header from "./components/Header";
import Footer from "./components/Footer";
import Doctor from "./components/dashboard/Doctor";
import Patient from "./components/dashboard/Patient";
import Signup from "./components/pages/SignUp";
import Join from "./components/pages/Join";
import SignIn from "./components/pages/SignIn";
import Appointment from "./components/pages/doctors/Appointment";
import ChangePassword from "./components/pages/doctors/ChangePassword";
import ProfileSettings from "./components/pages/doctors/ProfileSettings";
import MedicalReport from "./components/pages/patient/MedicalReport";
import HomePage from "./components/HomePage";
import CreateMedication from "./components/pages/patient/CreateMedication";
import BookAppointment from "./components/pages/patient/BookAppointment";


const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
  {
    path: "/doctor",
    element: <Doctor />,
    children: [
      {
        path: "appointments",
        element: <Appointment />,
      },
      {
        path: "change-password",
        element: <ChangePassword />,
      },

      {
        path: "profile-settings",
        element: <ProfileSettings />,
      },
      {
        path: "medical-report",
        element: <MedicalReport />,
      },
    ],
  },
  {
    path: "/patient",
    element: <Patient />,
    children: [
      {
        path: "book-an-appointment",
        element: <BookAppointment />,
      },
      {
        path: "change-password",
        element: <ChangePassword />,
      },

      {
        path: "profile-settings",
        element: <ProfileSettings />,
      },
      {
        path: "medical-report",
        element: <MedicalReport />,
      },
      {
        path: "create-medication",
        element: <CreateMedication />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <div className="">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;