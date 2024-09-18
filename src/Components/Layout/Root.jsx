import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Root = () => {
    return (
        <div className='font-poppins'>
            <div className="mx-auto w-5/6">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer ></Footer>
        </div>
    );
};

export default Root;