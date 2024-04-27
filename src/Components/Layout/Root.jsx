import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Root = () => {
    return (
        <div>
            <div className="mx-auto font-poppins">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer className='w-full' ></Footer>
        </div>
    );
};

export default Root;