import Header from "./components/Header";
import Footer from "./components/Footer";
import Doctor from "./components/dashboard/Doctor";
import Patient from "./components/Dashboard/Patient";
import MainHeader from "./components/MainHeader";
import Signup from "./components/pages/SignUp";

export default function App() {
  // const authenticatedUser = "Doctor";
  const authenticatedUser = "sign-up";

  let content;

  switch (authenticatedUser) {
    // case "Home":
    //       content = (
    //         <>
    //           <MainHeader />
    //           <HomePage />
    //           <Footer />
    //         </>
    //       );
    //   break;
    case "doctor":
      content = (
        <>
          <Header />
          <Doctor />
          <Footer />
        </>
      );
      break;
    case "patient":
      content = (
        <>
          <Header />
          <Patient />
          <Footer />
        </>
      );
      break;
    case "sign-up":
      content = (
        <>
          <Signup />
        </>
      );
      break;
    default:
      content = (
        <>
          Welcome to Home
        </>
      );
  }

  return <>{content}</>;
}
