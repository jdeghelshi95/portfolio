import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className=" bg-gray-400 bg-opacity-50 h-screen">
      <div className=" flex justify-center w-screen h-screen  ">
        <div className=" ">
          {/*Title Section   */}
          <div className="w-full h-1/6 flex justify-center mt-6">
            <div className=" w-1/2 h-full    text-white">
              <div className="bg-red-600  flex-row">
                <div className="w-full ">
                  <h2 className=" h-fit self-center text-2xl font-mono  ">
                    {" "}
                    Software Engineer
                  </h2>
                </div>
                <div className="w-full">
                  <h1 className=" h-fit self-center text-2xl font-mono  ">
                    {" "}
                    Joshua Eghelshi
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* about myself section  */}
          <div className="w-full  flex justify-center mt-6">
            <div className=" w-1/2  bg-gray-600 text-white p-6 ">
              <p className="">
                {" "}
                My Name is Joshua Eghelshi and I am a software engineer. Below
                are some projects i have worked on
              </p>
            </div>
          </div>

          {/* button section leading to projects */}
          <div className="w-full flex justify-between mt-12">
            <div className="hover:bg-red-400 w-fit text-white bg-black ml-5 rounded-lg p-2 px-4">
              <button className="">
                <a href="https://jdeghelshi95.github.io/Tic-Tac-Toe-Ai/">
                  Tic-Tac-Toe-AI
                </a>
              </button>
            </div>

            <div className="hover:bg-red-400 bg-black w-fit text-white rounded-lg p-2 px-4">
              <button className="">
                <a href="https://videoembeds.herokuapp.com/">VideoHUB</a>
              </button>
            </div>

            <div className="hover:bg-red-400 bg-black w-fit text-white mr-5 rounded-lg p-2 px-4">
              <button className="">
                <a href="https://trip-commander.herokuapp.com/">
                  Trip-Commander
                </a>
              </button>
            </div>

            <div className="hover:bg-red-400 bg-black w-fit text-white mr-5 rounded-lg p-2 px-8">
              <button className="">
                <a href="https://resy-front-jgmj2.ondigitalocean.app/">
                  Resy
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
