import React from 'react';
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project3.png'
import project3 from '../../assets/project2.png'
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom'

const Projects = ({ project }) => {
    const { title, para, titleimage , _id} = project
    console.log(project);
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={titleimage} className='w-full h-[17rem]' alt="" /></figure>
            <div className="card-body">
                <div className="flex justify-between">
                    <h2 className="card-title">{title}</h2>
                    <Link to={`/projects/${_id}`} className="flex items-center" href="/"> Details <AiOutlineArrowRight /></Link>
                </div>
                <p>{para}</p>
                <div className="flex justify-center items-center gap-3 mt-2">
                    <div className="flex justify-center items-center">
                        <a target='_blank' rel="noreferrer" className="badge badge-accent" href="https://kinobeco.firebaseapp.com/"> Live <AiOutlineArrowRight /></a>
                    </div>
                    <div className="flex justify-center items-center">
                        <a target='_blank' rel="noreferrer" className="badge badge-secondary" href="https://github.com/iamMHasan/kenoBeco"> Client Code <AiOutlineArrowRight /></a>
                    </div>
                    <div className="flex justify-center items-center">
                        <a target='_blank' rel="noreferrer" className="badge badge-primary" href="https://github.com/iamMHasan/Keno-Beco-server"> Server Code <AiOutlineArrowRight /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;

