import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePackage from './SinglePackage';

const OurPackages = () => {
    const packages = useLoaderData();
    return (
        <div className="text-center mx-10 md:mx-auto lg:mx-auto">
            <h2 data-aos="fade-left" data-aos-duration="2000" className="text-4xl font-bold my-7 md:my-7 lg:my-10 theme-light">Our Packages</h2>
            <h2 data-aos="fade-left" data-aos-duration="3000"className=" sm:text-base lg:text-lg my-5 lg:my-10 w-full lg:w-4/5 mx-auto">Unveil Asia's Treasures: Dive into Our Tailored Tour Packages Across Bangladesh, Indonesia, Thailand, Cambodia, Malaysia, and Vietnam. Experience Unforgettable Adventures and Cultural Discoveries in Every Corner of the Continent.</h2>
            <div data-aos="fade-up" data-aos-duration="3000" className='grid lg:grid-cols-2 md:grid-cols-2  sm:grid-cols-1  gap-6 mb-16'>
                    {packages.map(pack=> 
                    <SinglePackage
                        key={pack.id} 
                        pack={pack}>
                    </SinglePackage> 
                    )}
            </div>
        </div>
    );
};

export default OurPackages;