/**
 *  @copyright 2025 codewithdeep
    @license Apache-2.0
*/ 

import React from 'react'
import { ButtonPrimary } from './Button';

const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Work',
      href: '#work'
    },
    {
      label: 'Reviews',
      href: '#reviews'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
    ];
  
const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/DeepBhatt-Cyber'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/deep-bhatt-348a88137/'
    },
    {
      label: 'Twitter X',
      href: 'https://x.com/Deep__Bhatt'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/dip_bhatt/'
    }
    ];

export default function Footer() {
  return (
    <footer className='senction'>
        <div className='container'>
            <div className='lg:grid lg:grid-cols-2'>
                <div className='mb-8'>
                    <h2 className='headline-1 mb-8 lg:max-w-[12ch] reveal-up'>
                        Let&apos;s work together today!
                    </h2>
                    <ButtonPrimary 
                        href="mailto:deepbhatt88666@gmail.com"
                        label='Start project'
                        icon="chevron_right"
                        classes="reveal-up"
                    />
                </div>

                <div className='grid grid-cols-2 gap-4 lg:pl-20 mb-10 ml-5'>

                    <div>
                        <p className='mb-2 reveal-up'>Sitemap</p>

                        <ul>
                            {sitemap.map(({ label, href }, key) => (
                                <li key={key}>
                                    <a href={href} className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up'>
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    
                    <div>
                        <p className='mb-2 reveal-up'>Socials</p>

                        <ul>
                            {socials.map(({ label, href }, key) => (
                                <li key={key}>
                                    <a href={href} target='_blank' className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up'>
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-between pt-10 mb-8'>
                <a href='/' className='logo reveal-up'>
                    <img src='/images/db-logo.svg' width={40} height={40} alt='logo' />
                </a>

                <p className='text-zinc-500 text-sm reveal-up'>
                    &copy; 2025 <span className='text-zinc-200'>codewithdeep</span>
                </p>
            </div>
        </div>
    </footer>
  )
}
