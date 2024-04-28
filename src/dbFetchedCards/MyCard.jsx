import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCard = ({sp}) => {
    const {_id,photo, spot, description,country,location,cost,seasonality,time,visitors,username,email} = sp;
    const handleDelete = (_id) =>{
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5500/spot/${_id}`,{
                    method: 'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    if(data.deletedCount>0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Selected Spot has been deleted.",
                            icon: "success"
                          });
                    }
                })
            }
          });
    }
    return (
        <div className="card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Album"/></figure>
            <div className="card-body">
                <h2 className="card-title">Tourist Spot: {spot} </h2>
                <div className="text-left">
                    <p className='theme-light font-medium' > <span className='font-semibold text-gray-500'>Country :</span> {country} </p>
                    <p className='theme-light font-medium' > <span className='font-semibold text-gray-500'>Location :</span> {location} </p>
                    <p className='theme-light font-medium' > <span className='font-semibold text-gray-500'>Average Cost :</span> {cost} </p>
                    <p className='theme-light font-medium' > <span className='font-semibold text-gray-500'>Visitors Per Year :</span> {visitors} </p>
                    <p className='theme-light font-medium' > <span className='font-semibold text-gray-500'>Travel Time :</span> {time} </p>
                    <p className='theme-light font-medium' > <span className='font-semibold text-gray-500'>Seasonality :</span> {seasonality} </p>
                </div>
                
                {/* BUTTON-------- */}
                <div className="card-actions justify-start mt-4 gap-3">
                    {/* <Link to={`spot/${_id}`}  className='btn basic-btn'>View Property</Link> */}
                    <button className='btn basic-btn'>
                        <Link to={`updateSpot/${_id}`} >Update</Link>
                    </button>
                    {/* <button className='btn basic-btn' >Update</button> */}
                    <button className='btn btn-neutral' onClick={()=>handleDelete(_id)} >Delete</button>
                </div>
            </div>
        </div>
    );
};
export default MyCard;