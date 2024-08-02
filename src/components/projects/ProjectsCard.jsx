import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, githubLink, liveLink }) => {
  return (
    <div className="w-full p-4 xl:px-6 h-auto xl:py-6 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#0b0c0d] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[90%] overflow-hidden rounded-lg">
        <img
          className="w-full h-50 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <a href={githubLink} target="_blank">
                  <BsGithub />
                </a>
              </span>
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <a href={liveLink} target="_blank">
                  <FaGlobe />
                </a>
              </span>
            </div>
          </div>
          {/* <p className="text-sm">
            Tech Stack: 
          </p> */}
          <p className="text-sm tracking-wide mt-5 hover:text-gray-100 duration-300">
            <span className="text-md text-red-600 ">Tech Stack :</span> {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
