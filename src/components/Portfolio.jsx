import React from "react";
import WeatherApp from "../assets/portfolio/WeatherApp.PNG";
import MortgageApp from "../assets/portfolio/mortcalc.png";
import Pending from "../assets/portfolio/pending.jpg";



const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: WeatherApp,
      title: "Weather Application",
      description: "Vibe-based weather app with real-time data",
      demo: "https://tshenolo-weather-app.netlify.app/",
      code: "https://github.com/ProffD/weather-app"
    },
    {
      id: 2,
      src: MortgageApp,
      title: "Mortgage calculator",
      description: "A modern Angular application built using Angular Signals for state management, focused on performance, clarity, and reactive UI updates",
      demo: "https://ProffD.github.io/mortgage",
      code: "https://github.com/ProffD"
    },
    {
      id: 3,
      src: Pending,
      title: "Learner placement system",
      description: "Angular & .NET Core enterprise solution for school placement (In progress)",
      demo: "#",
      code: "https://github.com/ProffD"
    }
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full py-16">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, description, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg overflow-hidden">
              <img
                src={src}
                alt={title}
                className="rounded-t-md duration-200 hover:scale-105 w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-400 mb-4">{description}</p>
                <div className="flex items-center justify-center">
                  <a 
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105 text-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md"
                  >
                    Demo
                  </a>
                  <a
                    href={code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105 text-center border-2 border-gray-500 rounded-md hover:bg-gray-700"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;