import React from 'react';
import Lottie from "lottie-react";
import avatar from '../../assets/91956-work-from-home.json'
import Textstyle from '../Textstyle';

const AboutMe = () => {
  return (
    <div id='aboutme' className='flex justify-center flex-col items-center w-[90%] mx-auto font-Righteous text-center'>
      <Textstyle firstletter={'About'} secondletter={'Me'}></Textstyle>
      <Lottie animationData={avatar} loop={true} style={ {height: 500}}></Lottie>
      <h1 className="text-bsase text-white">I am a specialized 𝙁𝙧𝙤𝙣𝙩-𝙚𝙣𝙙 𝙙𝙚𝙫𝙚𝙡𝙤𝙥𝙚𝙧 with a focus on building scalable and efficient web applications using 𝙍𝙚𝙖𝙘𝙩𝙅𝙎. I have a strong understanding of the React ecosystem and a track record of delivering high-quality web applications. My skills include proficiency in JavaScript, HTML, CSS, Javascript, and Git. I have developed and maintained multiple single-page applications using React js as part of my coursework.

Also, I am comfortable with 𝙉𝙤𝙙𝙚.𝙟𝙨, 𝙀𝙭𝙥𝙧𝙚𝙨𝙨.𝙟𝙨, 𝙈𝙤𝙣𝙜𝙤𝘿𝘽. I have developed and maintained multiple server-side applications using the Express.js framework.

I am looking for a junior developer position where I can apply my skills and continue learning from experienced professionals. I am eager to contribute to a team and make a positive impact with my work.</h1>
    </div>
  );
};

export default AboutMe;