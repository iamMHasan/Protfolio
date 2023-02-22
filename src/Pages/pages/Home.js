import React from 'react';
import AboutMe from '../../component/about me/AboutMe';
import Contact from '../../component/Contact/Contact';
import GoodAt from '../../component/GoodAT/GoodAt';
import Hero from '../../component/Hero/Hero';
import Projects from '../../component/Projects/Projects';
import ProjectsMap from '../../component/Projects/ProjectsMap';

const Home = () => {
    return (
        <div className=''>
            {/* <Scrollbars style={{ height: 300 }}> */}
                <Hero />
                <AboutMe />
                <GoodAt />
                <ProjectsMap />
                <Contact />
            {/* </Scrollbars> */}
        </div>
    );
};

export default Home;