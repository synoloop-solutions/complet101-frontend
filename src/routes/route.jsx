import {createBrowserRouter} from 'react-router-dom'
import LandingPage from '../pages/landingpag';
import Form from '../pages/form';
import Contact from '../pages/contact';



const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/form',
    element: <Form />,
  },
  
]);

export default router;
