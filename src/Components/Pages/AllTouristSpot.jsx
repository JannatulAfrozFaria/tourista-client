import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import SpotCard from '../../dbFetchedCards/SpotCard';
import { IoIosArrowDown } from "react-icons/io";

const AllTouristSpot = () => {
    const spots = useLoaderData();
    useEffect(()=>{
        document.title = "Tourista | All Tourist Spots"
    },[])
    return (
        <div>
            <h3 className="text-3xl">Explore All Spots added by Users</h3>
            <h2 className="text-xl">Spots: {spots.length} </h2>
            {/* SORT BUTTON------ */}
            <div>
                <div className="dropdown dropdown-bottom dropdown-end">
                <div tabIndex={0} role="button" className="btn m-1">Sort  <IoIosArrowDown /> </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Average Cost</a></li>
                </ul>
                </div>
            </div>
            {/* the LIST OF ALL SPOTS */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-5'>
                {
                    spots.map(sp=><SpotCard key={sp._id} sp={sp} ></SpotCard> )
                }
            </div>
        </div>
    );
};

export default AllTouristSpot;