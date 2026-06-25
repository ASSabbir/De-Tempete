import React from 'react';
import { Outlet } from 'react-router';
import Nav from './Components/Shared/Nav';
import Footer from './Components/Shared/Footer';

const Root = () => {
    return (
        <div className=' h-screen '>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;