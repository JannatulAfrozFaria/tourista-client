import React, { useEffect, useState } from 'react';

const SingleTour = ({tour}) => {
    const {country_name,tour_description,destinations_visited,total_persons_attended,occurring_date,image} = tour;
    return (
        <div className="hero bg-base-200 border rounded-3xl p-4">
            <div className="hero-content flex-col lg:flex-row gap-8">
                <div className='w-full md:w-1/2 h-3/4'>
                    <img className=' border rounded-3xl h-full' src={image} />
                </div>
                <div className='w-full md:w-1/2'>
                    <h1 className="text-3xl font-bold text-left mb-2"> {country_name} Tour </h1>
                    <div className='text-left text-gray-500'>
                            <p > 
                                <span className='font-semibold'>Destinations Visited :</span> 
                                <div className='grid grid-cols-1 md:grid-cols-3 w-2/3 theme-light'>
                                        {
                                            destinations_visited.map(desti=><p key={desti.id}>{desti} </p>)
                                        }
                                </div>
                            </p>
                            <h2 className='font-semibold mt-4'>Description: </h2>
                            <p>{tour_description} </p>
                            <div className='grid grid-rows-1 gap-1 my-4'>
                                <p className='theme-light font-medium' > <span className='font-semibold text-gray-500'>Total Persons :</span> {total_persons_attended} </p>
                                <p className='theme-light font-medium' > <span className='font-semibold text-gray-500'> Tour Date :</span> {occurring_date}</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleTour;