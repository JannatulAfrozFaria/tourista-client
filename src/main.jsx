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
import AddTouristSpot from './Components/Pages/AddTouristSpot.jsx';
import MyList from './Components/Pages/MyList.jsx';
import SpotDetails from './dbFetchedCards/SpotDetails.jsx';
import PrivateRoute from './Components/Pages/PrivateRoute.jsx';
import UpdateSpot from './dbFetchedCards/UpdateSpot.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
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
        path: '/packages',
        element: <OurPackages></OurPackages>,
        loader: () => fetch('/TourPackagesData.json')
      },
      {
        path: '/previousTours',
        element: <PreviousTours></PreviousTours>
      },
      {
        path: '/allTouristSpot',
        element: <AllTouristSpot></AllTouristSpot>,
        loader: () => fetch('http://localhost:5500/spot')
      },
      {
        path: '/spot/:id',
        element: <SpotDetails></SpotDetails> ,
       loader: ({params}) => fetch(`http://localhost:5500/spot/${params.id}`)
      },
      {
        path: '/addTouristSpot',
        element: <AddTouristSpot></AddTouristSpot>
      },
      {
        path: '/myList',
        element: <PrivateRoute>
                    <MyList></MyList>
                </PrivateRoute>,
        loader: () => fetch('http://localhost:5500/spot')         
      },
      {
        path: 'updateSpot/:id',
        element: <UpdateSpot></UpdateSpot>,
        loader: ({params}) => fetch(`http://localhost:5500/spot/${params.id}`)
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
