import React from 'react';
import Contact from '../../component/Contact/Contact';
import GoodAt from '../../component/GoodAT/GoodAt';
import Hero from '../../component/Hero/Hero';
import Projects from '../../component/Projects/Projects';
import ProjectsMap from '../../component/Projects/ProjectsMap';

const Home = () => {
    return (
        <div>
            <Hero />
            <GoodAt />
           <ProjectsMap/>
            <Contact />
        </div>
    );
};

export default Home;