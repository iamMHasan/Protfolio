import React from 'react';

const Textstyle = ({secondletter,firstletter}) => {
    return (
        <div>
            <h1 className="font-Righteous text-3xl md:text-2xl group text-white  border-b-2 border-black/20 hover:border-white/50 mt-10">{firstletter} <span className='group-hover:text-white text-white/60'>{secondletter}</span></h1>
        </div>
    );
};

export default Textstyle;