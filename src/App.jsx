import Header from "./components/Header";
import Footer from "./components/Footer";
import Doctor from "./components/dashboard/Doctor";
import Patient from "./components/dashboard/Patient";
import Signup from "./components/pages/SignUp";
import Join from "./components/pages/Join";
import SignIn from "./components/pages/SignIn";
import HomePage from "./components/pages/HomePage";

export default function App() {
  // const authenticatedUser = "doctor";
  const authenticatedUser = "home";

  let content;

  switch (authenticatedUser) {
    case "home":
      content = (
        <>
          <Header />
          <HomePage />
          <Footer />
        </>
      );
      break;
    case "doctor":
      content = (
        <>
          <Doctor />
        </>
      );
      break;
    case "patient":
      content = (
        <>
          <Patient />
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
      content = <>404 Page</>;
  }

  return <>{content}</>;
}
