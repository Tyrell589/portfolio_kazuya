import React, { useState } from "react";
import { Link } from "react-scroll";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { BsSun, BsMoon } from "react-icons/bs";
import { useTheme } from "../contexts/ThemeContext";
import Navlinks from "../data/navlinks";
import ProfileData from "../data/profile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-white body-font fixed inset-x-0 z-50 bg-darkblue">
      <div className="mx-auto py-2 px-5 flex flex-row justify-between lg:justify-around items-center lg:py-3">
        <Link
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-once="false"
          spy={true}
          smooth={true}
          offset={-100}
          duration={750}
          to="home"
          className="flex justify-center items-center w-fit"
        >
          
        </Link>
        <nav
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-once="false"
          className="hidden md:mx-auto lg:flex flex-wrap items-center text-lg justify-center gap-12"
        >
          {Navlinks.map((item) => {
            return (
              <Link
                key={item.title}
                spy={true}
                smooth={true}
                offset={-100}
                duration={750}
                to={item.link}
                className="cursor-pointer hover:text-dark-orange"
              >
                {item.title}
              </Link>
            );
          })}
        </nav>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-once="false"
          className="lg:hidden mr-2"
        >
          <button onClick={toggleMenu} className="p-2 text-white">
            {isMenuOpen ? (
              <MdClose className="h-6 w-6" />
            ) : (
              <BiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <BsSun className="h-5 w-5 text-yellow-400" />
            ) : (
              <BsMoon className="h-5 w-5 text-gray-300" />
            )}
          </button>
          {/* <a
            href={ProfileData.resume}
            target="_blank"
            rel="noreferrer"
            className="leading-none text-white bg-dark-orange py-3 px-10 rounded-lg font-medium text-lg hover:bg-orange-600 transition-colors duration-200"
          >
            Resume
          </a> */}
        </div>
        {isMenuOpen && (
          <div className="min-h-[calc(100vh-4rem)] absolute inset-x-0 top-16 z-50 transition-all ease-in duration-1000 lg:hidden">
            <div
              data-aos="zoom-in-down"
              data-aos-duration="500"
              data-aos-once="true"
              className="rounded-b-lg bg-darkblue shadow-lg px-5 pb-4"
            >
              <nav className="flex flex-col gap-y-7 text-xl">
                {Navlinks.map((item) => {
                  return (
                    <Link
                      key={item.title}
                      onClick={() => setIsMenuOpen(false)}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={750}
                      to={item.link}
                      className="cursor-pointer hover:text-dark-orange"
                    >
                      {item.title}
                    </Link>
                  );
                })}
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors duration-200"
                    aria-label="Toggle theme"
                  >
                    {isDarkMode ? (
                      <BsSun className="h-5 w-5 text-yellow-400" />
                    ) : (
                      <BsMoon className="h-5 w-5 text-gray-300" />
                    )}
                  </button>
                  {/* <a
                    href={ProfileData.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white bg-dark-orange py-2.5 px-10 rounded-lg font-medium text-lg w-fit mx-auto hover:bg-orange-600 transition-colors duration-200"
                  >
                    Resume
                  </a> */}
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
