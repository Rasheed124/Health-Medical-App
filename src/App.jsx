
import Header from './components/Header'
import Footer from './components/Footer'

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Sidebar from './components/sidebar'
import DoctorDashboard from './pages/DoctorDashboard';
import PatientDashboard from './pages/PatientDashboard';
import Home from './pages/Home';
import MainHeader from './components/MainHeader';


const MainLayout = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
      <Footer />
    </>
  );
};

const DashboardLayout = () => {
  return (
    <>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );

}



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true, // Use 'index: true' for the default child route
        element: <Home />,
      },
      // Add other routes inside the children array if needed
    ],
  },
  {
    path: "/doctor",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DoctorDashboard />,
      },
      // Add other routes inside the children array if needed
    ],
  },
  {
    path: "/patient",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <PatientDashboard />,
      },
      // Add other routes inside the children array if needed
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