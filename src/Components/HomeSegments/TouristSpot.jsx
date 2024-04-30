import React from 'react';
import { Link } from 'react-router-dom';

const TouristSpot = ({touristSpot}) => {
    const {_id,photo,country,spot,location,time,visitors} = touristSpot;
    return (
        <div className="card card-side bg-base-100 shadow-xl py-0">
            <figure className='w-2/3'><img className='border rounded-2xl' src={photo} alt="Movie"/></figure>
            <div className="card-body text-left">
                <h2 className="card-title theme-color">{spot} </h2>
                <p className=''>{location}</p>
                <p className=''>{country}</p>
                <p className='text-sm'>Travel Time:{time} </p>
                <div className="card-actions justify-start">
                <button className="btn basic-btn mt-4">
                   <Link to={`touristSpotDetails/${_id}`} > View Details</Link>
                </button>
                </div>
            </div>
        </div>
    );
};

export default TouristSpot;