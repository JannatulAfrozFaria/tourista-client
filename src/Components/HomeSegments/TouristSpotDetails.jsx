import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const TouristSpotDetails = () => {
    const touristSpots = useLoaderData();
    // const {id} = useParams();
    // const idInt = parseInt(id);
    // console.log(idInt);
    // const touristSpot = touristSpots.find(tSpot=> tSpot._id === idInt);
    // console.log(touristSpot);

    

    // const {photo,description,spot,location,country,cost,time,visitors} = singleSpot;
    return (
        <div>
            {/* <h2>Details Of: {touristSpot.name} </h2> */}
        </div>
    );
};

export default TouristSpotDetails;