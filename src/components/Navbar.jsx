import { useState } from 'react'
import { HashLink } from 'react-router-hash-link';
import { menuOptions } from '../assets/constants';
import { Menu, X, Linkedin, Github } from 'lucide-react';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleNavbar = () => {
        setOpenMenu(!openMenu)
    }

  return (
    <>
        <nav className='flex sticky top-0 z-50 pb-2 backdrop-blur-lg'>
            <div className='flex justify-between w-full'>
                <div className="flex-shrink-0 ml-9 pt-3 font-bold">
                    <HashLink smooth to='#Home'>Carlos Esparza</HashLink>
                    
                </div>
                <div className="hidden lg:flex  p-2 space-x-3">
                    {menuOptions.map(option => (
                        <HashLink smooth to={option.link}  className='px-3 no-underline cursor-pointer text-black text-lg font-semibold border-2 border-transparent rounded-full hover:bg-neutral-300' key={option.tag}>{option.tag}</HashLink>
                    ))}
                </div>
                <div className='mr-16 h-4 lg:flex mt-3 space-x-5 justify-end hidden'>
                <Linkedin className='cursor-pointer' onClick={() => window.open('https://www.linkedin.com/in/carlos-esparza-8b56252b4/')} />
                <Github className='cursor-pointer' onClick={() => window.open('https://github.com/CarlosPelletier/')}/>
                </div>
            </div>

            <div className='lg:hidden flex flex-col justify-end pr-5 w-full items-end z-50'>
                <button onClick={toggleNavbar}>
                    {openMenu ? <X /> : <Menu />}
                </button>
            </div>
        </nav>
        {openMenu && (
            <>
                <div className="fixed w-full px-12 pt-4 flex flex-col items-center lg:hidden backdrop-blur-lg z-50">
                    {menuOptions.map(option => (
                        <HashLink smooth to={option.link} className='py-2 font-semibold' key={option.tag}>{option.tag}</HashLink>
                    ))}
                    <div className='h-10 flex space-x-2 justify-center lg:hidden'>
                    <Linkedin className='cursor-pointer' onClick={() => window.open('https://www.linkedin.com/in/carlos-esparza-8b56252b4/')} />
                    <Github className='cursor-pointer' onClick={() => window.open('https://github.com/CarlosPelletier/')}/>
                    </div>
                </div>
            </>
        )}
    </>
  )
}

export default Navbar