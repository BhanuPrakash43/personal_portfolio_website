import { motion } from "framer-motion";
import Card from "./Card";

function Training() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="mt-6 lgl:mt-20 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <Card
            title="Full Stack Development With MERN"
            subTitle="CipherSchools | Mohali, Punjab"
            result="Jan 2024 - Feb 2024"
            des="During the 4-week training period, proficiency was acquired in advanced React concepts such as hooks, 
                state management, and authentication. Knowledge was gained in Node Js, Express Js, and MongoDB, while 
                developing projects including a blog website, movie search website utilizing APIs, shopping cart, and a todo list."
          />
          <Card
            title="Fundamentals of Core Java and DSA"
            subTitle="Programming Pathshala | Ghaziabad, UP"
            result="June 2023 - July 2023"
            des="In an 8-week training period, Java fundamentals and advanced topics like Binary Search and Recursion 
                were mastered. A Sudoku Solver GUI project was developed in Java, employing arrays, recursion, and 
                backtracking techniques."
          />
        </div>
      </div>
    </motion.div>
  );
}
export default Training;
