import React from 'react';
import Swal from 'sweetalert2';

const AddTouristSpot = () => {
    const handleAdd = (event) =>{
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
        const username = form.username.value;
        const email = form.email.value;
        const newSpot = {photo, spot, description,country,location,cost,seasonality,time,visitors,username,email}
        console.log(newSpot);

        //send data to the server 
        fetch('http://localhost:5500/spot',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newSpot)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'New Spot Added Successfully!',
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
                    <div data-aos="fade-left" data-aos-duration="2000" className="text-center w-full mt-4">
                        <h1 className="text-3xl font-bold">Add A Tourist Spot!</h1>
                        <p className="py-6 ">You can add your favourite tourist destination here and save for later!</p>
                    </div>
                    {/* INPUT-----FORM */}
                    <div data-aos="fade-up" data-aos-duration="3000" className="card  w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleAdd} className="card-body w-full">
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                                {/* PHOTO */}
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="photo URL"
                                name="photo" className="input input-bordered" required />
                                </div>
                                {/* SPOT_NAME */}
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Spot Name</span>
                                </label>
                                <input type="text" placeholder="Spot Name"
                                name="spot" className="input input-bordered" required />
                                </div>
                                {/*SHORT------DESCRIPTION*/}
                                <div className="form-control col-span-1 md:col-span-2 ">
                                    <label className="label">
                                        <span className="label-text">Short Description</span>
                                    </label>
                                    {/* <input type="text" placeholder="Describe the Spot . . ."
                                    name="description" className="text text-bordered h-[236px] border border-base-content border-1 rounded-lg p-6" required /> */}
                                    <textarea className="textarea textarea-bordered h-[236px]" name="description" placeholder="Describe the spot . . ."></textarea>
                                </div>
                            </div>
                            {/* -------------------------------------------------------- */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                                {/*   COUNTRY-----NAME */}
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Country Name</span>
                                </label>
                                <input type="text" placeholder="Country Name"
                                name="country" className="input input-bordered" required />
                                </div>
                                {/* LOCATION------- */}
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input type="text" placeholder="Location"
                                name="location" className="input input-bordered" required />
                                </div>
                                
                                {/* AVERAGE----COST */}
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Average Cost</span>
                                </label>
                                <input type="text" placeholder="Average Cost"
                                name="cost" className="input input-bordered" required />
                                </div>
                                {/* SEASONALITY------ */}
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Best Season to Visit</span>
                                </label>
                                <input type="text" placeholder="Seasonality"
                                name="seasonality" className="input input-bordered" required />
                                </div>
                                {/* TRAVEL-----TIME */}
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Travel Time</span>
                                </label>
                                <input type="text" placeholder="Travel Time"
                                name="time" className="input input-bordered" required />
                                </div>
                                {/* TOTAL VISITORS PER YEAR */}
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Total Visitors Per Year</span>
                                </label>
                                <input type="text" placeholder="Total Visitors"
                                name="visitors" className="input input-bordered" required />
                                </div>
                                {/* USER ----NAME */}
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" placeholder="User Name"
                                name="username" className="input input-bordered" required />
                                </div>
                                {/* USER-----EMAIL */}
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email"
                                name="email" className="input input-bordered" required />
                                </div>
                            </div>
                            {/* ------------------------------------ */}
                        </div>
                        {/* --------PASSWORD------ */}
                        {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div> */}


                        <div className="form-control mt-6">
                            {/* <button className="btn basic-btn">Add</button> */}
                            <input type="submit" value="Add" className="btn basic-btn" />
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTouristSpot;