import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';


const UpdateInfo = () => {
    const dynamicSpot = useLoaderData();
    const {_id,photo, spot, description,country,location,cost,seasonality,time,visitors} = dynamicSpot;
    const handleUpdate = (event) =>{
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const spot = form.spot.value;
        const description = form.description.value;
        const country = form.country.value;
        const location = form.location.value;
        const cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const time = form.time.value;
        const visitors = form.visitors.value;
        const updatedSpot = {photo, spot, description,country,location,cost,seasonality,time,visitors}
        console.log(updatedSpot);

        //send data to the server 
        fetch(`tourista-server.vercel.app/spot/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedSpot)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success',
                    text: 'Spot Updated Successfully!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div>
            <div className="hero bg-base-200 border rounded-3xl">
                <div className="hero-content flex-col  gap-2">
                    <div className="text-center w-full mt-4">
                        <h1 className="text-3xl font-bold">Update The Information of {spot}!</h1>
                        <p className="py-6 ">You can add your favourite tourist destination here and save for later!</p>
                    </div>
                    {/* INPUT-----FORM */}
                    <div className="card  w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleUpdate} className="card-body w-full">
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                                {/* PHOTO */}
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" defaultValue={photo} placeholder="photo URL"
                                name="photo" className="input input-bordered" required />
                                </div>
                                {/* SPOT_NAME */}
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Spot Name</span>
                                </label>
                                <input type="text" placeholder="Spot Name" defaultValue={spot}
                                name="spot" className="input input-bordered" required />
                                </div>
                                {/*SHORT------DESCRIPTION*/}
                                <div className="form-control col-span-1 md:col-span-2 ">
                                    <label className="label">
                                        <span className="label-text">Short Description</span>
                                    </label>
                                    {/* <input type="text" placeholder="Describe the Spot . . ."
                                    name="description" className="text text-bordered h-[236px] border border-base-content border-1 rounded-lg p-6" required /> */}
                                    <textarea className="textarea textarea-bordered h-[236px]" name="description" defaultValue={description} placeholder="Describe the spot . . ."></textarea>
                                </div>
                            </div>
                            {/* -------------------------------------------------------- */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                                {/*   COUNTRY-----NAME */}
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Country Name</span>
                                </label>
                                <input type="text" defaultValue={country} placeholder="Country Name" 
                                name="country" className="input input-bordered" required />
                                </div>
                                {/* LOCATION------- */}
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input type="text" defaultValue={location} placeholder="Location"
                                name="location" className="input input-bordered" required />
                                </div>
                                
                                {/* AVERAGE----COST */}
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Average Cost</span>
                                </label>
                                <input type="text" placeholder="Average Cost" defaultValue={cost}
                                name="cost" className="input input-bordered" required />
                                </div>
                                {/* SEASONALITY------ */}
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Best Season to Visit</span>
                                </label>
                                <input type="text" defaultValue={seasonality} placeholder="Seasonality"
                                name="seasonality" className="input input-bordered" required />
                                </div>
                                {/* TRAVEL-----TIME */}
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Travel Time</span>
                                </label>
                                <input type="text" defaultValue={time} placeholder="Travel Time"
                                name="time" className="input input-bordered" required />
                                </div>
                                {/* TOTAL VISITORS PER YEAR */}
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Total Visitors Per Year</span>
                                </label>
                                <input type="text" defaultValue={visitors} placeholder="Total Visitors"
                                name="visitors" className="input input-bordered" required />
                                </div>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            {/* <button className="btn basic-btn">Add</button> */}
                            <input type="submit" value="Update" className="btn basic-btn" />
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateInfo;