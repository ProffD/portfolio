import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import reactImage from "../assets/react.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import angular from "../assets/angular.png";
import azure from "../assets/azure.png";
import bootstrap from "../assets/bootstrap.jpg";
import dotnetcore from "../assets/dotnetcore.png";
import vuejs from "../assets/vuejs.png";
import typescript from "../assets/typescript.png";
import mssql from "../assets/mssql.jpg";
import docker from "../assets/docker.png";
import csharp from "../assets/csharp.png";
import restapi from "../assets/restapi.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: angular,
      title: "Angular",
      style: "shadow-red-400",
    },
    {
      id: 2,
      src: reactImage,
      title: "React",
      style: "shadow-sky-500",
    },
    {
      id: 3,
      src: vuejs,
      title: "Vue.js",
      style: "shadow-green-400",
    },
    {
      id: 4,
      src: typescript,
      title: "TypeScript",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: dotnetcore,
      title: ".NET Core",
      style: "shadow-purple-500",
    },
    {
      id: 6,
      src: csharp,
      title: "C#",
      style: "shadow-purple-400",
    },
    {
      id: 7,
      src: azure,
      title: "Azure",
      style: "shadow-blue-500",
    },
    {
      id: 8,
      src: html,
      title: "HTML5",
      style: "shadow-orange-500",
    },
    {
      id: 9,
      src: css,
      title: "CSS3",
      style: "shadow-blue-400",
    },
    {
      id: 10,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 11,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-400",
    },
    {
      id: 12,
      src: github,
      title: "Git/GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 13,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 14,
      src: mssql,
      title: "SQL Server",
      style: "shadow-red-500",
    },
    {
      id: 15,
      src: docker,
      title: "Docker",
      style: "shadow-green-500",
    },
    {
      id: 16,
      src: restapi,
      title: "REST APIs",
      style: "shadow-yellow-400",
    }
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen pt-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white py-16">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Technical Skills
          </p>
          <p className="py-6">Technologies and tools I use to build enterprise solutions</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
