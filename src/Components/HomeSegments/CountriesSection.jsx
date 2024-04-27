import React from 'react';

const CountriesSection = () => {
    // const projects = useLoaderData();
    return (
        <div className="text-center mx-10 md:mx-auto lg:mx-auto">
            <h2 data-aos="fade-left" data-aos-duration="2000" className="text-4xl font-bold my-7 md:my-7 lg:my-10 theme-light">Countries Section</h2>
            <h2 data-aos="fade-left" data-aos-duration="3000"className=" sm:text-base lg:text-lg my-5 lg:my-10 w-full lg:w-4/5 mx-auto">Discover Asia's Hidden Gems: From the Enchanting Beauty of Bangladesh to the Exotic Jungles of Indonesia, the Serene Beaches of Thailand, the Majestic Temples of Cambodia, the Modern Marvels of Malaysia, and the Timeless Charm of Vietnam. Explore Diverse Cultures, Delicious Cuisine, and Spectacular Landscapes Across Six Captivating Countries.</h2>
            <div data-aos="fade-up" data-aos-duration="3000" className='grid lg:grid-cols-2 md:grid-cols-2  sm:grid-cols-1  gap-6 mb-16'>
                    {/* {projects.map(project=> 
                    <ParticularEstate 
                        key={project.id} 
                        project={project}>
                    </ParticularEstate> 
                    )} */}
            </div>
        </div>
    );
};

export default CountriesSection;