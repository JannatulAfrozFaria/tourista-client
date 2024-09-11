import React from 'react';
import { Link } from 'react-router-dom';

const SpotCard = ({sp}) => {
    const { _id,photo, spot, description,country,location,cost,seasonality,time,visitors,username,email} = sp;
    return (
        <div className="card-side bg-base-100 shadow-xl">
            <figure><img className='h-[280px]' src={photo} alt="Album"/></figure>
            <div className="card-body">
                <h2 className="card-title">Tourist Spot: {spot} </h2>
                <div className="text-left">
                    <p className='theme-light font-medium' > <span className='font-semibold text-gray-500'>Country :</span> {country} </p>
                    <p className='theme-light font-medium' > <span className='font-semibold text-gray-500'>Location :</span> {location} </p>
                    <p className='theme-light font-medium' > <span className='font-semibold text-gray-500'>Average Cost :</span> {cost} </p>
                    <p className='theme-light font-medium' > <span className='font-semibold text-gray-500'>Visitors Per Year :</span> {visitors} </p>
                    <p className='theme-light font-medium' > <span className='font-semibold text-gray-500'>Travel Time :</span> {time} </p>
                    <p className='theme-light font-medium' > <span className='font-semibold text-gray-500'>Seasonality :</span> {seasonality} </p>
                </div>
                

                {/* BUTTON-------- */}
                <div className="card-actions justify-start">
                    <Link to={`/spot/${_id}`}  className='btn basic-btn'>View Details</Link>
                    {/* <Link className='btn basic-btn'>
                        View Details
                    </Link> */}
                </div>
            </div>
        </div>
    );
};

export default SpotCard;