import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SafeGuard from "../pages/SafeGuard";
import ServicesHub from "../pages/ServicesHub";
// import Form from '../pages/form';
// import Contact from '../pages/contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/safeguard",
    element: <SafeGuard />,
  },
  {
    path: "/serviceshub",
    element: <ServicesHub />,
  },
]);

export default router;
