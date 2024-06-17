import React from "react";
import Title from "../layouts/Title";
import {
  blogImg,
  realestateImg,
  todoImg,
  colorcatchingImg,
  inventoryImg,
  sudokuImg,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Blog Website"
          des="React Js | Node Js | Express Js | MongoDB"
          src={blogImg}
          githubLink={"https://github.com/BhanuPrakash43/Blog-App"}
          liveLink={"https://mern-blog-app-bp.netlify.app/"}
        />
        <ProjectsCard
          title="Real Estate Website"
          des="React Js | CSS"
          src={realestateImg}
          githubLink={"https://github.com/BhanuPrakash43/Real-Estate-Website"}
          liveLink={"https://bhanu-real-estatte-website.netlify.app/"}
        />
        <ProjectsCard
          title="Todo List Website"
          des="React Js | CSS"
          src={todoImg}
          githubLink={"https://github.com/BhanuPrakash43/TODO-LIST-APP"}
        />
        <ProjectsCard
          title="Color Catching Game"
          des="HTML | CSS | JavaScript"
          src={colorcatchingImg}
          githubLink={"https://github.com/BhanuPrakash43/Color-Catch-Game"}
        />
        <ProjectsCard
          title="Inventory Management System"
          des="Java | Java Swing"
          src={inventoryImg}
          githubLink={
            "https://github.com/BhanuPrakash43/Inventory-Management-System"
          }
        />
        <ProjectsCard
          title="Sudoku Solver"
          des="Java | Java Swing"
          src={sudokuImg}
          githubLink={"https://github.com/BhanuPrakash43/Sudoku-Solver"}
        />
      </div>
    </section>
  );
};

export default Projects;
