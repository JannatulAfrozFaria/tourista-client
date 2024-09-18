import React from 'react';
import { Link } from 'react-router-dom';

const TouristSpot = ({touristSpot}) => {
    const {_id,photo,country,spot,location,time,visitors,description} = touristSpot;
    return (
        <div className="grid grid-cols-1 bg-base-100 shadow-xl p-8 rounded-3xl">
            <div>
                <figure className='w-full'><img className='border w-full rounded-2xl h-[230px] md:h-[400px]' src={photo} alt="Movie"/></figure>
            </div>
            <div className="p-4 text-left">
                <h2 className="card-title theme-color">{spot} </h2>
                <p className=''>{location} , {country}</p>
                {/* <p className=''>{country}</p> */}
                <p className='text-sm'>Travel Time:{time} </p>
                <p className='text-sm'>Visitors Per Year:{visitors} </p>
                
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