import React from 'react';
import AccuTouch from '../Shared/AccuTouch';
import Banner from '../Shared/Banner';
import ExpertCareTeam from '../Shared/ExpertCareTeam';
import Hero from '../Shared/Hero';
import HowProgramWorks from '../Shared/HowProgramWorks';
import OurPrograms from '../Shared/OurPrograms';
import Services from '../Shared/Services';
import TransformationStories from '../Shared/TransformationStories/TransformationStories';


const Home = () => {
    return (
        <div>
           {/* <Banner/> */}
           <Hero/>
           <OurPrograms/>
           <AccuTouch/>
           <Services/>
           <HowProgramWorks/>
           <TransformationStories/>
           <ExpertCareTeam/>

        </div>
    );
};

export default Home;