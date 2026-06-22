import React from 'react';
import { Outlet } from 'react-router';
import Nav from './Components/Shared/Nav';

const Root = () => {
    return (
        <div className=' h-screen '>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;