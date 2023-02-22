import React from 'react';

const ImgaeCom = ({src,skill}) => {
    return (
        <div className='flex items-center justify-center gap-2 group'>
            <img className='w-[30px] h-[30px] gap-2 transition duration-300 transform group-hover:scale-150' src={src} alt="" />
            <p>{skill}</p>
        </div>
    );
};

export default ImgaeCom;