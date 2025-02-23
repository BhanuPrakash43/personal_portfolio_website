import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({
	src,
	title,
	des,
	projectDesc,
	githubLink,
	liveLink,
	tag,
}) => {
	return (
		<div className="w-full p-6 h-[420px] rounded-2xl shadow-lg flex flex-col bg-[#121212] border border-gray-700 group hover:shadow-xl transition-shadow duration-300">
			<div className="relative w-full h-[200px] overflow-hidden rounded-lg">
				{tag && (
					<span className="absolute top-0 left-0 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-tl-lg rounded-br-lg shadow-lg">
						{tag}
					</span>
				)}
				<img
					className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
					src={src}
					alt={title}
				/>
			</div>
			<div className="w-full mt-3 h-[220px] flex flex-col gap-3 flex-grow">
				<div className="flex-grow">
					<h3 className="text-lg font-semibold text-white uppercase">
						{title}
					</h3>
					<p className="text-sm text-gray-400 mt-2 line-clamp-2">
						{projectDesc}
					</p>
				</div>
				<p className="text-sm tracking-wide mt-1 text-gray-400">
					<span className="text-md font-semibold text-blue-500">
						Tech Stack:{" "}
					</span>{" "}
					{des}
				</p>
				<div className="flex gap-4 mt-2 h-10">
					<a
						href={githubLink}
						target="_blank"
						className="text-lg w-10 h-10 rounded-full bg-gray-800 flex justify-center items-center text-white hover:bg-blue-600 duration-300 cursor-pointer"
					>
						<BsGithub />
					</a>
					<a
						href={liveLink}
						target="_blank"
						className="text-lg w-10 h-10 rounded-full bg-gray-800 flex justify-center items-center text-white hover:bg-green-600 duration-300 cursor-pointer"
					>
						<FaGlobe />
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectsCard;
