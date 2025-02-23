import React, { useState } from "react";
import Title from "../layouts/Title";

function About() {
	const [showFullText, setShowFullText] = useState(false);

	const toggleText = () => {
		setShowFullText(!showFullText);
	};

	return (
		<section
			id="about"
			className="w-full py-10 border-b-[1px] border-b-black"
		>
			<div className="flex justify-center items-center text-center">
				<Title title={"About me"} />
			</div>

			<div className="w-full h-auto bg-[#0b0b0b] border border-gray-700 bg-opacity-30 hover:bg-opacity-40 duration-300 p-8 lgl:px-10 shadow-shadowOne rounded-lg hover:text-gray-300 ">
				<p className="text-base md:text-lg font-medium text-justify text-gray-400 hover:text-gray-300 duration-300 tracking-wide">
					{showFullText ? (
						<>
							My name is Bhanu Prakash, hailing from Bihar. I am
							currently pursuing a Bachelor’s degree in Computer
							Science and Engineering from Lovely Professional
							University. I completed my secondary and senior
							secondary education at Bal Vidya Niketan School in
							Jehanabad, Bihar. As a passionate and driven
							software developer, I am deeply focused on
							programming and continuously strive to expand my
							skill set.
							<br />
							<br />
							My interest in computer science began during my
							school days when I became curious about how
							computers work. This curiosity led me to explore
							computer applications, programming languages, and
							algorithms, ultimately shaping my decision to pursue
							computer science as both my field of study and
							career path.
							<br />
							<br />
							I am proficient in JavaScript, React.js, Node.js,
							Express.js, and MongoDB, with a strong foundation in
							Java and database management. To enhance my frontend
							and backend skills, I have developed several
							projects, including: A blog platform with user
							authentication, commenting, and an admin dashboard,
							A personal portfolio website to showcase my work and
							skills, A to-do list website for efficient task
							management and many more. My aspiration is to secure
							a position in a reputable company where I can
							contribute effectively and build a successful career
							in software engineering.
							<br />
							<br />
							I am currently seeking internships and full-time
							opportunities to gain hands-on experience and apply
							my skills in real-world projects. My enthusiasm for
							programming is complemented by my disciplined
							approach and commitment to continuous learning,
							enabling me to excel in fast-paced environments. I
							thrive in teamwork, consistently delivering
							high-quality results while meeting deadlines.
							<br />
							<br />
							Beyond academics and programming, I have a strong
							interest in fitness, cricket, and volleyball, as I
							believe that discipline and consistency are crucial
							in achieving both professional and personal success.
							I am eager to contribute to innovative projects and
							grow professionally in the field of software
							development.
						</>
					) : (
						<>
							My name is Bhanu Prakash, hailing from Bihar. I am
							currently pursuing a Bachelor’s degree in Computer
							Science and Engineering from Lovely Professional
							University. I completed my secondary and senior
							secondary education at Bal Vidya Niketan School in
							Jehanabad, Bihar. As a passionate and driven
							software developer, I am deeply focused on
							programming and continuously strive to expand my
							skill set.
							<br />
							<br />
							My interest in computer science began during my
							school days when I became curious about how
							computers work. This curiosity led me to explore
							computer applications, programming languages, and
							algorithms, ultimately shaping my decision to pursue
							computer science as both my field of study and
							career path.
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
