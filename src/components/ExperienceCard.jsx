/**
 *  @copyright 2025 codewithdeep
    @license Apache-2.0
*/ 

/**
 * Components
 */

import React from 'react'
import PropTypes from 'prop-types'

const ratings = new Array(5);
ratings.fill({
    icon: 'star',
    style: { fontVariationSettings: '"FILL" 1'}
})



export default function ExperienceCard({company, position, startTime, endTime, location, content}) {
  return (
    <div className='relative p-4 rounded-2xl bg-zinc-800 hover:bg:zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors '>
        <div className='flex items-center gap-2 mt-0'>
            <div className='top-10'>
                <p className='text-md text-sky-400 font-semibold align-text-bottom tracking-wider'>
                    {startTime} - {endTime}
                </p>
                <p className='text-2xl text-zinc-300 font-semibold tracking-wider'>{position}</p>

                <p className='text-zinc-100 text-xl tracking-wider'>
                    {company}
                </p>    
                <p className='text-md text-zinc-300 tracking-wider mb-5'>
                    {location}
                </p>
                <p className='text-md text-zinc-300 tracking-wider'>
                    {content.map((item) => (
                        <li>
                            {item}
                        </li>
                    ))}
                </p>
            </div>

        </div>
    </div>
  )
}

ExperienceCard.protoTypes = {
    content: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired
}