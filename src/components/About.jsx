import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        A data science enthusiast with a deep passion for working with data to uncover valuableinsights and drive informed decision-making. Proficient in Python, SQL, R, and Flask. I possess extensive experience in leveraging data visualization libraries to effectivelycommunicate findings. 
        I am highly motivated to collaborate on harnessing the fullpotential of data to provide strategic guidance and contribute to impactful outcomes.
        </p>

        <br />

        <p className="text-xl">
        Software Engineer at @Centroid Engineering Solutions (Jul 2023 - Present)
        </p>

      </div>
    </div>
  );
};

export default About;
