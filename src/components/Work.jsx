/**
 *  @copyright 2025 codewithdeep
    @license Apache-2.0
*/ 

/**
 * Components
 */

import React from 'react'
import ProjectCard from './ProjectCard';

const works = [
    {
      imgSrc: '/images/portfolio.png',
      title: 'Personal Portfolio',
      tags: ['Web-design', 'Development'],
      projectLink: '/'
    },
    {
      imgSrc: '/images/project-5.jpg',
      title: 'eCommerce website',
      tags: ['eCommerce', 'Development'],
      projectLink: '/'
    },
    {
      imgSrc: '/images/project-6.jpg',
      title: 'vCard Personal portfolio',
      tags: ['Web-design', 'Development'],
      projectLink: '/'
    },
  ];

export default function Work() {
  return (
    <section id='work' className='section'>
        <div className='container'>
            <h2 className='headline-2 mb-8 reveal-up'>
                My portfolio highlights
            </h2>

            <div className='grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]'>
                { 
                    works.map(({ imgSrc, title, tags, projectLink }, index) => (
                        <ProjectCard key={index} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} classes="reveal-up"/>
                    ))
                }
            </div>
        </div>
    </section>
  )
}
