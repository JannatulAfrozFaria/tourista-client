import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
   useEffect(()=>{
        document.title = "Error"
    },[])
    return (
        <div className="text-center my-24 text-gray-500 ">
            <h2 className='text-6xl'>Page Not Found!!!</h2>
            <h2 className='text-3xl mt-6'>The URL is not Correct</h2>
            <button className="btn basic-btn my-6"><Link to={'/'} >Back to Home</Link></button>
        </div>
    );
};

export default ErrorPage;