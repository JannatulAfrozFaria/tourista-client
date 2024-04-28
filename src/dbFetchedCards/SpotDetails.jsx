import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const SpotDetails = () => {
    // const spots = useLoaderData();
    // const {id} = useParams();
    // const idInt = parseInt(id);
    // const spot = spots.find(spot=> spot._id === idInt);
    // console.log(spots);
    // const {photo, spot, description,country,location,cost,seasonality,time,visitors,username,email} = sp;
    const sp = useLoaderData();
    const {photo, spot, description,country,location,cost,seasonality,time,visitors,username,email} = sp;
    return (
        <div className='text-center mx-auto'>
            <h2 className='text-xl md:text-2xl lg:text-3xl font-bold theme-light animate__animated animate__fadeInUp animate__animated animate__bounce animate__delay-1s'>Spot Name : {spot} </h2>
            <h2 className='text-gray-600 sm:text-base lg:text-2xl my-6 animate__animated animate__fadeInLeft animate__animated animate__bounce animate__delay-1s'>Location: {location} , {country} </h2>
            <div className='text-center my-5 mx-10 md:mx-auto lg:mx-auto sm:w-5/6 lg:w-full animate__animated animate__fadeInUp animate__animated animate__bounce animate__delay-2s'>
                <img className=' rounded-3xl sm:h-full lg:h-[500px]' src={photo} alt="" />
            </div>
            <div data-aos="fade-left" data-aos-duration="3000" className='text-left text-gray-500 mx-10 md:mx-auto lg:mx-auto sm:w-5/6 lg:w-full text-xl'>
                        <p > <span className='font-semibold'>Average Cost:</span> {cost} </p>
                        <h2 className='font-semibold'>Description: </h2>
                        <p>{description} </p>
                        <div className='grid grid-cols-2 gap-1 my-4'>
                            <p className='theme-light font-medium' > <span className='font-semibold text-gray-500'>Seasonality :</span> {seasonality} </p>
                            <p className='theme-light font-medium' > <span className='font-semibold text-gray-500'>Travel Time : </span> {time} </p>
                            <p className='theme-light font-medium'> <span className='font-semibold text-gray-500'>Total Visitors Per Year:</span> {visitors} </p>
                        </div>

                        <button className='btn basic-btn '>
                            <Link to='/' >Go to Home</Link>
                        </button>
            </div>
        </div>
    );
};

export default SpotDetails;