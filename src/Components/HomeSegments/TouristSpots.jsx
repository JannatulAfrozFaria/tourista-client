import React from 'react';
import { Slide } from "react-awesome-reveal";

const TouristSpots = () => {
    return (
        <div className="text-center mx-10 md:mx-auto lg:mx-auto">
            <Slide delay={1000} >
                <h2  className="text-4xl font-bold my-7 md:my-7 lg:my-10 theme-light">Tourist Spots</h2>
                <h2 className=" sm:text-base lg:text-lg my-5 lg:my-10 w-full lg:w-4/5 mx-auto">Embark on an Asian Adventure: Explore the Rich Cultural Tapestry and Breathtaking Landscapes of Bangladesh, Indonesia, Thailand, Cambodia, Malaysia, and Vietnam. Dive into Ancient Temples, Pristine Beaches, and Vibrant Markets. Discover the Charm and Diversity of Asia with Our Unforgettable Tourist Spot Packages.</h2>
            </Slide>
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

export default TouristSpots;