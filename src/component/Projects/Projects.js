import React from 'react';
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project3.png'
import project3 from '../../assets/project2.png'
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiFillCompass, AiFillGithub } from "react-icons/ai";
import { Link } from 'react-router-dom'

const Projects = ({ project }) => {
    const { title, para, titleimage , _id, live,code, client} = project
    console.log(project);
    return (
        <div className="w-full ">
        <div className="my-4 md:mx-4 shadow p-6 rounded-md bg-white group hover:shadow-md">
          <div className="relative mb-6 w-full h-48 bg-purple-200 rounded-md overflow-hidden">
            <img
              src={titleimage}
              alt="coverImage"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute opacity-0 transition duration-200 bg-purple-100 bg-opacity-80 w-full flex items-center justify-center h-full left-0 top-0 group-hover:opacity-100 group-hover:visible">
              <ul className="flex flex-wrap">
                <li className="m-2">
                <a target='_blank' rel="noreferrer" href={live}>
                    <div className="flex gap-3 items-center bg-black rounded-lg text-white px-2 py-1">
                        <h1>Live</h1>
                    </div>
                </a>
                </li>
                <li className="m-2">
                <a target='_blank' rel="noreferrer" href={client}>
                    <div className="flex gap-3 items-center bg-black rounded-lg text-white px-2 py-1">
                        <h1>Client</h1>
                        <AiFillGithub></AiFillGithub>
                    </div>
                </a>
                </li>
                <li className="m-2">
                <a target='_blank' rel="noreferrer" href={code}>
                    <div className="flex gap-3 items-center bg-black rounded-lg text-white px-2 py-1">
                        <h1>Server</h1>
                        <AiFillGithub></AiFillGithub>
                    </div>
                </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between">
          <h3 className="text-lg font-medium text-gray-800 mb-2">{title}</h3>
          {/* <Link to={`/projects/${_id}`} className="flex items-center" href="/"> Details <AiOutlineArrowRight /></Link> */}
          </div>
          <p className="text-gray-400">{para}</p>
        </div>
      </div>
    );
};

export default Projects;

