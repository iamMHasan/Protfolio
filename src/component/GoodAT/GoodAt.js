import React from 'react';
import tailwind from '../../assets/tailwind.png'
import js from '../../assets/js.png'
import mongodb from '../../assets/mongodb.png'
import expres from '../../assets/express.png'
import bootstrap from '../../assets/bootstrap.png'
import react from '../../assets/react.jpg'

import ImgaeCom from '../Hero/ImgaeCom';

const GoodAt = () => {
    return (
        <div data-aos="fade-up"  data-aos-duration="3000" className='flex justify-center flex-col items-center font-Righteous mt-4 '>
            <h1 className="text-3xl md:text-4xl text-black">I am good <span className='text-black/60'>at</span></h1>
            <div className="flex justify-center items-center gap-4 mt-4 p-4 md:p-0">
                <ImgaeCom src={react}></ImgaeCom>
                <ImgaeCom src={js}></ImgaeCom>
                <ImgaeCom src={expres}></ImgaeCom>
                <ImgaeCom src={mongodb}></ImgaeCom>
                <ImgaeCom src={tailwind}></ImgaeCom>
                <ImgaeCom src={bootstrap}></ImgaeCom>
            </div>
        </div>
    );
};

export default GoodAt;