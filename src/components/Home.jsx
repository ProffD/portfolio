import React from "react";
import HeroImage from "../assets/tshenolo_profile_pic.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Typical from "react-typical";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-3xl sm:text-3xl font-bold text-white">
            {" "}
            <Typical 
            loop={Infinity}
            steps={[
                "Software Engineer 💻 ",1500,
                "Full Stack Developer 🚀 ",1500,
                "Web developer 💼 ",1500
            ]}
            wrapper="p"
            />
            
          </h1>
          <p className="text-gray-500 py-4 pr-2 max-w-md">
            Software Engineer with 5+ years of experience building enterprise-level web applications. Skilled in full-stack development using Angular, React, Vue, TypeScript, and .NET Core, with exposure to cloud technologies. An accessibility champion focused on creating inclusive, scalable, and maintainable solutions while collaborating closely with teams to deliver high-quality software.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;