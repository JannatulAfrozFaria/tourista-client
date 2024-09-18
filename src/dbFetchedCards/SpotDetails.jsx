import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const SpotDetails = () => {
    const sp = useLoaderData();
    const {photo, spot, description,country,location,cost,seasonality,time,visitors,username,email} = sp;
    return (
        <div className='w-3/4 mx-auto py-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-end p-8 border-2 shadow-2xl border-green-200 rounded-3xl'> 
                <div className='animate__animated animate__fadeInUp animate__animated animate__bounce animate__delay-2s'>
                    <img  className=' h-full rounded-3xl' src={photo} alt="" />
                </div>
                <div data-aos="fade-left" data-aos-duration="3000" className=' text-gray-500  text-base md:text-xl text-left'>
                    <h2 className='text-xl md:text-2xl lg:text-3xl font-bold theme-light animate__animated animate__fadeInUp animate__animated animate__bounce animate__delay-1s'>Spot Name : {spot} </h2>
                    <h2 className='text-gray-600 sm:text-base lg:text-2xl my-6 animate__animated animate__fadeInLeft animate__animated animate__bounce animate__delay-1s'>Location: {location} , {country} </h2>
                    {/* <h2 className='font-semibold'>Description: </h2>
                    <p className='w-3/4 mx-auto'>{description} </p> */}
                    <div className='my-4'>
                        <p className='theme-light font-medium'> <span className='font-semibold text-gray-500'>Average Cost:</span> {cost} </p>
                        <p className='theme-light font-medium' > <span className='font-semibold text-gray-500'>Seasonality :</span> {seasonality} </p>
                        <p className='theme-light font-medium' > <span className='font-semibold text-gray-500'>Travel Time : </span> {time} </p>
                        <p className='theme-light font-medium'> <span className='font-semibold text-gray-500'>Visitors Per Year:</span> {visitors} </p>
                    </div>
                    <button className='btn basic-btn '>
                                <Link to='/' >Go to Home</Link>
                    </button>
                </div>
            </div>
            
        </div>
    );
};

export default SpotDetails;