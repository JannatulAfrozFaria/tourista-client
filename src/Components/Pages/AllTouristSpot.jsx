import React, { useEffect } from 'react';

const AllTouristSpot = () => {
    useEffect(()=>{
        document.title = "Tourista | All Tourist Spots"
    },[])
    return (
        <div>
            <h3>All Spots are here</h3>
        </div>
    );
};

export default AllTouristSpot;