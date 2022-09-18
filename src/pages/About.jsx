import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="h-screen">
      <div className="w-full h-1/6 flex justify-center mt-6">
        {/* name and job title */}

        <div className=" w-3/4 h-full    text-white">
          <div className="bg-red-600    flex-row">
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

          {/* about myself section  */}

          <div className="w-full  flex justify-center mt-6">
            <div className="   bg-gray-600 text-white p-6 ">
              <p className="">
                
                My name is Joshua Eghelshi i am a Software Engineer. 
                I enjoy coding and like to get into the details in making the consumer experiance feel connected to the Clients purpose. 
                
              </p>

            </div>
            <div>
              <button className="p-2 w-30 bg-indigo-600 hover:">Contact Me</button>
            </div>
          </div>
        
        
        </div>
      </div>
    </div>
  );
};

export default About;
