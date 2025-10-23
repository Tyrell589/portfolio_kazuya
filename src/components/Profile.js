import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import SocialHandles from "./SocialHandles";
import ProfileData from "../data/profile";
import Wave from "./Wave";

const Profile = () => {
  return (
    <section
      id="home"
      className="text-gray-600 dark:text-gray-300 bg-darkblue dark:bg-gray-900 body-font pt-16 lg:min-h-75vh relative overflow-hidden"
    >
      {/* Enhanced animated background for dark mode */}
      <div className="hidden dark:block absolute inset-0 overflow-hidden">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-orange-900/20 animate-pulse"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl profile-gradient-orb"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl profile-gradient-orb" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-full blur-3xl profile-gradient-orb" style={{animationDelay: '4s'}}></div>
        
        {/* Additional gradient orbs for more depth */}
        <div className="absolute top-60 left-1/2 w-64 h-64 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-3xl profile-gradient-orb" style={{animationDelay: '6s'}}></div>
        <div className="absolute bottom-40 right-1/3 w-56 h-56 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl profile-gradient-orb" style={{animationDelay: '8s'}}></div>
        
        {/* Floating particles */}
        <div className="absolute top-32 left-1/4 w-2 h-2 bg-white/40 rounded-full profile-particle"></div>
        <div className="absolute top-48 right-1/3 w-1 h-1 bg-orange-400/60 rounded-full profile-particle" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/2 w-1.5 h-1.5 bg-purple-400/50 rounded-full profile-particle" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-64 right-1/4 w-1 h-1 bg-blue-400/60 rounded-full profile-particle" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-80 left-1/6 w-1 h-1 bg-pink-400/50 rounded-full profile-particle" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-60 right-1/6 w-1.5 h-1.5 bg-cyan-400/40 rounded-full profile-particle" style={{animationDelay: '5s'}}></div>
        
        {/* Enhanced shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent transform -skew-x-12 profile-shimmer"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-purple-500/5 to-transparent transform skew-x-12 profile-shimmer" style={{animationDelay: '4s'}}></div>
      </div>
      <div className="p-5 mx-auto gap-2 flex flex-col md:pt-12 md:px-7 lg:py-20 lg:flex-row-reverse items-center min-h-fit relative z-10">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-once="false"
          className="w-5/6 sm:max-w-xs md:max-w-sm lg:max-w-md sm:w-2/6 lg:mr-10 xl:mr-20 lg:p-5 lg:w-1/3 xl:w-1/4 "
        >
          <img
            className="object-cover object-center bg-[#b9aeb6] border-2 border-white pointer-events-none rounded-full backdrop-contrast-200 backdrop-brightness-200"
            alt={ProfileData.name}
            src={ProfileData.img}
          />
        </div>
        <div className="lg:flex-grow lg:pr-4 lg:mr-14 flex flex-col md:mb-0 items-center text-center xl:scale-105">
          {/* Floating decorative elements for dark mode */}
          <div className="hidden dark:block absolute top-20 left-10 w-4 h-4 bg-dark-orange rounded-full opacity-20 floating-element"></div>
          <div className="hidden dark:block absolute top-40 right-20 w-6 h-6 bg-dark-orange rounded-full opacity-15 floating-element" style={{animationDelay: '2s'}}></div>
          <div className="hidden dark:block absolute bottom-40 left-20 w-3 h-3 bg-dark-orange rounded-full opacity-25 floating-element" style={{animationDelay: '4s'}}></div>
          <SocialHandles />
          <h2
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="false"
            className="title-font md:text-3xl text-2xl mb-4 text-center font-medium text-white"
          >
            Hello , I am{" "}
            <span className="text-dark-orange">{ProfileData.name}</span>
          </h2>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="false"
            className="text-3xl text-white mb-4 font-medium lg:inline-block"
          >
            &nbsp;
            <Typewriter
              words={ProfileData.professions}
              loop={false}
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </div>
          {ProfileData.info?.map((item, index) => (
            <p
              key={index}
              data-aos="zoom-in-up"
              data-aos-duration="2000"
              data-aos-once="false"
              className="mb-2 text-white text-lg md:text-xl leading-relaxed"
            >
              {item}
            </p>
          ))}
          {/* <div
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            data-aos-once="false"
            className="mt-4 flex gap-x-4 md:gap-x-5 justify-center md:justify-between"
          >
            
            <a href={ProfileData.resume} target="_blank" rel="noreferrer">
              <button className="inline-flex font-medium text-white bg-dark-orange border-2 border-dark-orange py-3 px-7 focus:outline-none hover:bg-cornsilk hover:border-dark-orange hover:text-black rounded-full text-md xl:px-10">
                Get Resume
              </button>
            </a>
          </div> */}
        </div>
      </div>
      <Wave />
    </section>
  );
};

export default Profile;
