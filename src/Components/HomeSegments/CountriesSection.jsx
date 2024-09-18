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
            <h2 data-aos="fade-left" data-aos-duration="3000"className=" sm:text-base lg:text-lg my-5 lg:my-10 w-full lg:w-4/5 mx-auto">
            Discover Asia's Hidden Gems: From the Enchanting Beauty of Bangladesh to the Exotic Jungles of Indonesia, the Serene Beaches of Thailand, the Majestic Temples of Cambodia, the Modern Marvels of Malaysia, and the Timeless Charm of Vietnam. Explore Diverse Cultures, Delicious Cuisine, and Spectacular Landscapes Across Six Captivating Countries.</h2>

            <div data-aos="fade-up" data-aos-duration="3000" className='grid  grid-cols-1 md:grid-cols-3 gap-6 mb-16'>
                    {
                        countries && countries.map(country=> 
                    <div key={country._id} className="grid grid-cols-1 bg-base-100 shadow-xl p-4 bg-gradient-to-b from-green-50 to-white">
                        <div className='w-full'>
                            <figure  className=''><img className=' w-full rounded-2xl h-[300px]' src={country.photo} /></figure>
                        </div>
                        <div className="text-left p-2 pl-4">
                            <h2 className="font-semibold theme-color mt-4 md:mt-0 text-3xl">{country.country} </h2>
                            <p className='my-2 text-justify'> {country.description} </p>
                            <div className="">
                            <button className="btn basic-btn">View Details</button>
                            </div>
                        </div>
                    </div>
                        )
                    }
            </div>
        </div>
    );
};

export default CountriesSection;