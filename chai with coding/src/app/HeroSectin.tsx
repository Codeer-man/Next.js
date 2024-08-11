import { Button } from "../components/ui/moving-border";
import { Spotlight } from '@/components/ui/Spotlight'
import React from 'react'

export default function HeroSectin() {
  return (
    <div className=' h-full md:h[40rem] flex flex-col items-center overflow-hidden justify-center rounded-full w-full mx-auto py-10 md:py-0'>
      <Spotlight
        className=" -top-40 left-0 md:left-60 md:-top-20 "
        fill="white"
      />
      <div className='p-4 relative z-10 w-full text-center'>
        <h1 className='font-bold text-4xl md:text-7xl bg-clip-text from-neutral-50 to-neutral-50 bg-gradient-to-b text-transparent'
        >Master the art of music</h1>
        <p className='mt-4 mx-auto md:mt-0 font-normal text-base md:text-lg max-w-lg text-neutral-300'
        >Dive into our comprehensive music courses and transform your music journey today. Wether you are begginer or looking to refine your skills, join us to open your true potential</p>
        <div className='mt-4'>
          <button><a href="/courses"></a></button>
          <Button
        borderRadius="1.75rem"
            
        > Explore Courses
        
      </Button>
        </div>
      </div>
    </div>
  )
}
