import React, { useState } from 'react';
import { FaBars, FaTimes} from 'react-icons/fa';
import { Link } from 'react-scroll';

export const NavBar = () => {
    const [nav, setNav] = useState(false);
    const links = [
        { id: 1,
          link: 'home'
        },
        { id: 2,
            link: 'about'
        },
        { id: 3,
        link: 'portfolio'
        },
        { id: 4,
        link: 'experience'
        },
        { id: 5,
        link: 'contact'
        }
    ];
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-50'>
        <h1 className='text-5xl font-signature ml-2'>Tshenolo</h1>
        <ul className='hidden md:flex'>
            { links.map( ({link,id}) => (
                <li key={id} className='list-none'>
                  <Link
                    to={link}
                    smooth
                    duration={500}
                    spy={true}
                    activeClass='active-nav-link'
                    className='px-4 py-2 cursor-pointer capitalize font-medium text-gray-500 hover:text-white hover:scale-105 duration-200 border-b-2 border-transparent'
                    offset={-80}
                  >
                    {link}
                  </Link>
                </li>
            ))}
        </ul>

        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {nav ? <FaTimes size={30}></FaTimes> : <FaBars size={30}></FaBars> }
        </div>

        { nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                { links.map( ({link,id}) => (
                  <li key={id} className='list-none'>
                    <Link
                      onClick={() => setNav(!nav)}
                      to={link}
                      smooth
                      duration={500}
                      spy={true}
                      activeClass='active-nav-link-mobile'
                      className='px-4 cursor-pointer capitalize py-6 text-4xl text-gray-500 hover:text-white duration-200 border-b-4 border-transparent'
                      offset={-80}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
            </ul>
        ) }
    </div>
  )
}
export default NavBar