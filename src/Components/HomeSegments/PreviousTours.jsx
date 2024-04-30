import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleTour from './SingleTour';

const PreviousTours = () => {
    // const tours = useLoaderData();
    const [tours,setTours] = useState(null);

    useEffect(()=>{
        fetch('/PreviousTours.json')
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            console.log(data)
            setTours(data);
        })
    },[])
    return (
        <div className="text-center mx-10 md:mx-auto lg:mx-auto">
            <h2 data-aos="fade-left" data-aos-duration="2000" className="text-4xl font-bold my-7 md:my-7 lg:my-10 theme-light"> Tours Of 2023</h2>
            <h2 data-aos="fade-left" data-aos-duration="3000"className=" sm:text-base lg:text-lg my-5 lg:my-10 w-full lg:w-4/5 mx-auto">Embark on a Journey Through Asia! Explore the Unforgettable Tours of 2023. Discover Hidden Gems, Cultural Marvels, and Spectacular Landscapes Across the Continent in the New Year.</h2>
            <div data-aos="fade-up" data-aos-duration="3000" className='grid grid-cols-1  gap-6 mb-16'>
                    {
                        tours && tours.map(tour=><SingleTour key={tour.id} tour ={tour} ></SingleTour>)
                    }
            </div>
        </div>
    );
};

export default PreviousTours;