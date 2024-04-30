import React, { useEffect, useState } from 'react';
import Banner from '../HomeSegments/Banner';
import CountriesSection from '../HomeSegments/CountriesSection';
import TouristSpots from '../HomeSegments/TouristSpots';
import OurPackages from '../HomeSegments/OurPackages';
import PreviousTours from '../HomeSegments/PreviousTours';
import { Fade } from "react-awesome-reveal";
// import Lottie from "lottie-react";
// import { useLoaderData } from 'react-router-dom';

const Home = () => {
  useEffect(()=>{
        document.title = "Tourista | Home"
    },[])
    
    return (
        <div>
            <Fade >
                <Banner></Banner>
            </Fade>
            <TouristSpots></TouristSpots>
            <CountriesSection></CountriesSection>
            <OurPackages></OurPackages>
            <PreviousTours></PreviousTours>
        </div>
    );
};

export default Home;