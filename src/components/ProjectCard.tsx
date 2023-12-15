"use client"
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

type Props = {
    projectTitle: string | React.ReactNode;
    projectDescription: string;
    projectImage: string;
}

const ProjectCard = ({ projectTitle, projectDescription, projectImage }: Props) => {
    const containerVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    };

    const textVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
    };

    return (
        <motion.div
            className='my-8 flex flex-col items-center justify-center'
            initial='hidden'
            animate='visible'
            variants={containerVariants}
        >
            <motion.h2 className='p-3 font-sunroll font-bold text-5xl' variants={textVariants}>
                {projectTitle}
            </motion.h2>
            <motion.p className='font-raleway p-20 pt-2 text-center tracking-wide' variants={textVariants}>
                {projectDescription}
            </motion.p>
            <motion.div className='flex items-center justify-center' variants={textVariants}>
                <Image
                    src={projectImage}
                    width={320}
                    height={260}
                    alt='project Image'
                    className='w-[320px] md:w-[450px] object-fit object-contain'
                />
            </motion.div>
        </motion.div>
    );
};


export default ProjectCard