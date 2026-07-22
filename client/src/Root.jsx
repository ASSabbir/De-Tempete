import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Nav from './Components/Shared/Nav';
import Footer from './Components/Shared/Footer';
import CostCalculatorModal from './Components/Shared/CostCalculatorModal/CostCalculatorModal';

const Root = () => {
    const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

    const openCalculator = () => setIsCalculatorOpen(true);
    const closeCalculator = () => setIsCalculatorOpen(false);

    return (
        <div className=' h-screen font-dmSans '>
            <Nav openCalculator={openCalculator}></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
            <CostCalculatorModal
                isOpen={isCalculatorOpen}
                onClose={closeCalculator}
            />
        </div>
    );
};

export default Root;