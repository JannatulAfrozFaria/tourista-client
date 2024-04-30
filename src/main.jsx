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
// import UpdateSpot from './dbFetchedCards/UpdateSpot.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import TouristSpotDetails from './Components/HomeSegments/TouristSpotDetails.jsx';
// import Navbar from './Components/Layout/Navbar.jsx';
import UpdateInfo from './Components/Pages/UpdateInfo.jsx';
// ..
AOS.init();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      // {
      //   path: '/',
      //   element: <Navbar></Navbar>,
      //   // loader: () =>fetch('')
      // },
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('tourista-server.vercel.app/spot')
      },
      {
        path: 'touristSpotDetails/:id',
        element: <TouristSpotDetails></TouristSpotDetails>,
        // loader: ({params}) => fetch(`tourista-server.vercel.app/countries/${params._id}`)
        loader: ()=>fetch('tourista-server.vercel.app/countries/')
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
        loader: () => fetch('tourista-server.vercel.app/spot')
      },
      {
        path: '/spot/:id',
        element: <SpotDetails></SpotDetails> ,
       loader: ({params}) => fetch(`tourista-server.vercel.app/spot/${params.id}`)
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
        loader: () => fetch('tourista-server.vercel.app/spot')         
      },
      {
        path: 'updateSpot/:id',
        // element: <UpdateSpot></UpdateSpot>,
        element: <UpdateInfo></UpdateInfo>,
        loader: ({params}) => fetch(`tourista-server.vercel.app/spot/${params.id}`)
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
