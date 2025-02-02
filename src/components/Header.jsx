/**
 *  @copyright 2025 codewithdeep
    @license Apache-2.0
*/ 

/* Node modules */
import React, { useEffect, useState } from 'react'

/* components */
import Navbar from './Navbar'
import { useMediaQuery } from '../customHooks/useMediaQuery';


export default function Header() {
    const [navOpen, setNavOpen] = useState(false);
    const isAboveMd = useMediaQuery("(min-width: 768px)"); // Tailwind's md breakpoint


  return (
    <header className='fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0'>
        <div className='max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center '> 
            <h1>
                <a href='/' className='logo'>
                    <img src='/images/db-logo.svg' className='rounded-xl' alt='Deep Bhatt' width={40} height={40} />
                </a>
            </h1>
            <div className='relative md:justify-self-center'>
                {!isAboveMd && (
                    <button
                    className="menu-btn"
                    onClick={() => setNavOpen((prev) => !prev)}
                    >
                    <span className="material-symbols-rounded">
                        {navOpen ? "close" : "menu"}
                    </span>
                    </button>
                )}
                <Navbar navOpen={navOpen} />
            </div>  
            {isAboveMd && (
                <a href='#contact' className='btn btn-secondary max-md:hidden md:justify-self-end'>
                    Contact me
                </a>
             )}
        </div>
    </header>
  )
}
