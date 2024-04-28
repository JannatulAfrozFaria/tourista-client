import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import MyCard from '../../dbFetchedCards/MyCard';

const MyList = () => {
    useEffect(()=>{
        document.title = "Tourista | My List"
    },[])
    const spots = useLoaderData();
    return (
        <div>
            <h3 className="text-3xl mt-12">Watch Spots added by You!</h3>
            <h2 className="text-xl text-gray-500 mt-4 mb-8">There are about {spots.length} Spots listed till Now. You can add more! </h2>
            {/* the LIST OF ALL SPOTS */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-5'>
                {
                    spots.map(sp=>
                        <MyCard key={sp._id} sp={sp}></MyCard>
                    )
                }
            </div>
        </div>
    );
};

export default MyList;