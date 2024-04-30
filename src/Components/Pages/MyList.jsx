import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Fade ,Slide,JackInTheBox } from "react-awesome-reveal";
// import MyCard from '../../dbFetchedCards/MyCard';
import Lottie from "lottie-react";
import SoloTrip from "/public/SoloTrip.json";
import MyListedSpot from './MyListedSpot';

const MyList = () => {
    useEffect(()=>{
        document.title = "Tourista | My List"
    },[])
    const loadedSpots = useLoaderData();
    console.log(loadedSpots);
    const [spots,setSpots] = useState(loadedSpots);

    // const handleDelete = (_id) =>{
    //     console.log(_id)
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //       }).then((result) => {
    //         if (result.isConfirmed) {
    //             fetch(`tourista-server.vercel.app/spot/${_id}`,{
    //                 method: 'DELETE'
    //             })
    //             .then(res=>res.json())
    //             .then(data=>{
    //                 console.log(data);
    //                 if(data.deletedCount>0){
    //                     Swal.fire({
    //                         title: "Deleted!",
    //                         text: "Your Selected Spot has been deleted.",
    //                         icon: "success"
    //                       });
    //                       const remainingSpots = spots.filter( spn=> spn._id !== _id);
    //                       setSpots(remainingSpots);
    //                 }
    //             })
    //         }
    //       });
    // }


    return (
        <div>
            <div  className='w-1/3 mx-auto' >
                    <Lottie className='w-2/3 mx-auto' animationData={SoloTrip} />
            </div>
            <Slide direction='left'>
                <h3 className="text-3xl mt-12">Watch Spots added by You!</h3>
                <h2 className="text-xl text-gray-500 mt-4 mb-8">There are about {spots.length} Spots listed till Now. You can add more! </h2>
            </Slide>
            {/* the LIST OF ALL SPOTS */}
            <div data-aos="fade-up" data-aos-duration="3000" >
                <table className="table">
                        {/* <thead className='mx-0 text-left'>
                        <tr>
                            <th>
                            </th>
                            <th>Spot Name</th>
                            <th>Country</th>
                            <th className="hidden md:flex flex-row gap-8">
                                  <h2>Average Cost</h2>
                                  <h2>Visitors Per Year</h2>
                            </th>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead> */}
                        <div className='flex gap-12  font-bold text-gray-400 w-2/3'>
                            <div className='flex justify-start  gap-20 md:gap-0 md:justify-between w-full md:w-1/2'>
                                <p className='ml-20'>Spot Name</p>
                                <p>Country</p>
                            </div>
                            <div className='hidden md:flex flex-row gap-8 w-0 md:w-1/2'>
                                <p>Average Cost</p>
                                <p >Visions Per Year</p>
                            </div>
                        </div>
                        <hr className='w-2/3 mt-4 ml-4' />
                        
                        <div>
                            {
                                spots.map(listed => <MyListedSpot
                                key={listed._id}
                                listed = {listed}
                                spots = {spots}
                                setSpots = {setSpots}
                                ></MyListedSpot> )
                            }
                        </div>
                        {/* <tbody>
                            {
                                spots.map(sp=>  <tr key={sp._id}>
                                    <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={sp.photo} />
                                            </div>
                                            </div>
                                            <div>
                                            <div className="font-bold"> {sp.spot} </div>
                                            <div className="text-sm opacity-50"> {sp.location} </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {sp.country}
                                        <br/>
                                    </td>
                                    <td className="hidden md:flex flex-row gap-16 ">
                                        <h2>{sp.cost}</h2>
                                        <h2>{sp.visitors}</h2>
                                     </td>
                                    <th>
                                        <Link to={`updateSpot/${sp._id}`}>
                                                <button className="btn basic-btn btn-sm">Update</button>
                                        </Link>
                                    </th>
                                    <th>
                                        <button onClick={()=>handleDelete(sp._id)} className="btn text-white btn-error btn-sm font-bold">Delete</button>
                                    </th>
                                </tr> )
                            }
                        </tbody> */}
                    </table>
                
            </div>
        </div>
    );
};

export default MyList;