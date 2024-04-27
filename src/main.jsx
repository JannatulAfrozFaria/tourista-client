import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Root from './Components/Layout/Root.jsx';
import ErrorPage from './Components/Pages/ErrorPage.jsx';
import Login from './Components/Pages/Login.jsx';
import Register from './Components/Pages/Register.jsx';
import Home from './Components/Pages/Home.jsx';
import AuthProvider from './Components/Provider/AuthProvider.jsx';
import AllTouristSpot from './Components/Pages/AllTouristSpot.jsx';
import OurPackages from './Components/HomeSegments/OurPackages.jsx';
import PreviousTours from './Components/HomeSegments/PreviousTours.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/TourPackagesData.json')
      },
      {
        path: '/alltouristspot',
        element: <AllTouristSpot></AllTouristSpot>
      },
      {
        path: '/packages',
        element: <OurPackages></OurPackages>,
        loader: () => fetch('/TourPackagesData.json')
      },
      {
        path: '/previoustours',
        element: <PreviousTours></PreviousTours>
      },
      
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
    }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
          <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
