import ContactForm from '@/components/ContactForm'
import React from 'react'


type Props = {}

const page = (props: Props) => {
    return (
        <>
        <div className='mt-16 flex flex-col items-center justify-center font-raleway'>
            <h2 className='text-2xl font-bold self-center'>Contact Me</h2>
        </div>
        <div>
            <ContactForm/>
        </div>
        </>
    )
}

export default page