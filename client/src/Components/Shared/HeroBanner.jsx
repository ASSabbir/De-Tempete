// FILE: src/Components/Shared/PageHero.jsx

import React from "react";

const PageHero = ({
  bgImage,
  titleLine1,
  titleHighlight,
  titleLine3,
  description,
  buttonText,
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden pt-32 pb-20">
      <img
        src={bgImage}
        alt="hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#0d1b3e]/75"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          {titleLine1}
          <br />
          <span className="text-[#4AC4DE]">{titleHighlight}</span>
          <br />
          {titleLine3}
        </h1>

        <p className="max-w-3xl mx-auto mt-6 text-base md:text-lg text-gray-200 leading-relaxed">
          {description}
        </p>

        <button className="mt-10 border-2 border-white rounded-md px-8 py-3 font-semibold hover:bg-[#4AC4DE] hover:border-[#4AC4DE] hover:text-black duration-300">
          {buttonText} →
        </button>
      </div>
    </section>
  );
};

export default PageHero;