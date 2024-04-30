import React, { useEffect, useState } from 'react';

const CountriesSection = () => {
    const [countries,setCountries] = useState(null);

    useEffect(()=>{
        fetch('https://tourista-server.vercel.app/countries2/')
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            console.log(data)
            setCountries(data);
        })
    },[])
    return (
        <div className="text-center mx-10 md:mx-auto lg:mx-auto">
            <h2 data-aos="fade-left" data-aos-duration="2000" className="text-4xl font-bold my-7 md:my-7 lg:my-10 theme-light">Countries Section</h2>
            <h2 data-aos="fade-left" data-aos-duration="3000"className=" sm:text-base lg:text-lg my-5 lg:my-10 w-full lg:w-4/5 mx-auto">Discover Asia's Hidden Gems: From the Enchanting Beauty of Bangladesh to the Exotic Jungles of Indonesia, the Serene Beaches of Thailand, the Majestic Temples of Cambodia, the Modern Marvels of Malaysia, and the Timeless Charm of Vietnam. Explore Diverse Cultures, Delicious Cuisine, and Spectacular Landscapes Across Six Captivating Countries.</h2>
            <div data-aos="fade-up" data-aos-duration="3000" className='grid grid-cols-1 gap-6 mb-16'>
                    {
                        countries && countries.map(country=> 
                    <div key={country._id} className="card lg:card-side bg-base-100 shadow-xl">
                        <div className='w-1/3'>
                            <figure  className=''><img className='rounded-2xl' src={country.photo} /></figure>
                        </div>
                        <div className="text-left ml-6 w-2/3">
                            <h2 className="card-title theme-color text-3xl">{country.country} </h2>
                            <p className='my-6'> {country.description} </p>
                            <div className="card-actions justify-start mt-6">
                            <button className="btn basic-btn">View Details</button>
                            </div>
                        </div>
                    </div>
                    // <div key={country._id} className="card bg-base-100 shadow-xl image-full">
                    //     <figure><img src={country.photo}/></figure>
                    //     <div className="card-body text-center">
                    //         <h2 className="card-title text-left">{country.country} </h2>
                    //         <p className='text-left' >{country.description} </p>
                    //         <div className="card-actions justify-start">
                    //         <button className="btn basic-btn">Buy Now</button>
                    //         </div>
                    //     </div>
                    // </div>
                        )
                    }
            </div>
        </div>
    );
};

export default CountriesSection;