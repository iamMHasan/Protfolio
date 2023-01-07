import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Textstyle from '../Textstyle';
import Projects from './Projects';

const ProjectsMap = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://hasan-s-protfolio-server.vercel.app/projects')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (

        <div className='flex justify-center flex-col items-center font-Righteous my-8 w-full dark:bg-white bg-black/5 p-4 md:p-8'>
           <Textstyle firstletter={'Recent'} secondletter={'Projects'}></Textstyle>
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