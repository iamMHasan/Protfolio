import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Projects from './Projects';

const ProjectsMap = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://hasan-s-protfolio-server.vercel.app/projects')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (

        <div data-aos="fade-up" data-aos-duration="3000" className='flex justify-center flex-col items-center font-Righteous my-8 w-full bg-black/5 p-4 md:p-8'>
            <h1 className="text-3xl md:text-4xl mb-8 mt-4 text-black">See my recent <span className='text-black/60'>projects</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

                {
                    data.map(project => <Projects
                        key={project._id}
                        project={project}
                    ></Projects>)
                }

            </div>
        </div>
    );
};

export default ProjectsMap;