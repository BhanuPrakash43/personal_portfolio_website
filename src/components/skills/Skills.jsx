import React from "react";
import Title from "../layouts/Title";
import SkillsInput from "./SkillsInput";

const Skills = () => {
  const skills = [
    {
      title: "Java",
      link: "https://dev.java/learn/",
    },
    {
      title: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      title: "React.js",
      link: "https://react.dev/",
    },
    {
      title: "Node.js",
      link: "https://nodejs.org/en",
    },
    {
      title: "Express.js",
      link: "https://expressjs.com/",
    },
    {
      title: "MongoDB",
      link: "https://www.mongodb.com/",
    },
    {
      title: "MySQL",
      link: "https://www.mysql.com/",
    },
    {
      title: "Tailwind CSS",
      link: "https://tailwindcss.com/",
    },
    {
      title: "HTML5",
      link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
    },
    {
      title: "CSS3",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      title: "Bootstrap",
      link: "https://getbootstrap.com/",
    },
    {
      title: "RESTful APIs",
      link: "",
    },
    {
      title: "Git",
      link: "https://git-scm.com/",
    },
    {
      title: "GitHub",
      link: "https://github.com/",
    },
    {
      title: "Vs Code",
      link: "https://code.visualstudio.com/",
    },
    {
      title: "Canva",
      link: "https://www.canva.com/",
    },
    {
      title: "Netlify",
      link: "https://www.netlify.com/",
    },
    {
      title: "Responsive Website Design",
      link: "",
    },
    {
      title: "Data Structures and Algorithms",
      link: "",
    },
  ];

  return (
    <div
      id="skills"
      className="wrapper w-full py-14 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="My Skills" />
      </div>
      <div className="flex gap-4 flex-wrap">
        {skills.map((skill, index) => (
          <SkillsInput key={index} title={skill.title} link={skill.link} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
