import heroVideo from '../../asstes/video/Business-setup-consultants-in-UAE-Company-formation-in-Dubai.mp4'
import React from 'react';

const Banner = () => {
    return (
        <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
              <video className='object-center object-cover h-full w-full' src={heroVideo} autoPlay muted loop></video>
                  <div className='bg-dark-blue/70 w-full h-full absolute top-0'></div>
            </div>

      {/* Dark Overlay */}
      

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-5">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Contact Us
        </h1>

        <h2 className="text-xl md:text-xl font-light mb-8">
          From setup to strategy,<br/>
          We help your business grow with clarity, compliance, and confidence.
        </h2>

        {/* Categories */}
       

        
      </div>
    </section>
    );
};

export default Banner;