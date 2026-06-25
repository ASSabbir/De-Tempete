import React from 'react';
import img1 from '../../asstes/Images/DE-TEMPETE-Logo-2048x580.webp'
import img2 from '../../asstes/Images/New folder/WhatsApp_Image_2024-11-23_at_15.20.44_9f7b10af-removebg-preview-1-e1736053189510-300x205-1.webp'
import img3 from '../../asstes/Images/New folder/Acc-1.webp';
import img4 from '../../asstes/Images/New folder/HM-Revenue.webp';
import img5 from '../../asstes/Images/New folder/british-high-commission-222x300-1.webp';
import img6 from '../../asstes/Images/New folder/Companies-House.webp';
import img7 from '../../asstes/Images/New folder/ACCA-Approved-Employer.webp'
import SharedButton from '../../Components/Shared/SharedButton';

const imgall = [img1, img2, img3, img4, img5, img6, img7];

const Awards = () => {
    return (
        <div className='max-w-7xl py-[3vw] mx-auto'>
            <div className='max-w-6xl mx-auto'>
                <div className='flex w-full justify-between'>
                    {imgall.map((pic, index) => (
                        <div key={index}>
                            <img src={pic} className='h-20' alt={`Award ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex bg-dark-blue font-semibold rounded-2xl mt-20 text-white justify-between items-center p-10'>
                <h1 className='text-3xl'>We’re a Global Accounting Outsourcing & Business Advisory Firm.</h1>
                <SharedButton text={'Get Started Now'}></SharedButton>
            </div>
        </div>
    );
};
export default Awards;