import React from 'react';
import { HiChevronDoubleDown } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Hero = () => {
    return (
        <div className='bg-black p-5 md:p-0 text-white h-[100vh] flex justify-center flex-col items-center font-Righteous'>
            <h1 className="text-5xl mb-4">Hello, This is Hasan, Nice to meet you </h1>
            <h1 className="text-2xl text-white/80  mb-4"> I am a MERN stack web developer, i code that helps businesses</h1>
            <div className="flex gap-3 mb-4">
                <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/mohammedhasan1/"><AiFillLinkedin size={30} className='text-white hover:text-white/70' /></a>
                <a target='_blank' rel="noreferrer" href="https://github.com/iamMHasan"><AiFillGithub size={30} className='text-white hover:text-white/70  ' /></a>
            </div>
            <HiChevronDoubleDown size={40} className='text-white animate-bounce' />
        </div>
    );
};

export default Hero;