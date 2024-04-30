import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SpotCard from '../../dbFetchedCards/SpotCard';
import { IoIosArrowDown } from "react-icons/io";
import { Fade ,Slide } from "react-awesome-reveal";
import Lottie from "lottie-react";
import Tourism from "/src/Tourism.json";

const AllTouristSpot = () => {

    useEffect(()=>{
        document.title = "Tourista | All Tourist Spots"
    },[])

    const spots = useLoaderData();
    const [spotList,setSpotList] = useState([]);

    console.log(spots);
   
    const handleCostSorting = () =>{
        const sortByAverageCost = spotList.sort((a,b)=>{
            return parseInt(b.cost.slice(1)) - parseInt(a.cost.slice(1))
        })
        setSpotList([...sortByAverageCost]);
        console.log(sortByAverageCost);
    }
    
    return (
        <div>
            <div  className='w-1/3 mx-auto' >
                    <Lottie className='w-2/3 mx-auto' animationData={Tourism} />
            </div>
            <Fade >
                <h3 className="text-3xl mt-12">Explore All Spots added by Users</h3>
                <h2 className="text-xl text-gray-500 mt-4 mb-8">There are about {spots.length} Spots listed till Now! You can add your personal favourite too! </h2>
            </Fade>
            {/* SORT BUTTON------ */}
            <Slide direction={'left'} delay ={1000} >
                <div>
                    <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1">Sort  <IoIosArrowDown /> </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={handleCostSorting} ><a>Average Cost</a></li>
                    </ul>
                    </div>
                </div>
            </Slide>
            {/* the LIST OF ALL SPOTS */}
            <div data-aos="fade-up" data-aos-duration="3000" className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-5'>
                {
                    spots.map(sp=><SpotCard key={sp._id} sp={sp} ></SpotCard> )
                }
            </div>
        </div>
    );
};

export default AllTouristSpot;