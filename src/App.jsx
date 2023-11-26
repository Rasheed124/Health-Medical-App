import Header from "./components/Header";
import Footer from "./components/Footer";
import Doctor from "./components/dashboard/Doctor";
import Patient from "./components/Dashboard/Patient";
import MainHeader from "./components/MainHeader";
import Signup from "./components/pages/SignUp";
import Join from "./components/pages/Join";
import SignIn from "./components/pages/SignIn";

export default function App() {
  // const authenticatedUser = "Doctor";
  const authenticatedUser = "join";

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
    case "sign-in":
      content = (
        <>
          <SignIn />
        </>
      );
      break;
    case "join":
      content = (
        <>
          <Join />
        </>
      );
      break;
    default:
      content = (
        <>
          404 Page
        </>
      );
  }

  return <>{content}</>;
}
