import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './Pages/LandingPage';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Error from './Pages/Error';
import DashboardLayout from './Pages/DashboardLayout';
import NavbarComponent from './components/NavbarComponent';
import DoughnutChart from './Pages/DoughnutChart';
import ForgetPAssword from './Pages/ForgetPAssword';
import ResetPassWord from './Pages/ResetPassword'
import GmPlan from './Pages/GmPlan';
import BMICalculator from './Pages/BMICalculator';
import Recipes from './Pages/Recipes';
import FatBurners from './Pages/FatBurners';
import BMRCalculator from './Pages/BMRCalculator';
import LineChart from './Pages/LineChart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/forgetpassword',
    element: <ForgetPAssword />
  },
  {
    path: '/resetpassword/:token',
    element: <ResetPassWord />
  },
  {
    path: '/dashboard',
    element: <NavbarComponent />,
    children: [
      {
        path: '',
        element: <DashboardLayout />,
        children: [
          {
            path: 'recipes',
            element: <Recipes />,
          },
          {
            path: 'fat-burners',
            element: <FatBurners />,
          },
          {
            path: 'gm-plan',
            element: <GmPlan />
          },
          {
            path: 'bmi-calculator',
            element: <BMICalculator />
          },
          {
            path: 'bmr-calculator',
            element: <BMRCalculator />
          },
          {
            path: 'charts',
            element: <DoughnutChart />,
          },
          {
            path: 'line-chart',
            element: <LineChart />
          }
        ],
      },
    ],
    errorElement: <Error />,
  },
  // Catch-all route to handle any other URLs
  {
    path: '*',
    element: <Error />,
  },
]);


const App = () => {
  
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
};

export default App;
