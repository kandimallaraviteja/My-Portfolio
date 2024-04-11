import React from 'react';
import MyImage from '../assets/heroImage.jpg';
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from 'react-scroll';


const Home = () => {
  return (

    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>

         <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>

               <div className='flex flex-col justify-center h-full'>

                  <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Software Developer</h2>

                  <p className='text-gray-200 py-4 max-w-md'>
                  Developer who passionate about web development and figuring out solutions to improve usability and functionality of websites and systems.
                  I am also easy going and enjoy collaborating with team members to get projects done a timely manner

                  Having spent a year crafting software solutions, I'm now diving into web application development with excitement.
                  I have a passion for crafting engaging digital experiences. My drive for innovation and excellence fuels me as I aim to make my mark in the ever-evolving world of web development. 
                  Join me on this exciting journey as we craft tomorrow's digital wonders.
                  </p>

                  <div>
                     <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                           <BiRightArrowAlt size={25} className='ml-1'/>
                        </span>
                     </Link>
                  </div>

               </div>

               <div>
                  <img src={MyImage} alt='my profile' className='rounded-2xl mx-auto w-2/3 md:w-full'/>
               </div>

         </div>

    </div>
  );
};

export default Home;