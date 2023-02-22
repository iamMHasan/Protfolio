import React from 'react';
import { HiChevronDoubleDown } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import ParticelsBackground from '../particels/ParticelsBackground'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Hero = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return (
        <>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    "fullScreen": {
                        "enable": true,
                        "zIndex": -1
                    },
                    "fpsLimit": 120,
                    "particles": {
                        "number": {
                            "value": 80,
                            "density": {
                                "enable": true
                            }
                        },
                        "color": {
                            "value": "#080808"
                        },
                        "shape": {
                            "type": "circle"
                        },
                        "opacity": {
                            "value": 0.5,
                            "random": false,
                            "anim": {
                                "enable": false,
                                "speed": 3,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 20,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 150,
                            "color": "#ffffff",
                            "warp": true,
                            "opacity": 1,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 6,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "warp": true,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": false,
                                "mode": "repulse"
                            },
                            "onclick": {
                                "enable": false,
                                "mode": "push"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 400,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 400,
                                "size": 40,
                                "duration": 2,
                                "opacity": 0.8,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 200
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true,
                    "background": {
                        "color": "#080808",
                        "image": "",
                        "position": "50% 50%",
                        "repeat": "no-repeat",
                        "size": "cover"
                    }
                }}
            />
            <div id='home' className='overflow-x-hidden text-center md:p-0 text-white h-[100vh] flex justify-center flex-col items-center font-Righteous'>

            <h1 className="text-5xl mb-4">Hello, This is Hasan, Nice to meet you! </h1>
                <div className="flex mb-4">
                    <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/mohammedhasan1/"><AiFillLinkedin size={30} className='text-white hover:text-white/70' /></a>
                    <a target='_blank' rel="noreferrer" href="https://github.com/iamMHasan"><AiFillGithub size={30} className='text-white hover:text-white/70  ' /></a>
                </div>
                <HiChevronDoubleDown size={40} className='text-white animate-bounce' />
            </div>
        </>
    );
};

export default Hero;