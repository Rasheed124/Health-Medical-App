import Header from './components/Header'
import Footer from './components/Footer'
import Doctor from './components/dashboard/Doctor';
import Patient from './components/Dashboard/Patient';
        
export default function App() {

  const authenticatedUser = "Doctor";
  // const authenticatedUser = "Patient";
    
  if (authenticatedUser === 'Doctor') {
    return (
      <>
        <Header />
          <Doctor/>
        <Footer />
      </>
      );
    } else if (authenticatedUser === 'Patient') {
      return (
        <>
          <Header />
            <Patient />
          <Footer />
        </>
      );
    } else {
      return (
        <>
          <Header />
            <p>Welcome, Guest</p>
          <Footer />
        </>
      );
    }
}