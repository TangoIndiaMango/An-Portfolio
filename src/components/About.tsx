"use client"

import Image from 'next/image'
import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Separator } from './ui/separator'
import { motion } from 'framer-motion'

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
        <motion.div className='w-full h-full bg-[#1E1E1E] font-raleway text-slate-100'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            id='aboutme'>
            <div aria-label='hidden' />

            <MaxWidthWrapper>
                <div className='flex items-center justify-center font-sunroll'>
                    <h1 className='text-5xl mt-10'>abOuT me</h1>
                </div>
                <div aria-label='hidden' className='mt-16' />




                <motion.div className='w-full flex flex-col items-center justify-center sm:flex-row'
                    variants={itemVariants}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}

                >

                    <Image className='mb-6 sm:mb-0 sm:mr-6' src="/face.png" width={310} height={414} alt='Profile face' />


                    <motion.div variants={itemVariants} className='text-justify flex flex-col items-center justify-center lg:items-start'>
                        <h3 className='mb-4'>BIO</h3>
                        <p className='mb-4'>Hi, I&apos;m An-najaat Salami, a passionate UX Designer with 2 years of experience. I&apos;m dedicated to creating intuitive and visually appealing designs that elevate user experiences. From mobile apps to web interfaces, I&apos;ve had the privilege of working on a variety of projects, always with the user at the forefront of my mind. </p>

                        <p className='mb-4'>Beyond design, I enjoy reading books, writing, and expressing myself through drawing and painting. Let&apos;s collaborate and craft exceptional digital experiences together!</p>

                        <h3 className='mb-2'>Contact</h3>
                        <p>Lagos, Nigeria</p>
                    </motion.div>
                </motion.div>


                <div aria-label='hidden' className='mt-16' />
                <Separator />
                <div aria-label='hidden' className='mt-16' />


                <div className='flex items-center justify-center font-sunroll text-3xl p-6' id='experience'>experience</div>
                <div className='w-full flex flex-wrap items-center justify-evenly gap-2 mt-6'>
                    <motion.div variants={itemVariants} className='flex flex-col'>
                        <p className='text-sm'>2022</p>
                        <h3 className='font-semibold'>Design Intern</h3>
                        <p>TechDev</p>
                    </motion.div>

                    <motion.div variants={itemVariants} className='flex flex-col'>
                        <p className='text-sm'>2022  - Present</p>
                        <h3 className='font-semibold'>UX Designer</h3>
                        <p>Freelance</p>
                    </motion.div>

                    <motion.div variants={itemVariants} className='flex flex-col'>
                        <p className='text-sm'>2022</p>
                        <h3 className='font-semibold'>UX Designer</h3>
                        <p>TrazDev</p>
                    </motion.div>

                </div>

                <div aria-label='hidden' className='mt-36' />

                <div className='flex items-center justify-center font-sunroll text-3xl p-6' id='skill'>skills</div>
                <div className='w-full flex flex-wrap items-center justify-evenly mt-6 ml-[3%]'>
                    <motion.div variants={itemVariants} className='flex flex-col'>
                        <p>Wireframing</p>
                        <p>Prototyping</p>
                        <p>Visual Design</p>
                    </motion.div>

                    <motion.div variants={itemVariants} className='flex flex-col'>
                        <p>UX Research</p>
                        <p>Useability Testing</p>
                        <p>Interaction Design</p>
                    </motion.div>

                    <motion.div variants={itemVariants} className='flex flex-col'>
                        <p>Competitive Analysis</p>
                        <p>Informative Architecture</p>
                    </motion.div>


                </div>
                <div aria-label='hidden' className='mt-36' />

                <div className='flex items-center justify-center p-6 font-sunroll' id='resume'>View my resume</div>
                <div aria-label='hidden' className='mt-16' />
                <Separator />
                <div aria-label='hidden' className='mt-16' />
                <motion.div variants={itemVariants} className='flex items-center flex-col justify-center space-y-20 font-sunroll' id='connect'>
                    <h1 className='text-4xl'>let&apos;s COnnecT</h1>

                    <Link href=''>
                        linkedin
                    </Link>
                    <Link href=''>
                        email
                    </Link>
                    <Link href=''>
                        behance
                    </Link>
                    <Link href=''>
                        twitter
                    </Link>


                    <div aria-label='hidden' className='mt-16' />
                </motion.div>
            </MaxWidthWrapper>
        </motion.div>
    )
}

export default About