import ContactForm from '@/components/ContactForm'
import React from 'react'


type Props = {}

const page = (props: Props) => {
    return (
        <>
        <div className='flex flex-col items-center justify-center font-raleway mt-16 md:mt-0'>
            <h2 className='text-2xl font-bold self-center'>Contact Me</h2>
        </div>
        <div className='w-full h-full p-3 mt-16 md:mt-0'>
            <ContactForm/>
        </div>
        </>
    )
}

export default page