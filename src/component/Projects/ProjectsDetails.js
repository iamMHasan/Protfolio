import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { AiFillCompass, AiFillGithub } from "react-icons/ai";

const ProjectsDetails = () => {
    const data = useLoaderData()
    console.log(data);
    const { client, code, live, image1, image2, image3,image4, imge1Details,image4Details, imgae2Details, image3Details } = data
    return (
        <div className='p-2 bg-white/90 w-[1240px] mx-auto'>
            <h1 className="text-2xl font-semibold my-2">Projects Link</h1>
            <div className="flex gap-3 mb-4">
                <a target='_blank' rel="noreferrer" href={live}>
                    <div className="flex gap-3 items-center bg-black rounded-lg text-white px-2 py-1">
                        <h1>Live</h1>
                        <AiFillCompass></AiFillCompass>
                    </div>
                </a>
                <a target='_blank' rel="noreferrer" href={client}>
                    <div className="flex gap-3 items-center bg-black rounded-lg text-white px-2 py-1">
                        <h1>Github client</h1>
                        <AiFillGithub></AiFillGithub>
                    </div>
                </a>
                <a target='_blank' rel="noreferrer" href={code}>
                    <div className="flex gap-3 items-center bg-black rounded-lg text-white px-2 py-1">
                        <h1>Github server</h1>
                        <AiFillGithub></AiFillGithub>
                    </div>
                </a>
            </div>
            <div>
                <div className="flex flex-col md:flex-row gap-4 items-center mb-3 p-4">
                    <img className=' w-[80%] md:h-[400px]' src={image1} alt="" />
                    <h1 className="md:text-2xl">{imge1Details}</h1>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-center mb-3 p-4">
                    <h1 className="md:text-2xl">{imgae2Details}</h1>
                    <img className=' w-[80%] md:h-[400px]' src={image2} alt="" />
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-center mb-3 p-4">
                    <img className=' w-[80%] md:h-[400px]' src={image3} alt="" />
                    <h1 className="md:text-2xl">{image3Details}</h1>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-center mb-3 p-4">
                    <h1 className="md:text-2xl">{image4Details}</h1>
                    <img className=' w-[80%] md:h-[400px]' src={image4} alt="" />
                </div>

            </div>
        </div>
    );
};

export default ProjectsDetails;