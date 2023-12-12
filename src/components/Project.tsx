
import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import ProjectCard from './ProjectCard'
import { Projects } from '@/vectors'
import { Coft, Wanderluxt, StreamIt } from '@/vectors';

type Props = {}


const PROJECT_TITLE = {
    wonderluxt: <Wanderluxt />,
    coft: <Coft />,
    streamIt: <StreamIt />
}

const Project = (props: Props) => {
    return (
        <div id='project'>
        
            <h1 className='flex items-center justify-center self-center'>
                <Projects />
            </h1>
            <div aria-label='hidden' className='mt-16' />
            <MaxWidthWrapper>
                <div className=' w-full h-full flex flex-col justify-between items-center'>

                    <ProjectCard projectTitle={PROJECT_TITLE.wonderluxt} projectImage='/wanderluxt.png' projectDescription='A travel website where you can seamlessly book flights and accommodations, ensuring a smooth travel experience tailored to your preferences.' />

                    <div className='mt-16' />


                    <ProjectCard projectTitle={PROJECT_TITLE.coft} projectImage='/coft.png' projectDescription='A travel website where you can seamlessly book flights and accommodations, ensuring a smooth travel experience tailored to your preferences.' />

                    <div aria-label='hidden' className='mt-16' />

                    <ProjectCard projectTitle={PROJECT_TITLE.streamIt} projectImage='/streamit.png' projectDescription='A mobile application with a user-friendly interface, allowing seamless navigation and providing a visually appealing movie streaming experience on-the-go.' />
                    <div className='mb-10' />
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default Project