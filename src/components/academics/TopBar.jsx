import React, { useState } from "react";
import Education from "./Education";
import Training from "./Training";
import Certification from "./Certification";

const TopBar = () => {
	const [educationData, setEducationData] = useState(true);
	const [trainingData, setTrainingData] = useState(false);
	const [certificationData, setCertificationData] = useState(false);

	return (
		<section
			id="academics"
			className="w-full py-10 border-b-[1px] border-b-black"
		>
			<div>
				<ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
					<li
						onClick={() =>
							setEducationData(true) &
							setTrainingData(false) &
							setCertificationData(false)
						}
						className={`${
							educationData
								? "border-designColor rounded-lg"
								: "border-transparent"
						} resumeLi`}
					>
						Education
					</li>
					<li
						onClick={() =>
							setEducationData(false) &
							setTrainingData(true) &
							setCertificationData(false)
						}
						className={`${
							trainingData
								? "border-designColor rounded-lg"
								: "border-transparent"
						} resumeLi`}
					>
						Training
					</li>
					<li
						onClick={() =>
							setEducationData(false) &
							setTrainingData(false) &
							setCertificationData(true)
						}
						className={`${
							certificationData
								? "border-designColor rounded-lg"
								: "border-transparent"
						} resumeLi`}
					>
						Certification
					</li>
				</ul>
			</div>
			{educationData && <Education />}
			{trainingData && <Training />}
			{certificationData && <Certification />}
		</section>
	);
};

export default TopBar;
