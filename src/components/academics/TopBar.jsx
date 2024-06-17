import React, { useState } from "react";
import Education from "./Education";
import Training from "./Training";

const TopBar = () => {
  const [educationData, setEducationData] = useState(true);
  const [trainingData, setTrainingData] = useState(false);
  return (
    <section
      id="academics"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li
            onClick={() => setEducationData(true) & setTrainingData(false)}
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() => setEducationData(false) & setTrainingData(true)}
            className={`${
              trainingData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Training
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {trainingData && <Training />}
    </section>
  );
};

export default TopBar;
