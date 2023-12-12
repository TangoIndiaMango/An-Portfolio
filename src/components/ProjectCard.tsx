import React from 'react'
import Image from 'next/image'

type Props = {
    projectTitle: string | React.ReactNode;
    projectDescription: string;
    projectImage: string;
}

const ProjectCard = ({ projectTitle, projectDescription, projectImage }: Props) => {
    return (
        <>
            <h2 className='p-6'>{projectTitle}</h2>
            <p className='font-raleway p-20 text-center line-clamp-5 tracking-wide'>{projectDescription}</p>
            <Image src={projectImage} width={450} height={260} alt='wanderluxt Image' className='object-fit object-contain' />
        </>
    )
}

export default ProjectCard