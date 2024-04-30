import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Root = () => {
    return (
        <div className='font-poppins'>
            <div className="mx-auto max-w-[1280px]">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer ></Footer>
        </div>
    );
};

export default Root;