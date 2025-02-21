/**
 *  @copyright 2025 codewithdeep
    @license Apache-2.0
*/ 

import React from 'react'

const aboutItems = [
    {
      label: 'Project done',
      number: 5
    },
    {
      label: 'Years of experience',
      number: 3
    }
  ];

export default function About() {
  return (
    <section id='about' className='section'>
        <div className="container">
            <div className='bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up'>
                <p className='text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]'>
                Welcome! I&apos;m Deep, a professional Full Stack Developer with a passion for creating visually stunning and highly functional websites. By blending creativity with technical expertise, I turn your vision into a digital masterpiece that excels in both aesthetics and performance.
                </p>
                <div className='flex flex-wrap items-center gap-4 md:gap-7'>
                        {aboutItems.map((item, index) => (
                            <div key={index} >
                                <div className='flex items-center md:mb-2'>
                                    <span className='text-2xl font-semibold md:text-4xl'>{item.number}</span>
                                    <span className='text-sky-400 font-semibold md:text-3xl'>+</span>
                                </div>
                                <p className='text-sm text-zinc-400'>{item.label}</p>
                            </div>
                        ))
                    }
                    <img src='/images/db-logo.svg' alt='Logo' width={40}
                    height={40} className='ml-auto rounded-xl md:w-[40px] md:h-[40px]' />
                </div>
            </div>
        </div>
    </section>
  )
}
