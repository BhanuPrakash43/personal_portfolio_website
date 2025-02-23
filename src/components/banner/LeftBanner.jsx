import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { CV } from "../../assets";

const LeftBanner = () => {
	const [text] = useTypewriter({
		words: [
			"Software Developer.",
			"Full Stack Developer.",
			"Frontend Developer.",
			"Backend Developer.",
		],
		loop: true,
		typeSpeed: 20,
		deleteSpeed: 10,
		delaySpeed: 2000,
	});
	return (
		<div className="w-full lgl:w-1/2 flex flex-col gap-10">
			<div className="flex flex-col gap-5">
				<h4 className=" text-md font-normal">
					WELCOME TO MY PORTFOLIO
				</h4>
				<h1 className="text-5xl md:text-6xl font-bold text-white">
					Hi, I'm{" "}
					<span className="text-designColor capitalize">
						Bhanu Prakash
					</span>
				</h1>
				<h2 className="text-3xl md:text-4xl font-bold text-white">
					a <span>{text}</span>
					<Cursor
						cursorBlinking="false"
						cursorStyle="|"
						cursorColor="#ff014f"
					/>
				</h2>
				<p className="text-base font-bodyFont leading-6 tracking-wide text-justify">
					I am currently seeking internships and full-time
					opportunities to launch my career. As a fresher, I am
					passionate about programming and committed to continuous
					learning. My disciplined approach helps me excel in
					fast-paced environments. I thrive in teamwork, delivering
					high-quality results and meeting deadlines. I am eager to
					contribute to innovative projects and grow professionally.
				</p>
			</div>
			<div className="flex lgl:gap-0 justify-between">
				<a
					href={CV}
					target="_blank"
					className=" bg-gray-900 px-5 py-3 border-2 border-red-600 text-md text-white gap-2 hover:text-green-600 hover:border-green-600 duration-500 rounded-full"
					rel="noreferrer"
				>
					Download CV
				</a>
			</div>
		</div>
	);
};

export default LeftBanner;
