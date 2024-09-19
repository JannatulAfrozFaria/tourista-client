import React from 'react';
import { Link } from 'react-router-dom';

const TouristSpot = ({ touristSpot }) => {
    const { _id, photo, country, spot, location, time, visitors, description } = touristSpot;
    return (
        <div className="grid grid-cols-2 gap-4 items-end bg-base-100 shadow-xl shadow-green-100 p-3 md:p-4 rounded-3xl">
            <div>
                <img className='rounded-2xl h-[230px] md:h-[180px]' src={photo} alt="Movie" />
            </div>
            <div className=" text-left grid grid-cols-1 items-end">
                <h2 className="text-xl theme-color">{spot} </h2>
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