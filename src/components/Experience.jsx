/**
 *  @copyright 2025 codewithdeep
    @license Apache-2.0
*/ 


/**
 * Node modules
 */
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

/**
 * Rgister gsap plugings
 */

gsap.registerPlugin(useGSAP, ScrollTrigger)

import React from 'react'
import ExperienceCard from './ExperienceCard';


const experience = [
    {
        company: "BMV System Integration Pvt. Ltd.",
        position: "Software Developer",
        startTime: '04/2021',
        endTime: 'Present',
        location: 'Ahmedabad, India',
        content: ["Developed software applications to meet client needs and improve overall user experience." ,"Integrate the web dashboard with essential reports to enhance decision-making in the automation industry, achieving a 50% performance improvement while reducing human error.",
            "Collaborated with cross-functional teams to design, develop, and implement new features.",
            "Utilized version control systems such as Git and GitLab to manage changes in source code over time accurately.",
            "Implemented responsive web designs for optimal viewing on various devices."
        ]
    },
    {
        company: "Locanix Pvt. Ltd.",
        position: "Software Support Engineer",
        startTime: '02/2019',
        endTime: '01/2021',
        location: 'Ahmedabad, India',
        content: ["Device firmware upgrade", "Manage and solve queries and give responses to clients",
            "Device migration", "Telephonic and Remotely client support.", "Daily base audit and manage inventory."
        ]
    },
  ];

export default function Experience() {
  
  useGSAP(() => {
    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger: '.scrub-slide',
        start: '-200% 80%',
        end: '400% 80%',
        scrub: true
      },
      x: '-1000'
    })
  })

  
  return (
    <section id='experience' className='section overflow-hidden'>
        <div className='container' >
            <h2 className='headline-2 mb-8 reveal-up'>
               Work Experience
            </h2>
            <div className='grid gap-x-4 gap-y-5 grid-cols-1 lg:grid-cols-2 reveal-up'>
                {experience.map(({company, position, startTime, endTime, location, content }, key) => (
                    <ExperienceCard key={key} company={company} position={position} startTime={startTime} endTime={endTime} location={location} content={content} />
                ))}
            </div>
        </div>
    </section>
  )
}
