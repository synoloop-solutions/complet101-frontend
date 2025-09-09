import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
// import Form from '../pages/form';
// import Contact from '../pages/contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    // element: <Contact />,
  },
  {
    path: "/form",
    // element: <Form />,
  },
]);

export default router;
