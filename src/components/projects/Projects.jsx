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
  foodCart,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      des: "React.js | Tailwind CSS | Framer Motion",
      src: portfolioImg,
      githubLink:
        "https://github.com/BhanuPrakash43/personal_portfolio_website",
    },
    {
      title: "Blog Website",
      des: "React.js | Node.js | Express.js | MongoDB | CSS",
      src: blogImg,
      githubLink: "https://github.com/BhanuPrakash43/Blog-App",
      liveLink: "https://mern-blog-app-bp.netlify.app/",
    },
    {
      title: "Real Estate Website",
      des: "React.js | CSS",
      src: realestateImg,
      githubLink: "https://github.com/BhanuPrakash43/Real-Estate-Website",
      liveLink: "https://bhanu-real-estatte-website.netlify.app/",
    },
    {
      title: "Todo List Website",
      des: "React.js | CSS",
      src: todoImg,
      githubLink: "https://github.com/BhanuPrakash43/TODO-LIST-APP",
      liveLink: "https://react-todo-website.netlify.app/",
    },
    {
      title: "Color Catching Game",
      des: "HTML | CSS | JavaScript",
      src: colorcatchingImg,
      githubLink: "https://github.com/BhanuPrakash43/Color-Catch-Game",
    },
    {
      title: "Inventory Management System",
      des: "Java | Java Swing",
      src: inventoryImg,
      githubLink:
        "https://github.com/BhanuPrakash43/Inventory-Management-System",
    },
    {
      title: "Mini Food Cart",
      des: "React.js | Node.js | Express.js | MongoDB | Tailwind CSS",
      src: foodCart,
      githubLink: "https://github.com/BhanuPrakash43/mini-food-cart",
      liveLink: "https://food-cart-website.netlify.app/",
    },
    {
      title: "Sudoku Solver",
      des: "Java | Java Swing",
      src: sudokuImg,
      githubLink: "https://github.com/BhanuPrakash43/Sudoku-Solver",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 768 && window.innerWidth < 1280) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    window.addEventListener("resize", updateItemsPerPage);
    updateItemsPerPage();

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const currentProjects = projects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section
      id="projects"
      className="w-full py-14 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {currentProjects.map((project, index) => (
          <ProjectsCard
            key={index}
            title={project.title}
            des={project.des}
            src={project.src}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
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
