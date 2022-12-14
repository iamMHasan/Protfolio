import React from 'react';
import Lottie from "lottie-react";
import avatar from '../../assets/91956-work-from-home.json'
import Textstyle from '../Textstyle';

const AboutMe = () => {
  return (
    <div id='aboutme' className='flex justify-center flex-col items-center w-[90%] mx-auto font-Righteous text-center'>
      <Textstyle firstletter={'About'} secondletter={'Me'}></Textstyle>
      <Lottie animationData={avatar} loop={true} style={ {height: 500}}></Lottie>
      <h1 className="text-bsase text-white">I am a specialized ππ§π€π£π©-ππ£π πππ«ππ‘π€π₯ππ§ with a focus on building scalable and efficient web applications using πππππ©ππ. I have a strong understanding of the React ecosystem and a track record of delivering high-quality web applications. My skills include proficiency in JavaScript, HTML, CSS, Javascript, and Git. I have developed and maintained multiple single-page applications using React js as part of my coursework.

Also, I am comfortable with ππ€ππ.ππ¨, ππ­π₯π§ππ¨π¨.ππ¨, ππ€π£ππ€πΏπ½. I have developed and maintained multiple server-side applications using the Express.js framework.

I am looking for a junior developer position where I can apply my skills and continue learning from experienced professionals. I am eager to contribute to a team and make a positive impact with my work.</h1>
    </div>
  );
};

export default AboutMe;