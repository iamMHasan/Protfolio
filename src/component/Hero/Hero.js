import React from 'react';
import { HiChevronDoubleDown } from "react-icons/hi";

const Hero = () => {
    return (
        <div className='bg-black p-5 md:p-0 text-white h-[95vh] flex justify-center flex-col items-center font-Righteous'>
            <h1 className="text-5xl mb-4">Hello, This is Hasan, Nice to meet you </h1>
            <h1 className="text-2xl text-white/80  mb-4"> I am a MERN stack web developer, i code beautifully that helps people</h1>
            <HiChevronDoubleDown size={40} className='text-white animate-bounce'/>
        </div>
    );
};

export default Hero;