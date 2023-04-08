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
                <Hero />
                <AboutMe />
                <GoodAt />
                <ProjectsMap />
                <Contact />
        </div>
    );
};

export default Home;