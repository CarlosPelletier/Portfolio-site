import React from 'react'
import FaceImg from '../assets/images/Carlos.png'
import { MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <>
      <div className='bg-background bg-no-repeat bg-cover absollute bg-bottom w-full mb-16 md:mb-36 md:-top-14'>
        <section id='Home' className='flex lg:flex md:grid md:grid-cols-3 lg:flex-row flex-col-reverse lg:max-w-6xl md:w-full md:px-10 justify-center items-center -mt-10 lg:pt-36 md:pt-20 pt-20 lg:mx-auto'>
          <div className='flex md:col-start-1 md:col-span-2 flex-wrap flex-col justify-center lg:max-w-4xl sm:w-4/5 md:w-full md:pr-10 text-justify lg:pr-20 px-10'>
            <h1 className='md:text-5xl text-4xl font-bold mb-10 pt-10'>Hi, I'm Carlos</h1>
            <p className='mb-6'>I'm a medic, but always had an itch for the tech world, that is the main reason why I'm making a career change and begin a new path as a <span className='font-bold'>jr frontend</span> software developer.</p>
            <p>I have experience in planning, developing and executing projects that benefits the internal population of a community, also I have experience in decision taking and working under pressure with tight deadlines. In recent years I have acquired experience in the managing of tech stacks such as <span className='font-bold'>{' '} GIT, HTML, CSS, JS, React.Js</span> and <span className='font-bold'>{' '} Tailwind CSS</span> for the development of intuitive and responsive interfaces, and tech-based projects.</p>
            <div className='flex mt-6'>
              <MapPin />
              <p className='text-sm ml-5 font-bold'>Mexico City, Mexico</p>
            </div>

          </div>
          <img className='col-start-3 lg:max-w-[400px] md:w-full md:left-5 w-3/4 mx-auto drop-shadow-xl' src={FaceImg} alt="Carlos Esparza" />

        </section>

      </div>
        
    </>
  )
}

export default Hero