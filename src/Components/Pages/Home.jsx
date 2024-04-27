import React, { useEffect } from 'react';
import Banner from '../HomeSegments/Banner';
import CountriesSection from '../HomeSegments/CountriesSection';
import TouristSpots from '../HomeSegments/TouristSpots';
import OurPackages from '../HomeSegments/OurPackages';

const Home = () => {
  useEffect(()=>{
        document.title = "Tourista | Home"
    },[])
    return (
        <div>
            <Banner></Banner>
            <TouristSpots></TouristSpots>
            <CountriesSection></CountriesSection>
            <OurPackages></OurPackages>
        </div>
    );
};

export default Home;