import React from "react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full border border-gray-700 bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-44 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Bhanu Prakash</h3>

        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 7726905698</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">bhanu742630@gmail.com</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Address:{" "}
          <span className="text-lightText">
            Kurtha, Arwal, Bihar ( 804421 )
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a
              href="https://www.linkedin.com/in/bhanuprakash001/"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://www.instagram.com/bhanuprakashh__?igsh=MXJ6aHoxZW40bndidg=="
              target="_blank"
            >
              <FaInstagram />
            </a>
          </span>

          <span className="bannerIcon">
            <a href="https://leetcode.com/u/BhanuPrakash777/" target="_blank">
              <SiLeetcode />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://www.hackerrank.com/profile/BhanuPrakash77"
              target="_blank"
            >
              <SiHackerrank />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
