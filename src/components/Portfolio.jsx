import React from 'react';
import reponcivedesign from '../assets/portfolio/reponcivedesign.jpg';
import tixtac from '../assets/portfolio/tixtac.jpeg';
import usestate from '../assets/portfolio/usestate.jpg';
import dashboard from '../assets/portfolio/dashboard.png';

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: reponcivedesign
    },
    {
      id: 2,
      src: dashboard
    },
    {
      id: 3,
      src: usestate
    },
    {
      id: 4,
      src: tixtac
    },


    
  ]


  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

          <div className='pb-8'>

            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-6'>Check out some of my works here</p>

          </div>

          <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

            {
              portfolios.map(({ id, src }) => {
                return (
                  
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'> 
                      {/* <img src={src} alt='' className='rounded-md w-full h-auto duration-200 hover:scale-105'/> */}
                      <img src={src} alt='' className='rounded-md w-full h-60 object-cover duration-200 hover:scale-105'/>
                      <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py3 m-4 duration-200 hover:scale-105'>Demo</button>
                        <button className='w-1/2 px-6 py3 m-4 duration-200 hover:scale-105'>Code</button>
                      </div>
                    </div>
                  
                );
              })
            }
            
          </div>




      </div>

    </div>
  );
};

export default Portfolio;