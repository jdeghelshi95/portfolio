import React from "react";
import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <div className="h-screen w-screen">
      <div className=" w-full h-12  flex justify-center">
        <div className="flex self-center bg-gray-500  bg-opacity-95 p-4 mt-10 rounded-xl">
        <h1 className="text-white"> Current Skills</h1>
        </div>
      </div>

      <div className="bg-gray-500 bg-opacity-95  h-fit mt-20 p-6">
        <ul className=" grid gap-4 grid-cols-3 grid-rows-3 ">
          <div className="bg-yellow-400 rounded-xl ml-4"><li>HTML</li></div>
          <div className="bg-green-400 rounded-xl"><li>CSS</li></div>
          <div className="bg-red-500 rounded-xl mr-4"><li>JavaScript</li></div>
          <div className="bg-blue-300 rounded-xl ml-4"><li>React</li></div>
          <div className="bg-orange-600 rounded-xl"><li>Node.js</li></div>
          <div className="bg-blue-500 rounded-xl mr-4"><li>BootStrap</li></div>
          <div className="bg-orange-400 rounded-xl ml-4"><li>Tailwind</li></div>
          <div className="bg-indigo-300 rounded-xl"><li>Git-WorkFlow</li></div>
        </ul>
      </div>
    </div>
  );
};

export default Skills;