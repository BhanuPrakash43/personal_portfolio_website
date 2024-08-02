import React from "react";

const Title = ({ title }) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-12">
      <h1 className="text-3xl md:text-4xl text-gray-300 font-bold border-b-2 border-gray-600 capitalize">
        {title}
      </h1>
    </div>
  );
};

export default Title;
