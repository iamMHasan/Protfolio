import React from 'react';
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project3.png'
import project3 from '../../assets/project2.png'
import { AiOutlineArrowRight } from "react-icons/ai";

const Projects = () => {
    return (
        <div data-aos="fade-up"  data-aos-duration="3000" className='flex justify-center flex-col items-center font-Righteous my-8 w-full bg-black/5 p-4 md:p-0'>
            <h1 className="text-3xl md:text-4xl my-4 text-black">See my recent <span className='text-black/60'>projects</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {/* project 1 */}
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={project1} className='w-full' alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Keno Beco</h2>
                        <p>A multi role web app for cycle re-sale</p>
                        <div className="flex justify-center items-center gap-3 mt-2">
                            <div className="flex justify-center items-center">
                                <a className="badge badge-accent" href="/"> Live <AiOutlineArrowRight /></a>
                            </div>
                            <div className="flex justify-center items-center">
                                <a className="badge badge-secondary" href="/"> Client Code <AiOutlineArrowRight /></a>
                            </div>
                            <div className="flex justify-center items-center">
                                <a className="badge badge-primary" href="/"> Server Code <AiOutlineArrowRight /></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* project 2 */}
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={project2} className='w-full h-[17rem]' alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Skill Hero</h2>
                        <p>An educational website to buy courses</p>
                        <div className="flex justify-center items-center gap-3 mt-2">
                            <div className="flex justify-center items-center">
                                <a className="badge badge-accent" href="/"> Live <AiOutlineArrowRight /></a>
                            </div>
                            <div className="flex justify-center items-center">
                                <a className="badge badge-secondary" href="/"> Client Code <AiOutlineArrowRight /></a>
                            </div>
                            <div className="flex justify-center items-center">
                                <a className="badge badge-primary" href="/"> Server Code <AiOutlineArrowRight /></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* project 3 */}
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={project3} className='w-full h-[17rem]' alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Max Dental</h2>
                        <p>A individual doctor website who offer dental service</p>
                        <div className="flex justify-center items-center gap-3 mt-2">
                            <div className="flex justify-center items-center">
                                <a className="badge badge-accent" href="/"> Live <AiOutlineArrowRight /></a>
                            </div>
                            <div className="flex justify-center items-center">
                                <a className="badge badge-secondary" href="/"> Client Code <AiOutlineArrowRight /></a>
                            </div>
                            <div className="flex justify-center items-center">
                                <a className="badge badge-primary" href="/"> Server Code <AiOutlineArrowRight /></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;