import React from 'react';
import Banner from './Banner';
import WhyChoose from './WhyChoose';
import WhatWeDo from './Whatwedo';
import ReadyToStublish from './ReadyToStublish';
import HireBased from './HireBased';
import Resources from './Resources';
import Awards from './Awards';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <WhyChoose></WhyChoose>
            <WhatWeDo></WhatWeDo>
            <ReadyToStublish></ReadyToStublish>
            <HireBased></HireBased>
            <Resources></Resources>
            <Awards></Awards>
            <div className='h-screen'></div>
        
        </div>
    );
};

export default Home;