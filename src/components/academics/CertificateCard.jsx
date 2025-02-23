import React from "react";

const CertificateCard = ({ title, link, subTitle, date, des }) => {
  return (
    <div className="w-full h-fit flex group">
      <div className="w-10 h-[6px] bgOpacity mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-black bg-opacity-20 border border-gray-700 rounded-lg px-8 py-6 lgl:px-10 flex flex-col justify-center shadow-shadowOne relative">
        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              {title}
            </h3>
            <div className="flex items-center justify-between gap-10">
              <p className="text-sm mt-2 text-gray-400">
                {subTitle}
              </p>
              <span className="text-sm text-gray-200 font-medium border-b border-gray-400 hover:text-blue-500 hover:border-blue-500 duration-500">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  Certificate link
                </a>
              </span>
            </div>
          </div>
          <div>
            <p className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
              {date}
            </p>
          </div>
        </div>
        <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500 ease-in-out mt-4">
          <p className="text-sm text-justify md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
