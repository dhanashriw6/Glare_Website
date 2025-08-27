import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Glare from "./pages/Glare";
import Krish from "./pages/Krish";
import GlareSolutions from "./pages/GlareSolutions";
import CategoryProducts from "./pages/CategoryProducts"; // New component for dynamic categories
import About from "./pages/About";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "companies/glare", element: <Glare /> },
      { path: "companies/krish", element: <Krish /> },
      { path: "companies/glare-solutions", element: <GlareSolutions /> },
      // Dynamic routes for category products for all companies
      { 
        path: "companies/glare/category/:categoryId", 
        element: <CategoryProducts /> 
      },
      { 
        path: "companies/krish/category/:categoryId", 
        element: <CategoryProducts /> 
      },
      { 
        path: "companies/glare-solutions/category/:categoryId", 
        element: <CategoryProducts /> 
      },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      // { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;