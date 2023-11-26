import Header from "./components/Header";
import Footer from "./components/Footer";
import Doctor from "./components/dashboard/Doctor";
import Patient from "./components/Dashboard/Patient";

export default function App() {
  // const authenticatedUser = "Doctor";
  const authenticatedUser = "Patient";

  let content;

  switch (authenticatedUser) {
    case "Doctor":
      content = <Doctor />;
      break;
    case "Patient":
      content = <Patient />;
      break;
    default:
      content = <p>Welcome, Guest</p>;
  }

  return (
    <>
      <Header />
      {content}
      <Footer />
    </>
  );
}
