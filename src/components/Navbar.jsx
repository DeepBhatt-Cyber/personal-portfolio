/**
 *  @copyright 2025 codewithdeep
    @license Apache-2.0
*/ 

/* Node modules */
import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types';



export default function Navbar({ navOpen }) {
    const lastActiveLink = useRef(null);
    const activeBox = useRef(null);

    const navItems = [
      {
        label: 'Home',
        link: '#home',
        className: 'nav-link active',
        ref: lastActiveLink
      },
      {
        label: 'About',
        link: '#about',
        className: 'nav-link'
      },
      {
        label: 'Skills',
        link: '#skills',
        className: 'nav-link'
      },
      {
        label: 'Experience',
        link: '#reviews',
        className: 'nav-link'
      },
      {
        label: 'Project',
        link: '#work',
        className: 'nav-link'
      },
      {
        label: 'Contact',
        link: '#contact',
        className: 'nav-link md:hidden'
      }
    ];

    const initActiveBox = () => {
        activeBox.current.style.top = lastActiveLink?.current.offsetTop + 'px';
        activeBox.current.style.left = lastActiveLink?.current.offsetLeft + 'px';
        activeBox.current.style.width = lastActiveLink?.current.offsetWidth + 'px';
        activeBox.current.style.height = lastActiveLink?.current.offsetHeight + 'px';
    }


    useEffect(() => {
      initActiveBox();
    }, []);

    window.addEventListener('resize', initActiveBox);

    const activeCurrentLink = (event) => {
        lastActiveLink.current?.classList.remove('active');
        event.target.classList.add('active');
        lastActiveLink.current = event.target;

        activeBox.current.style.top = event.target.offsetTop + 'px';
        activeBox.current.style.left = event.target.offsetLeft + 'px';
        activeBox.current.style.width = event.target.offsetWidth + 'px';
        activeBox.current.style.height = event.target.offsetHeight + 'px';
    };   

  return (
    <nav className={'navbar ' + (navOpen ? 'active' : '') }>
        {
            navItems.map((item, index) => 
                 (
                    <a key={index} href={item.link} className={item.className} ref={item.ref} onClick={activeCurrentLink}>
                        {item.label}
                    </a>
                )
            )    
        }
        <div className='active-box' ref={activeBox}>

        </div>
    </nav>
  )
}


Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired
}