import { motion } from "framer-motion";
import CertificateCard from "./CertificateCard";

function Certification() {
  const certificates = [
    {
      title: "Introduction to MongoDB for Students",
      subTitle: "MongoDB",
      link: "https://learn.mongodb.com/c/8ROtM0gMSCGitAyWAMPeyQ",
      date: "July 2024",
      des: "Gained foundational knowledge in MongoDB, enhancing my proficiency in NoSQL databases including data modeling, querying, and performance optimization and full-stack development. This equips me to efficiently manage and integrate databases, improving application performance and scalability in real-world projects.",
    },
    {
      title: "Server side JavaScript with Node.js",
      subTitle: "Coursera | NIIT",
      link: "https://www.coursera.org/account/accomplishments/verify/YHFHE4BLFYVC",
      date: "May 2024",
      des: "Acquired foundational knowledge in server-side JavaScript with Node.js, enhancing my proficiency in building and managing server-side applications, including handling asynchronous operations, middleware, and RESTful APIs. This equips me to efficiently develop and scale server-side code, improving application performance and scalability in real-world projects.",
    },
    {
      title: "Meta Front End Developer Professional Certificate",
      subTitle: "Coursera | Meta",
      link: "https://www.coursera.org/account/accomplishments/specialization/H3SV6CART5SU",
      date: "December 2023",
      des: "The Meta Front-End Developer Professional Certificate, covering nine courses including HTML/CSS, JavaScript, React, Git, UI/UX, and a capstone project, demonstrates my strong learning ability and consistency. This certification highlights my mastery of key front-end development technologies and practices, equipping me to efficiently develop and optimize user interfaces, enhancing user experience and performance in real-world projects.",
    },
    {
      title: "Java (Basic)",
      subTitle: "HackerRank",
      link: "https://www.hackerrank.com/certificates/012069e0338e",
      date: "December 2023",
      des: "The Java Basic Certification from HackerRank demonstrates my proficiency in fundamental Java programming skills and enhances my credibility as a Java developer.",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="mt-10 lgl:mt-12 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={index}
              title={certificate.title}
              subTitle={certificate.subTitle}
              link={certificate.link}
              date={certificate.date}
              des={certificate.des}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
export default Certification;
