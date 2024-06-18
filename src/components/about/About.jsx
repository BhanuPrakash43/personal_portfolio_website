import React, { useState } from "react";
import Title from "../layouts/Title";

function About() {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <section id="about" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title={"About me"} />
      </div>

      <div className="w-full h-auto bg-black bg-opacity-30 hover:bg-opacity-40 duration-300 p-8 lgl:px-10 shadow-shadowOne rounded-lg hover:text-gray-300 ">
        <p className="text-base md:text-lg font-medium text-gray-400 hover:text-gray-300 duration-300 tracking-wide">
          {showFullText ? (
            <>
              My name is Bhanu Prakash, son of Santosh Kumar and Usha Devi,
              hailing from Bihar. I am currently pursuing a Bachelor's degree in
              Computer Science and Engineering from Lovely Professional
              University. I completed my secondary and senior secondary
              schooling from Bal Vidya Niketan School in Jehanabad, Bihar. As a
              driven and passionate software developer, I am deeply focused on
              programming and continuously strive to acquire new skills.
              <br />
              <br />
              My interest in computer science began during my school days when I
              was eager to understand how computers work. This curiosity
              motivated me to delve deeper into the field, exploring computer
              applications, languages, and algorithms. This passion led me to
              choose computer science as my field of study and career path.
              <br />
              <br />
              I am proficient in JavaScript and React.js, with a strong
              foundation in Java and database management. To hone my frontend
              and backend skills, I have developed several projects, including a
              blog app for reading and writing blogs, a portfolio website, a
              real estate website, a to-do list app and many more. My aspiration
              is to secure a position in a reputable company and forge a
              successful career in software engineering.
              <br />
              <br />I am currently seeking internships and full-time
              opportunities to launch my career and gain practical experience.
              My enthusiasm for programming is matched by my disciplined
              approach and commitment to continuous learning, enabling me to
              excel in fast-paced environments. I thrive in teamwork, delivering
              high-quality results and meeting deadlines. Apart from my academic
              pursuits, I have a keen interest in fitness, cricket, and
              volleyball, firmly believing that discipline is paramount in
              achieving our goals and establishing a prosperous career. I am
              eager to contribute to innovative projects and grow
              professionally.
            </>
          ) : (
            <>
              My name is Bhanu Prakash, son of Santosh Kumar and Usha Devi,
              hailing from Bihar. I am currently pursuing a Bachelor's degree in
              Computer Science and Engineering from Lovely Professional
              University. I completed my secondary and senior secondary
              schooling from Bal Vidya Niketan School in Jehanabad, Bihar. As a
              driven and passionate software developer, I am deeply focused on
              programming and continuously strive to acquire new skills.
              <br />
              <br />
              My interest in computer science began during my school days when I
              was eager to understand how computers work. This curiosity
              motivated me to delve deeper into the field, exploring computer
              applications, languages, and algorithms. This passion led me to
              choose computer science as my field of study and career path.
              <br />
              <button
                onClick={toggleText}
                className="text-blue-500 hover:underline"
              >
                Read more
              </button>
            </>
          )}
        </p>
        {showFullText && (
          <button
            onClick={toggleText}
            className="mt-4 text-blue-500 hover:underline"
          >
            Show less
          </button>
        )}
      </div>
    </section>
  );
}

export default About;
