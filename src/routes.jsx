import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Glare from "./pages/Glare";
import Krish from "./pages/Krish";
import GlareSolutions from "./pages/GlareSolutions";
import KitchenKnives from "./pages/KitchenKnives";

// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "companies/glare", element: <Glare /> },
      { path: "companies/krish", element: <Krish /> },
      { path: "companies/glare-solutions", element: <GlareSolutions /> },
      { path: "companies/glare/kitchenknives", element: <KitchenKnives /> },
      //   { path: "about", element: <About /> },
      //   { path: "contact", element: <Contact /> },
      //   { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
