import React from 'react';
import { Link } from 'react-router-dom';

const SinglePackage = ({pack}) => {
    const {id,package_name,description,cost_per_person,maximum_allowable_persons,facilities,image} = pack;
    return (
        <div className='h-full'>
            <div className="card  lg:w-full h-full bg-base-100 shadow-xl">
                <figure><img src={image} alt="Estate" /></figure>
                <div className="card-body">
                    <h2 className="card-title theme-color">
                    {package_name}
                    <div className="badge badge-accent"> </div>
                    </h2>
                    <div className='text-left text-gray-500'>
                        <h2 className='font-semibold'>Description: </h2>
                        <p>{description} </p>
                        <div className='grid grid-rows-1 gap-1 my-4'>
                            <p className='theme-light font-medium' > <span className='font-semibold text-gray-500'>Per Person Cost :</span> {cost_per_person} </p>
                            <p className='theme-light font-medium' > <span className='font-semibold text-gray-500'>Maximum  Allowable Persons:</span> {maximum_allowable_persons} </p>
                        </div>
                        
                        <div > <span className='font-semibold'>Facilities:</span> 
                            {
                            facilities.map(facility=><li key={facility.id}>{facility} </li>)
                            }
                        </div>
                    </div>
                    {/* <div className="card-actions my-2">
                            <Link to={`/estate/${id}`}  className='btn basic-btn'>View Property</Link>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default SinglePackage;