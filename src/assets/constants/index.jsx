import ProjectImg1 from '../images/Project1.png'
import ProjectImg2 from '../images/Project2.png'
import ProjectImg3 from '../images/Project3.png'



export const menuOptions = [
    {
        tag: 'Home',
        link: '#Home'
    },
    {
        tag: 'About',
        link: '#About'
    },
    {
        tag: 'Projects',
        link: '#Projects'
    },
    ]

export const ProjectsInfo = [
    {
        title: 'Landing Page',
        link: 'https://spacex-rose-two.vercel.app/',
        img: ProjectImg1,
        description: 'Landing page inspired by Space X intended for commercial flights across space. The site showcases coercion in creative and responsive design, created using React and Tailwind',
        tags: [
            'React JS',
            'Tailwind CSS',
            'Figma',
            'Responsive Design'
        ],
        number: '1'
    },
    {
        title: 'Task manager',
        link: 'https://task-manager-drab-delta.vercel.app/',
        img: ProjectImg2,
        description: ' An app for the purpose of tracking assignements. Uses React and Tailwind for the creation of a fully interactive app, uses hooks such as useState, useEffect, useContext, usePortal as well as usage of Local Memory for storage',
        tags: [
            'React JS',
            'useState',
            'useEffect',
            'useContext',
            'usePortal',
            'Local Storage',
            'Tailwind CSS',
        ],
        number: '2'
    },
    {
        title: 'Character displayer',
        link: 'https://infinite-scroll-nine-tau.vercel.app/',
        img: ProjectImg3,
        description: 'Program created for showcasing and infinite scroll component with the implementation of useRef and useCallback, the usage of a custom hook for logic managing, and the call of an API',
        tags: [
            'React JS',
            'Infinite Scroll',
            'useRef',
            'useCallback',
            'Custom hook',
            'Tailwind CSS',
            'API'
        ],
        number: '3'
    }
]