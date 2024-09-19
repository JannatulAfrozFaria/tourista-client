import React from 'react';
import { Link } from 'react-router-dom';

const TouristSpot = ({ touristSpot }) => {
    const { _id, photo, country, spot, location, time, visitors, description } = touristSpot;
    return (
        <div className="grid grid-cols-2 items-center bg-base-100 shadow-xl shadow-green-100 p-6 rounded-3xl">
            <div>
                <img className='rounded-2xl h-[200px]' src={photo} alt="Movie" />
            </div>
            <div className="p-4 text-left grid grid-cols-1 items-end">
                <h2 className="text-2xl theme-color">{spot} </h2>
                <div className='py-2'>
                    <p className=''>{location} , {country}</p>
                    {/* <p className=''>{country}</p> */}
                    <p className='text-sm'>Travel Time:{time} </p>
                    <p className='text-sm'>Visitors Per Year : {visitors} </p>
                </div>
                <div className="">
                    <button className="btn basic-btn">
                        <Link to={`touristSpotDetails/${_id}`} > View Details</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TouristSpot;