import React from "react";
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[300px] lgl:w-[450px] lgl:h-[450px] z-10 rounded-full border-4 border-gray-800"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute  w-[300px] h-[300px] lgl:w-[450px] lgl:h-[450px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center rounded-full"></div>
    </div>
  );
};

export default RightBanner;
