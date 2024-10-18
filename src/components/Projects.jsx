import ProjectDisplaly from './ProjectDisplaly'
import { ProjectsInfo } from '../assets/constants'

const Projects = () => {
  return (
    <>
        <div id='Projects' className='flex justify-center mb-7 md:mb-0'>
            <span className='px-2 rounded-full bg-neutral-400'>Projects</span>
        </div>
        {ProjectsInfo.map((Project, index) => {
          return (
            <ProjectDisplaly 
            key={index}
            title={Project.title}
            url={Project.link}
            img={Project.img}
            description={Project.description}
            tags={Project.tags}
            num={Project.number}
            />

          )
        })}
    </>
  )
}

export default Projects;