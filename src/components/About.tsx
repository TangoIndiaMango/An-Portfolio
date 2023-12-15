import { AboutMe, Behance, Connet, Email, Experience, Linkden, Seperator, Skills, Twitter } from '@/vectors'
import Image from 'next/image'
import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'

type Props = {}

const About = (props: Props) => {
    return (
        <div className='w-full h-full bg-[#1E1E1E] font-raleway text-slate-100' id='aboutme'>

            <MaxWidthWrapper>
                <div aria-label='hidden' className='mt-16' />
                <div className='flex items-center justify-center font-sunroll text-5xl  '>
                    ABOUT ME
                </div>
                <div aria-label='hidden' className='mt-16' />




                <div className='w-full flex flex-col items-center justify-center sm:flex-row'>

                    <Image className='mb-6 sm:mb-0 sm:mr-6' src="/face.png" width={310} height={130} alt='Profile face' />

                    <div className='text-justify flex flex-col items-center justify-center lg:items-start'>
                        <h3 className='mb-4'>BIO</h3>
                        <p className='mb-4'>Hi, I&apos;m An-najaat Salami, a passionate UX Designer with 2 years of experience. I&apos;m dedicated to creating intuitive and visually appealing designs that elevate user experiences. From mobile apps to web interfaces, I&apos;ve had the privilege of working on a variety of projects, always with the user at the forefront of my mind. </p>

                        <p className='mb-4'>Beyond design, I enjoy reading books, writing, and expressing myself through drawing and painting. Let&apos;s collaborate and craft exceptional digital experiences together!</p>

                        <h3 className='mb-2'>Contact</h3>
                        <p>Lagos, Nigeria</p>
                    </div>
                </div>


                <div aria-label='hidden' className='mt-16' />
                <Seperator />
                <div aria-label='hidden' className='mt-16' />

                <div className='flex items-center justify-center p-6' id='experience'><Experience /></div>
                <div className='flex items-center justify-evenly mt-6'>
                    <div className='flex flex-col'>
                        <p className='text-sm'>2022</p>
                        <h3 className='font-semibold'>Design Intern</h3>
                        <p>TechDev</p>
                    </div>

                    <div className='flex flex-col'>
                        <p className='text-sm'>2022  - Present</p>
                        <h3 className='font-semibold'>UX Designer</h3>
                        <p>Freelance</p>
                    </div>

                    <div className='flex flex-col'>
                        <p className='text-sm'>2022</p>
                        <h3 className='font-semibold'>UX Designer</h3>
                        <p>TrazDev</p>
                    </div>

                </div>

                <div aria-label='hidden' className='mt-36' />

                <div className='flex items-center justify-center p-6' id='skill'><Skills /></div>
                <div className='flex items-center justify-evenly mt-6'>
                    <div className='flex flex-col'>
                        <p>Wireframing</p>
                        <h3>Prototyping</h3>
                        <p>Visual Design</p>
                    </div>

                    <div className='flex flex-col'>
                        <p>UX Research</p>
                        <h3>Useability Testing</h3>
                        <p>Interaction Design</p>
                    </div>

                    <div className='flex flex-col'>
                        <p>Competitive Analysis</p>
                        <h3>Informative Architecture</h3>
                    </div>

                </div>
                <div aria-label='hidden' className='mt-36' />

                <div className='flex items-center justify-center p-6' id='resume'>VIEW MY RESUME</div>
                <div aria-label='hidden' className='mt-16' />
                <Seperator />
                <div aria-label='hidden' className='mt-16' />
                <div className='flex items-center flex-col justify-center space-y-20' id='connect'>
                    <div><Connet /></div>

                    <Link href=''>
                        <Linkden />
                    </Link>
                    <Link href=''>
                        <Email />
                    </Link>
                    <Link href=''>
                        <Behance />
                    </Link>
                    <Link href=''>
                        <Twitter />
                    </Link>


                    <div aria-label='hidden' className='mt-16' />
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default About