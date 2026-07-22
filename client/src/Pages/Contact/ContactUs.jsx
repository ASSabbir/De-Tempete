import React from 'react';
import Banner from './Banner';
import Form from './Form';
import Worldmap from '../../asstes/img_temp/Map.webp';

const ContactUs = () => {
    return (
        <div>
            <Banner></Banner>
            <Form></Form>
            <div className='max-w-7xl mx-auto'> 
                <img src={Worldmap} alt="" />
            </div>
           
            
        </div>
    );
};

export default ContactUs;