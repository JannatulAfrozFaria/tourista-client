import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Root = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto font-poppins">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer ></Footer>
        </div>
    );
};

export default Root;