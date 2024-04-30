import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyListedSpot = ({listed, spots,setSpots}) => {
    const {_id,spot,country,location,visitors,cost,time,description,photo} = listed;
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
                fetch(`tourista-server.vercel.app/spot/${_id}`,{
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
                          const remainingSpots = spots.filter( spn=> spn._id !== _id);
                          setSpots(remainingSpots);
                    }
                })
            }
          });
    }
    return (
        <tbody className='mx-auto'>
                             <tr>
                                    <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={photo} />
                                            </div>
                                            </div>
                                            <div>
                                            <div className="font-bold"> {spot} </div>
                                            <div className="text-sm opacity-50"> {location} </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {country}
                                        <br/>
                                    </td>
                                    <td className="hidden md:flex flex-row gap-16 ">
                                        <h2>{cost}</h2>
                                        <h2>{visitors}</h2>
                                     </td>
                                    <th>
                                        <Link to={`updateSpot/${_id}`}>
                                                <button className="btn basic-btn btn-sm">Update</button>
                                        </Link>
                                    </th>
                                    <th>
                                        <button onClick={()=>handleDelete(_id)} className="btn text-white btn-error btn-sm font-bold">Delete</button>
                                    </th>
                                </tr> 
                        </tbody>
    );
};

export default MyListedSpot;