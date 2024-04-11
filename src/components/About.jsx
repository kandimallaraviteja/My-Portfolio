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
          Around 2 years total experience as a Software Developer and Data Engineer. Exctensive experience in Python, React, html, CSS, SQL, PowerBI, Flask, Pandas, Git and web frame works.<br />
          As a seasoned full-stack software engineer with over six years of experience, I specialize in creating elegant and user-friendly applications and websites.
          My goal is to deliver solutions that not only look great but also provide a seamless and enjoyable user experience. <br />
          I love working closely with clients to bring their ideas to life. Whether it's brainstorming during the initial stages or guiding them through the development process, I'm here to make sure their vision becomes a reality.
          Staying updated with the latest technologies and industry trends is something I'm passionate about. This allows me to continuously improve and deliver cutting-edge solutions that meet the highest standards.
          My commitment to excellence, combined with my technical skills and collaborative approach, make me a valuable asset to any project or team. Let's work together to create something amazing!
        </p>

        <p className="text-2xl font-bold  border-gray-500 mt-10">Why me?</p>
        <p className="text-xl mt-5">
        Being web Application Developer for the last 2 years has molded me into a goal oriented and hard working problem solver who always figures out a solution to an issue.
        I am a loyal team player and passionate coder through and through. I am also a quick learner who is results-driven. 
        </p>

        <br />

        <p className="text-xl mb-20">
        Software Engineer at @Centroid (Chennai) (Jul 2023 - Present)
        </p>

      </div>
    </div>
  );
};

export default About;

