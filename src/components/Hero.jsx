/**
 *  @copyright 2025 codewithdeep
    @license Apache-2.0
*/ 

/**
 * Components
 */

import { ButtonOutline, ButtonPrimary } from './Button'

import React from 'react'

export default function Hero() {

  return (
    <section id='home' className='pt-28 lg:pt-36'>   
        <div className='container lg:grid lg:grid-cols-2 items-center lg:gap-8'>
            <div>
                <div className='gelx items-center gap-3'>
                    <figure className='img-box w-9 h-9 rounded-lg'>
                        <img src='/images/deep_bhatt.png' 
                        alt='Deep Bhatt portrait'
                        width={40}
                        height={40}
                        className='image-cover' 
                        />
                    </figure>

                <div className='flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide'>
                    <span className='relative w-2 h-2 rounded-full bg-emerald-400'>
                        <span className='absolute inset-0 rounded-full bg-emerald-400 animate-ping'></span>
                    </span>
                    Available for work
                </div>
                </div>
                <h2 className='headline-1 max-w-[15ch] sm:max-w-20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10'>Your Next Developer, Ready to Build
                </h2>

                <div className='flex items-center gap-3'>
                <ButtonPrimary label="Download CV" icon="download" href='/' flag={true} />

                <ButtonOutline href="#about" label='Scroll down' icon="arrow_downward" />
                    
                </div>
            </div>
            <div className='hidden lg:block'>
                <figure className='w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden'>
                    <img src='/images/deep_bhatt.png' 
                    alt='Deep Bhatt'
                    width={656}
                    height={800}
                    className='w-full' 
                    />
                </figure>
            </div>
        </div>
    </section> 
  )
}
