import React from 'react';

type Props = {};

const Footer: React.FC<Props> = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='w-full h-full bg-[#1E1E1E] flex items-center justify-center font-raleway text-sm text-white'>
            <p>&copy; <span>{currentYear}</span> An-najaat Salami. All Rights Reserved</p>

            <div className='mt-36'/>
        </footer>
    );
};

export default Footer;
