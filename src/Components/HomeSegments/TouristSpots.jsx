import React, { useEffect, useState } from 'react';
import { Slide } from "react-awesome-reveal";
import TouristSpot from './TouristSpot';

const TouristSpots = () => {
    const [touristSpots,setTouristSpots] = useState(null);

    useEffect(()=>{
        fetch('tourista-server.vercel.app/countries')
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            console.log(data)
            setTouristSpots(data);
        })
    },[])
    return (
        <div className="text-center mx-10 md:mx-auto lg:mx-auto">
            <Slide delay={1000} >
                <h2  className="text-4xl font-bold my-7 md:my-7 lg:my-10 theme-light">Tourist Spots</h2>
                <h2 className=" sm:text-base lg:text-lg my-5 lg:my-10 w-full lg:w-4/5 mx-auto">Embark on an Asian Adventure: Explore the Rich Cultural Tapestry and Breathtaking Landscapes of Bangladesh, Indonesia, Thailand, Cambodia, Malaysia, and Vietnam. Dive into Ancient Temples, Pristine Beaches, and Vibrant Markets. Discover the Charm and Diversity of Asia with Our Unforgettable Tourist Spot Packages.</h2>
            </Slide>
            <div data-aos="fade-up" data-aos-duration="3000" className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-16'>
            {
                        touristSpots && touristSpots.map(touristSpot=><TouristSpot
                     key={touristSpot.id} touristSpot ={touristSpot} ></TouristSpot>)
                    }
            </div>
        </div>
    );
};

export default TouristSpots;