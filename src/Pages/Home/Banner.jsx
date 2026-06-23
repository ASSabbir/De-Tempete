import React from 'react';
import heroVideo from '../../asstes/video/Hero-video.mp4'

const Banner = () => {
    return (
        <div className='relative h-screen'>
            <video className='object-center object-cover h-full w-full' src={heroVideo} autoPlay muted loop></video>
            <div className='bg-dark-blue/80 w-full h-full absolute top-0'></div>
        </div>
    );
};

export default Banner;