import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./Components/Header";

const App = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
