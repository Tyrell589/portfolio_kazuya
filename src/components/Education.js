/**
 * @fileoverview Education component for displaying educational background
 * Renders education section with university information and timeline
 */

import React from "react";
import EducationData from "../data/education";

const Education = () => {
  return (
    <section className="py-8 px-3 bg-white dark:bg-gray-900 -mt-4 md:py-10">
      <div className="mx-auto max-w-6xl">
        <div id="education" className="flex flex-col text-center mb-4 w-full">
          <h1 className="text-3xl sm:text-4xl font-medium title-font mb-2 text-gray-900 dark:text-white">
            Education
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center">
          {EducationData?.map((edu, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              data-aos-once="false"
              className="bg-slate-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-6 md:p-8 rounded-lg my-4 shadow-md max-w-2xl w-full"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* University Logo Placeholder */}
                {/* <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-amber-500 rounded-full flex items-center justify-center">
                    <div className="text-white font-bold text-lg">HKUST</div>
                  </div>
                </div> */}
                
                {/* University Information */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                    {edu.degree}
                  </h3>
                  <h4 className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-1">
                    {edu.institution}
                  </h4>
                  <p className="text-base text-dark-orange font-medium mb-2">
                    {edu.field}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {edu.duration}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
