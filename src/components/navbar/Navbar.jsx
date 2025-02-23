import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { bannerImg } from "../../assets/index";

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<div className="max-w-screen-xl mx-auto h-24 sticky top-0 z-50 bg-bodyColor flex justify-between items-center font-titleFont border-b border-gray-600 px-4 md:px-8">
			<div className="flex absolute left-4 gap-2">
				<Link
					to="home"
					smooth={true}
					duration={500}
					activeClass="active"
					spy={true}
					offset={-70}
					className="text-3xl font-bold cursor-pointer"
				>
					<span className="text-4xl font-bold text-red-600">P</span>
					ortfolio.
				</Link>
			</div>
			<div className="flex-1 flex justify-center">
				<ul className="hidden mdl:flex items-center gap-6 lg:gap-10 cursor-pointer text-md font-normal text-gray-300 tracking-wide ">
					<li className="hover:text-designColor duration-300">
						<Link
							to="home"
							smooth={true}
							duration={500}
							activeClass="active"
							spy={true}
							offset={-70}
						>
							Home
						</Link>
					</li>
					<li className="hover:text-designColor duration-300">
						<Link
							to="about"
							smooth={true}
							duration={500}
							activeClass="active"
							spy={true}
							offset={-70}
						>
							About
						</Link>
					</li>
					<li className="hover:text-designColor duration-300">
						<Link
							to="skills"
							smooth={true}
							duration={500}
							activeClass="active"
							spy={true}
							offset={-70}
						>
							Skills
						</Link>
					</li>
					<li className="hover:text-designColor duration-300">
						<Link
							to="projects"
							smooth={true}
							duration={500}
							activeClass="active"
							spy={true}
							offset={-70}
						>
							Projects
						</Link>
					</li>
					<li className="hover:text-designColor duration-300">
						<Link
							to="contact"
							smooth={true}
							duration={500}
							activeClass="active"
							spy={true}
							offset={-70}
						>
							Contact
						</Link>
					</li>
				</ul>
			</div>
			<div className="absolute right-4 flex items-center gap-4">
				<button className="hidden mdl:flex bg-gray-900 text-white border-2 border-red-600 hover:text-green-600 hover:border-green-600 duration-500 justify-center items-center gap-4 px-5 py-2 rounded-full text-lg cursor-pointer">
					<a
						href="https://github.com/BhanuPrakash43"
						target="_blank"
						rel="noopener noreferrer"
					>
						Github
					</a>
				</button>
				<span
					onClick={() => setShowMenu(!showMenu)}
					className="text-xl mdl:hidden bg-black w-10 h-10 flex items-center justify-center rounded-full text-designColor cursor-pointer transition-transform duration-500"
				>
					<FiMenu />
				</span>
			</div>
			<div
				className={`fixed inset-0 bg-gray-900 bg-opacity-75 z-40 transition-opacity duration-500 ${
					showMenu ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
				onClick={() => setShowMenu(false)}
			></div>

			<div
				className={`fixed top-0 left-0 w-11/12 max-w-sm h-screen bg-gray-900 p-4 transition-transform transform ${
					showMenu ? "translate-x-0" : "-translate-x-full"
				} duration-500 z-50`}
			>
				<div className="flex flex-col gap-8 py-14 px-6 relative">
					<div className="flex justify-center flex-col items-center">
						<img
							className="w-32 h-32 rounded-full border-2 border-gray-800"
							src={bannerImg}
							alt="logo"
						/>
						<p className="text-sm text-justify text-gray-400 mt-4">
							Driven and passionate Software Developer eager to
							embark on a professional journey through internships
							and full-time roles. My enthusiasm for programming
							is matched by my commitment to continuous learning
							and growth.
						</p>
					</div>
					<ul className="flex flex-col gap-4 mt-2 cursor-pointer">
						<li className="hover:text-designColor duration-300">
							<Link
								to="home"
								smooth={true}
								duration={500}
								activeClass="active"
								spy={true}
								offset={-70}
								onClick={() => setShowMenu(false)}
							>
								Home
							</Link>
						</li>
						<li className="hover:text-designColor duration-300">
							<Link
								to="about"
								smooth={true}
								duration={500}
								activeClass="active"
								spy={true}
								offset={-70}
								onClick={() => setShowMenu(false)}
							>
								About
							</Link>
						</li>
						<li className="hover:text-designColor duration-300">
							<Link
								to="skills"
								smooth={true}
								duration={500}
								activeClass="active"
								spy={true}
								offset={-70}
								onClick={() => setShowMenu(false)}
							>
								Skills
							</Link>
						</li>
						<li className="hover:text-designColor duration-300">
							<Link
								to="projects"
								smooth={true}
								duration={500}
								activeClass="active"
								spy={true}
								offset={-70}
								onClick={() => setShowMenu(false)}
							>
								Projects
							</Link>
						</li>
						<li className="hover:text-designColor duration-300">
							<Link
								to="contact"
								smooth={true}
								duration={500}
								activeClass="active"
								spy={true}
								offset={-70}
								onClick={() => setShowMenu(false)}
							>
								Contact
							</Link>
						</li>
					</ul>
					<button className="bg-gray-800 text-white border-2 border-red-600 hover:text-green-600 hover:border-green-600 duration-500 justify-center items-center gap-4 px-4 py-2 rounded-full text-lg cursor-pointer mt-4">
						<a
							href="https://github.com/BhanuPrakash43"
							target="_blank"
							rel="noopener noreferrer"
						>
							Github
						</a>
					</button>
					<span
						onClick={() => setShowMenu(false)}
						className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
					>
						<MdClose />
					</span>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
