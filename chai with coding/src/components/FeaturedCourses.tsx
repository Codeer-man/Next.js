'use client'
import courseData from '@/data/music_courses.json'
import { BackgroundGradient } from './ui/background-gradient'
import Link from 'next/link'

interface courses{
  id: number,
  title: string,
  slug: string,
  description: string,
  price: number,
  instructor: string,
  isFeatured:boolean,
}
export default function featuredCourses() {
  const featuredCourses =courseData.courses.filter((e:courses) => e.isFeatured)
  
  return (
    <div className=' py-12 bg-gray-900'>
      <div>
        <div className='text-center'>
          <h2 className='text-teal-400 font-semibold tracking-wide uppercase'>Featured Courses</h2>
          <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn with the best</p>
        </div>
      </div>
      <div className='mt-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
          {featuredCourses.map((e:courses)=> (
            <div className='flex justify-center' key={e.id}>
              <BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
                <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow '>
                  <p className='text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>{e.title}</p>
                  <p className='text-sm text-neutral-600 dark:text-neutral-400 flex-grow'>{e.description}</p>
                  <Link href={`/courses/${e.slug}`}>Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className='text-center mt-20'>
      <Link   href={"./courses"} className='bg-white text-neutral-950 font-semibold border-neutral-600 px-4 py-2 rounded border hover:bg-gray-500 hover:text-white transition duration-200 ease-in-out'>
        view all courses
      </Link>

      </div>
    </div>
  )
}
