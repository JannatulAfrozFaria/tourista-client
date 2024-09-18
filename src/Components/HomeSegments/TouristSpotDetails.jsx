import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const TouristSpotDetails = () => {
    const touristSpot = useLoaderData();
    const {spot,country,description,time,visitors,cost,photo,location} = touristSpot;
    return (
        <div className="hero  bg-base-200">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col w-4/5 text-center">
                    <h1 className="text-5xl font-bold">{spot} </h1>
                    <p className='my-4'> {location} , {country} </p>
                    <img src={photo} className=" rounded-lg shadow-2xl w-full md:w-1/2" />
                    <div>
                    <p className="py-6 w-1/2 mx-auto "> {description} </p> 
                    <div className=''>
                    <p className='theme-light font-medium' > <span className='font-semibold text-gray-500'>Per Person Cost :</span> {cost} </p>
                    <p className='theme-light font-medium' > <span className='font-semibold text-gray-500'>Visitors Per Year:</span> {visitors} </p>
                    <p className='theme-light font-medium' > <span className='font-semibold text-gray-500'>Travel Time:</span> {time} </p>
                    <Link to={'/'}>
                     <button className="btn basic-btn my-4 w-1/2 ">Go to Home</button>
                    </Link>
                </div> 
                 
                </div>
                </div>
            </div>
        </div>
    );
};

export default TouristSpotDetails;