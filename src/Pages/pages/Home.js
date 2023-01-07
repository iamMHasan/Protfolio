import React from 'react';
import AboutMe from '../../component/about me/AboutMe';
import Tab from '../../component/about me/Tab';
import Contact from '../../component/Contact/Contact';
import GoodAt from '../../component/GoodAT/GoodAt';
import Hero from '../../component/Hero/Hero';
import Projects from '../../component/Projects/Projects';
import ProjectsMap from '../../component/Projects/ProjectsMap';

const Home = () => {
    return (
        <div>
            <Hero />
           <AboutMe/>
            <GoodAt />
           <ProjectsMap/>
            <Contact />
            <Tab/>
        </div>
    );
};

export default Home;