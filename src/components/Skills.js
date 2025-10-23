import React from "react";
import SkillsData from "../data/skills";

const Skills = () => {
  return (
    <section className="text-gray-600 dark:text-gray-300 body-font bg-white dark:bg-gray-900 -mt-4">
      <div className="p-4 pt-8 mx-auto md:p-5 md:pt-10 md:mx-20 lg:mx-32 xl:mx-56">
        <div
          id="skills"
          className="flex flex-wrap w-full mb-4 flex-col justify-center text-center md:mb-7"
        >
          <h1 className="sm:text-4xl text-3xl font-medium mb-2 text-gray-900 dark:text-white">
            Skills
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg font-medium leading-relaxed text-dark-orange "
          >
            My Technical Expertise
          </p>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-once="false"
          className="px-2 py-6 grid justify-center items-center grid-cols-3 gap-x-3 gap-y-6 sm:grid-cols-4 md:py-5 lg:grid-cols-5 xl:grid-cols-6 rounded-md md:shadow-md bg-gray-50 dark:bg-gray-800 relative"
        >
          {/* Floating elements for dark mode */}
          <div className="hidden dark:block absolute top-4 left-4 w-2 h-2 bg-dark-orange rounded-full opacity-30 floating-element"></div>
          <div className="hidden dark:block absolute top-8 right-8 w-3 h-3 bg-dark-orange rounded-full opacity-20 floating-element" style={{animationDelay: '1s'}}></div>
          <div className="hidden dark:block absolute bottom-4 left-8 w-2 h-2 bg-dark-orange rounded-full opacity-25 floating-element" style={{animationDelay: '3s'}}></div>
          <div className="hidden dark:block absolute bottom-8 right-4 w-3 h-3 bg-dark-orange rounded-full opacity-15 floating-element" style={{animationDelay: '5s'}}></div>
          {SkillsData.map((skill, index) => {
            return (
              <div
                data-aos="zoom-in-up"
                data-aos-duration="1500"
                data-aos-once="false"
                key={index}
                className="flex flex-col w-20 h-20 items-center justify-center md:w-24 md:h-24 lg:m-3 xl:m-5 mx-auto"
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="m-2 object-cover w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 transition duration-700 hover:scale-110"
                />
                <p className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
