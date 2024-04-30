import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const TouristSpotDetails = () => {
    const touristSpot = useLoaderData();
    const {spot,country,description,time,visitors,cost,photo,location} = touristSpot;
    return (
        <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <img src={photo} className=" rounded-lg shadow-2xl" />
            <div>
            <h1 className="text-5xl font-bold">{spot} </h1>
            <p className='my-4'> {location} , {country} </p>
            <p className="py-6 "> {description} </p>
            <div className=''>
                <p className='theme-light font-medium' > <span className='font-semibold text-gray-500'>Per Person Cost :</span> {cost} </p>
                <p className='theme-light font-medium' > <span className='font-semibold text-gray-500'>Visitors Per Year:</span> {visitors} </p>
                <p className='theme-light font-medium' > <span className='font-semibold text-gray-500'>Best Season to Visit:</span> {time} </p>
            </div>
            {/* <button className="btn btn-primary">Get Started</button> */}
            </div>
        </div>
        </div>
    );
};

export default TouristSpotDetails;