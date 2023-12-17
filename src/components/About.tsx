"use client"

import Image from 'next/image'
import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Separator } from './ui/separator'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

type Props = {}

const About = (props: Props) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
    };
    return (
        <div className='w-full h-full bg-[#1E1E1E] font-raleway text-slate-100'

            id='aboutme'>
            <div aria-label='hidden' />

            <MaxWidthWrapper>
                <Reveal>
                    <div className='flex items-center justify-center font-sunroll'>
                        <h1 className='text-5xl mt-10'>abOuT me</h1>
                    </div>
                </Reveal>
                <div aria-label='hidden' className='mt-16' />



                <Reveal>
                    <div className='w-full flex flex-col items-center justify-center sm:flex-row'>

                        <Image className='mb-6 sm:mb-0 sm:mr-6' src="/face.png" width={310} height={414} alt='Profile face' />



                        <div className='text-justify flex flex-col items-center justify-center lg:items-start'>
                            <Reveal>
                                <h3 className='mb-4'>BIO</h3>
                            </Reveal>
                            <Reveal>
                                <p className='mb-4 tracking-normal leading-relaxed'>Hi, I&apos;m An-najaat Salami, a passionate UX Designer with 2 years of experience. I&apos;m dedicated to creating intuitive and visually appealing designs that elevate user experiences. From mobile apps to web interfaces, I&apos;ve had the privilege of working on a variety of projects, always with the user at the forefront of my mind. </p>
                            </Reveal>
                            <Reveal>
                                <p className='mb-4 tracking-normal leading-relaxed'>Beyond design, I enjoy reading books, writing, and expressing myself through drawing and painting. Let&apos;s collaborate and craft exceptional digital experiences together!</p>
                            </Reveal>
                            <Reveal>
                                <h3 className='mb-2'>Contact</h3>
                                <p>Lagos, Nigeria</p>
                            </Reveal>
                        </div>
                    </div>
                </Reveal>
                <div aria-label='hidden' className='mt-16' />
                <Separator />
                <div aria-label='hidden' className='mt-16' />


                <Reveal>
                    <div className='flex items-center justify-center font-sunroll text-3xl p-6' id='experience'>experience</div>
                </Reveal>
                <div className='w-full grid grid-cols-3 place-content-evenly place-items-center text-sm md:text-xl tracking-normal gap-2 mt-6'>
                    <div className='flex flex-col'>
                        <Reveal>
                            <p className='text-sm'>2022</p>
                            <h3 className='font-semibold'>Design Intern</h3>
                            <p>TechDev</p>
                        </Reveal>
                    </div>


                    <div className='flex flex-col'>
                        <Reveal>
                            <p className='text-sm'>2022  - Present</p>
                            <h3 className='font-semibold'>UX Designer</h3>
                            <p>Freelance</p>
                        </Reveal>
                    </div>
                    <div className='flex flex-col'>
                        <Reveal>
                            <p className='text-sm'>2022</p>
                            <h3 className='font-semibold'>UX Designer</h3>
                            <p>TrazDev</p>
                        </Reveal>
                    </div>

                </div>

                <div aria-label='hidden' className='mt-36' />

                <Reveal>
                    <div className='flex items-center justify-center font-sunroll text-3xl p-6' id='skill'>skills</div>
                </Reveal>
                <div className='w-full grid grid-cols-3 place-content-evenly place-items-center gap-2 p-2 text-sm md:text-xl tracking-normal  mt-6'>
                    <div className='flex flex-col'>
                        <Reveal>
                            <p>Wireframing</p>
                            <p>Prototyping</p>
                            <p>Visual Design</p>
                        </Reveal>
                    </div>

                    <div className='flex flex-col'>
                        <Reveal>
                            <p>UX Research</p>
                            <p>Useability Testing</p>
                            <p>Interaction Design</p>
                        </Reveal>
                    </div>

                    <div className='flex flex-col'>
                        <Reveal>
                            <p>Competitive Analysis</p>
                            <p>Informative Architecture</p>
                        </Reveal>
                    </div>


                </div>
                <div aria-label='hidden' className='mt-36' />

                <Reveal>
                    <div className='flex items-center justify-center p-6 font-sunroll' id='resume'>View my resume</div>
                </Reveal>
                <div aria-label='hidden' className='mt-16' />
                <Separator />
                <div aria-label='hidden' className='mt-16' />
                <div className='flex items-center flex-col justify-center space-y-20 font-sunroll' id='connect'>
                    <Reveal>
                        <h1 className='text-4xl'>let&apos;s COnnecT</h1>
                    </Reveal>
                    <Reveal>
                        <Link href=''>
                            linkedin
                        </Link>
                    </Reveal>

                    <Reveal>
                        <Link href=''>
                            email
                        </Link>
                    </Reveal>

                    <Reveal>
                        <Link href=''>
                            behance
                        </Link>
                    </Reveal>
                    <Reveal>

                        <Link href=''>
                            twitter
                        </Link>
                    </Reveal>

                    <div aria-label='hidden' className='mt-16' />
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default About