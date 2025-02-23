import React, { useState, useEffect } from "react";
import Title from "../layouts/Title";
import {
	blogImg,
	realestateImg,
	todoImg,
	colorcatchingImg,
	inventoryImg,
	sudokuImg,
	portfolioImg,
	androidBlog,
	foodCart,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
	const projects = [
		{
			title: "Blog Website",
			des: "React.js | Node.js | Express.js | MongoDB | Tailwind CSS",
			src: blogImg,
			githubLink: "https://github.com/BhanuPrakash43/prime-blog",
			liveLink: "https://prime-blog.netlify.app/",
			projectDesc:
				"A feature-rich blog platform with user authentication, CRUD functionality, a modern UI with Admin Dashboard.",
			tag: "Full Stack Development",
		},
		{
			title: "Personal Portfolio Website",
			des: "React.js | Tailwind CSS | Framer Motion",
			src: portfolioImg,
			githubLink:
				"https://github.com/BhanuPrakash43/personal_portfolio_website",
			projectDesc:
				"A responsive portfolio website showcasing my projects, skills, and experience.",
			tag: "Frontend Development",
		},
		{
			title: "Blog Fusion (Android App)",
			des: "XML Layouts | Kotlin | Android SDK | Firebase",
			src: androidBlog,
			githubLink: "https://github.com/BhanuPrakash43/BlogFusion",
			projectDesc:
				"A feature-rich platform for creating, reading, updating, and managing blog posts with saving and liking functionalities.",
			tag: "Android Development",
		},
		{
			title: "Real Estate Website",
			des: "React.js | CSS",
			src: realestateImg,
			githubLink: "https://github.com/BhanuPrakash43/Real-Estate-Website",
			liveLink: "https://bhanu-real-estatte-website.netlify.app/",
			projectDesc:
				"A real estate platform for browsing, listing, and searching properties efficiently.",
			tag: "Frontend Development",
		},
		{
			title: "Todo List Website",
			des: "React.js | CSS",
			src: todoImg,
			githubLink: "https://github.com/BhanuPrakash43/TODO-LIST-APP",
			liveLink: "https://react-todo-website.netlify.app/",
			projectDesc:
				"A simple and intuitive task management application for organizing daily activities.",
			tag: "Frontend Development",
		},
		{
			title: "Mini Food Cart",
			des: "React.js | Node.js | Express.js | MongoDB | Tailwind CSS",
			src: foodCart,
			githubLink: "https://github.com/BhanuPrakash43/mini-food-cart",
			liveLink: "https://food-cart-website.netlify.app/",
			projectDesc:
				"An online food cart system where users can order and manage food items seamlessly.",
			tag: "Full Stack Development",
		},
		{
			title: "Inventory Management System",
			des: "Java | Java Swing",
			src: inventoryImg,
			githubLink:
				"https://github.com/BhanuPrakash43/Inventory-Management-System",
			projectDesc:
				"A Java-based inventory tracking system for managing stock efficiently.",
			tag: "Java Application",
		},
		{
			title: "Color Catching Game",
			des: "HTML | CSS | JavaScript",
			src: colorcatchingImg,
			githubLink: "https://github.com/BhanuPrakash43/Color-Catch-Game",
			projectDesc:
				"An interactive game where players catch the correct colors before time runs out.",
			tag: "Frontend Development",
		},
		{
			title: "Sudoku Solver",
			des: "Java | Java Swing",
			src: sudokuImg,
			githubLink: "https://github.com/BhanuPrakash43/Sudoku-Solver",
			projectDesc:
				"A Java-based Sudoku solving application that provides instant solutions to puzzles.",
			tag: "Java Application",
		},
	];

	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(3);

	useEffect(() => {
		const updateItemsPerPage = () => {
			if (window.innerWidth >= 768 && window.innerWidth < 1280) {
				setItemsPerPage(4);
			} else if (window.innerWidth > 1280) {
				setItemsPerPage(6);
			} else {
				setItemsPerPage(4);
			}
		};

		window.addEventListener("resize", updateItemsPerPage);
		updateItemsPerPage();

		return () => window.removeEventListener("resize", updateItemsPerPage);
	}, []);

	const totalPages = Math.ceil(projects.length / itemsPerPage);

	const currentProjects = projects.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage,
	);

	return (
		<section
			id="projects"
			className="w-full py-10 border-b-[1px] border-b-black"
		>
			<div className="flex justify-center items-center text-center">
				<Title title="My Projects" />
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-10">
				{currentProjects.map((project, index) => (
					<ProjectsCard
						key={index}
						src={project.src}
						title={project.title}
						des={project.des}
						projectDesc={project.projectDesc}
						githubLink={project.githubLink}
						liveLink={project.liveLink}
						tag={project.tag}
					/>
				))}
			</div>

			<div className="flex justify-center mt-8">
				{Array.from({ length: totalPages }, (_, index) => (
					<button
						key={index}
						onClick={() => setCurrentPage(index + 1)}
						className={`px-5 py-2 mx-3 text-lg ${
							currentPage === index + 1
								? "bg-blue-500 text-white"
								: "bg-gray-900"
						} rounded`}
					>
						{index + 1}
					</button>
				))}
			</div>
		</section>
	);
};

export default Projects;
