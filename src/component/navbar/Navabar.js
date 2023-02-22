import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from "react-icons/ai";
import { NavHashLink } from 'react-router-hash-link'

const Navabar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="font-Righteous px-4 py-2 bg-transparent sticky-top mx-auto sm:max-w-xl md:max-w-full text-[#bde813]  lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="relative flex items-center justify-between">
                <div className="flex items-center">
                    <ul className="flex hidden items-center space-x-8 lg:flex">
                        <li className='font-semibold hover:border-b-2 border-[#bde813] cursor-pointer cursor'>
                            <NavHashLink
                                smooth
                                to="#home"
                            // etc...
                            >Home</NavHashLink>
                        </li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                        <li className='font-semibold hover:border-b-2 border-[#bde813] cursor-pointer cursor'>
                            <NavHashLink
                                smooth
                                to="#aboutme"
                            // etc...
                            >About me</NavHashLink>
                        </li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                        <li className='font-semibold hover:border-b-2 border-[#bde813] cursor-pointer cursor'>
                            <NavHashLink
                                smooth
                                to="#skills"
                            // etc...
                            >Skills</NavHashLink>
                        </li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                        <li className='font-semibold hover:border-b-2 border-[#bde813] cursor-pointer cursor'>
                            <NavHashLink
                                smooth
                                to="#projects"
                            // etc...
                            >Projects</NavHashLink>
                        </li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                        <li className='font-semibold hover:border-b-2 border-[#bde813] cursor-pointer cursor'>
                            <NavHashLink
                                smooth
                                to="#contact"
                            // etc...
                            >Contacts</NavHashLink>
                        </li>
                        <li className='font-semibold  cursor-pointer cursor'>
                            <a target='_blank' rel="noreferrer" className='btn bg-black text-[#bde813] ' href="https://drive.google.com/file/d/1nEcGPIuArwdwBfoN5uMHrLPe9g5mdJtW/view?usp=share_link">View Resume <AiOutlineArrowRight className='ml-2'></AiOutlineArrowRight></a>
                        </li>
                    </ul>

                </div>
                <div className="lg:hidden">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className="absolute top-0 left-0 w-full">
                            <div className="p-5 bg-white border rounded shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    {/* <div>
                                        Hasan
                                    </div> */}
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="flex text-[#bde813]  items-center justify-center flex-col  space-x-8 lg:flex space-y-1 ">
                                        <li className='font-semibold hover:border-b-2 border-[#bde813] cursor-pointer cursor'>
                                            <NavHashLink
                                                smooth
                                                to="#home"
                                            >Home</NavHashLink>
                                        </li>
                                        <li className='font-semibold hover:border-b-2 border-[#bde813] cursor-pointer cursor'>
                                            <NavHashLink
                                                smooth
                                                to="#aboutme"
                                            // etc...
                                            >About me</NavHashLink>
                                        </li>
                                        <li className='font-semibold hover:border-b-2 border-[#bde813] cursor-pointer cursor'>
                                            <NavHashLink
                                                smooth
                                                to="#skills"
                                            // etc...
                                            >Skills</NavHashLink>
                                        </li>
                                        <li className='font-semibold hover:border-b-2 border-[#bde813] cursor-pointer cursor'>
                                            <NavHashLink
                                                smooth
                                                to="#projects"
                                            // etc...
                                            >Projects</NavHashLink>
                                        </li>
                                        <li className='font-semibold hover:border-b-2 border-[#bde813] cursor-pointer cursor'>
                                            <NavHashLink
                                                smooth
                                                to="#contact"
                                            // etc...
                                            >Contacts</NavHashLink>
                                        </li>
                                        <li className='font-semibold  cursor-pointer cursor'>
                                            <a target='_blank' rel="noreferrer" className='btn bg-black' href="https://drive.google.com/file/d/1nEcGPIuArwdwBfoN5uMHrLPe9g5mdJtW/view?usp=share_link">View Resume <AiOutlineArrowRight className='ml-2'></AiOutlineArrowRight></a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navabar;