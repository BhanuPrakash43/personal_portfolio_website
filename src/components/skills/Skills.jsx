import React from "react";
import Title from "../layouts/Title";
import SkillsInput from "./SkillsInput";

const Skills = () => {
	const technicalSkills = [
		{ title: "Java", link: "https://dev.java/learn/" },
		{
			title: "JavaScript",
			link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
		},
		{ title: "React.js", link: "https://react.dev/" },
		{ title: "Node.js", link: "https://nodejs.org/en" },
		{ title: "Express.js", link: "https://expressjs.com/" },
		{ title: "MongoDB", link: "https://www.mongodb.com/" },
		{ title: "MySQL", link: "https://www.mysql.com/" },
		{ title: "Tailwind CSS", link: "https://tailwindcss.com/" },
		{ title: "Bootstrap", link: "https://getbootstrap.com/" },
		{
			title: "HTML5",
			link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
		},
		{
			title: "CSS3",
			link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
		},
		{ title: "RESTful APIs", link: "" },
		{ title: "Data Structures and Algorithms", link: "" },
	];

	const toolsAndTechnologies = [
		{ title: "Git", link: "https://git-scm.com/" },
		{ title: "GitHub", link: "https://github.com/" },
		{ title: "VS Code", link: "https://code.visualstudio.com/" },
		{ title: "Canva", link: "https://www.canva.com/" },
		{ title: "Netlify", link: "https://www.netlify.com/" },
		{ title: "Responsive Website Design", link: "" },
	];

	const softSkills = [
		{ title: "Problem-Solving", link: "" },
		{ title: "Critical Thinking", link: "" },
		{ title: "Time Management", link: "" },
		{ title: "Communication", link: "" },
		{ title: "Teamwork", link: "" },
		{ title: "Adaptability", link: "" },
		{ title: "Leadership", link: "" },
	];

	return (
		<div
			id="skills"
			className="wrapper w-full py-10 border-b-[1px] border-b-black"
		>
			<div className="flex justify-center items-center text-center">
				<Title title="My Skills" />
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<div className="bg-[#121212] p-6 rounded-xl shadow-lg border border-gray-700">
					<h3 className="text-xl font-semibold text-white text-center mb-4">
						Technical Skills
					</h3>
					<div className="flex flex-wrap justify-center gap-3">
						{technicalSkills.map((skill, index) => (
							<SkillsInput
								key={index}
								title={skill.title}
								link={skill.link}
							/>
						))}
					</div>
				</div>
				<div className="bg-[#121212] p-6 rounded-xl shadow-lg border border-gray-700">
					<h3 className="text-xl font-semibold text-white text-center mb-4">
						Tools & Technologies
					</h3>
					<div className="flex flex-wrap justify-center gap-3">
						{toolsAndTechnologies.map((skill, index) => (
							<SkillsInput
								key={index}
								title={skill.title}
								link={skill.link}
							/>
						))}
					</div>
				</div>
				<div className="bg-[#121212] p-6 rounded-xl shadow-lg border border-gray-700">
					<h3 className="text-xl font-semibold text-white text-center mb-4">
						Soft Skills
					</h3>
					<div className="flex flex-wrap justify-center gap-3">
						{softSkills.map((skill, index) => (
							<SkillsInput
								key={index}
								title={skill.title}
								link={skill.link}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
