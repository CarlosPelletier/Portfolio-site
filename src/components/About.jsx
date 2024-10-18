import AboutImg from '../assets/images/aboutImg.png'

const About = () => {
  return (
    <section className='bg-aboutbg bg-cover bg-no-repeat w-screen pb-32'>
        <div className='flex justify-center mb-7 md:mb-0'>
            <span id='About' className='px-2 rounded-full bg-neutral-400'>About Me</span>
        </div>
        <div className='lg:max-w-6xl flex flex-col w-4/5 mx-auto xl:mt-10 md:grid md:grid-cols-3 md:w-full md:px-10 md:grid-rows-3'>
            <div className='col-start-1 col-span-1 flex items-center md:row-start-1 lg:row-span-3 md:row-span-2'>
                <img className='lg:max-w-[400px] w-full mx-auto flex drop-shadow-xl' src={AboutImg} alt="piramid" />
            </div>
            <div className='text-sm text-justify lg:pl-20 flex flex-col justify-center col-start-2 col-span-2 md:row-start-1 lg:row-span-3 md:row-span-2 md:pl-10'>
                <h3 className='text-3xl font-semibold mb-10 pt-10'>A bit more about myself</h3>
                <p className='mb-6'>
                    I am passionate about learning and technology. Currently, I am transitioning into a career as a <span className='font-bold'>frontend developer</span> and will continue growing in this field to build more robust applications and create ideal solutions to tackle future challenges.
                </p>
                <p className='mb-6'>
                    I graduated as an occupational health doctor in 2018 and specialized in occupational health in 2020, gaining over five years of experience in the field. However, I always felt that something was missing in my professional life, which is why I turned to the world of technology. I'm fascinated by the diversity of solutions that can be created for any given problem. I firmly believe that programming will play an increasingly important role in how society develops, and I'm confident in my ability to contribute to this vast field.
                </p>
                <p className='mb-6 md:hidden lg:block'>
                    I am passionate about creating intuitive and efficient web solutions. I have the skills to build complete websites from <span className='font-bold'>{' '}Figma</span> templates, transforming designs into interactive, optimized user experiences. I'm also continuously learning to refine my knowledge, and I am currently taking a course on <span className='font-bold'>{' '}Redux</span>  to apply <span className='font-bold'>{' '}Flux architecture</span> and improve state management in complex applications. I look forward to taking on new challenges that will allow me to grow and deliver innovative solutions in frontend development.
                </p>
            </div>
            <div className='hidden lg:hidden md:block col-start-1 col-span-3 row-start-3 row-span-1'>
                <p className='mb-6 text-sm text-justify'>
                    I am passionate about creating intuitive and efficient web solutions. I have the skills to build complete websites from <span className='font-bold'>{' '}Figma</span> templates, transforming designs into interactive, optimized user experiences. I'm also continuously learning to refine my knowledge, and I am currently taking a course on <span className='font-bold'>{' '}Redux</span>  to apply <span className='font-bold'>{' '}Flux architecture</span> and improve state management in complex applications. I look forward to taking on new challenges that will allow me to grow and deliver innovative solutions in frontend development.
                </p>
            </div>
        </div>

    </section>
  )
}

export default About