/**
 *  @copyright 2025 codewithdeep
    @license Apache-2.0
*/ 


/**
 * Components
*/

import React from 'react'
import SkillCard from './SkillCard'

const skillItem = [
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/HTML5.svg',
      label: 'HTML',
      desc: 'Web'
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'JavaScript Library'
    },
    {
      imgSrc: '/images/Redux.svg',
      label: 'Redux',
      desc: 'JavaScript Library'
    },
    {
      imgSrc: '/images/NET core.svg',
      label: 'C# .Net',
      desc: 'Backend'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/postgresql-logo.svg',
      label: 'Postgresql',
      desc: 'Database'
    },
    {
      imgSrc: '/images/figma.svg',
      label: 'Figma',
      desc: 'Design tool'
    },
    {
      imgSrc: '/images/Git.svg',
      label: 'Git',
      desc: 'Version Control'
    },
    {
      imgSrc: '/images/GitHub.svg',
      label: 'GitHub',
      desc: 'Version Control'
    },
    {
      imgSrc: '/images/BitBucket.svg',
      label: 'BitBucket',
      desc: 'Version Control'
    },
  ];

export default function Skills() {
  return (
    <section id='skills' className='section'>
        <div className="container">
            <h2 className='headline-2 reveal-up'>
                Essential Tools I use
            </h2>
            <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch]'>
                Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
            </p>
            <div className='grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]'>
                {
                    skillItem.map((item, index) => (
                        <SkillCard key={index} imgSrc={item.imgSrc} label={item.label} desc={item.desc} classes="reveal-up" />
                    )) 
                }
            </div>
        </div>
    </section>
  )
}
