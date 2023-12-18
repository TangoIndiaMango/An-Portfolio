"use client"

import { Button } from '@/components/ui/button'
import { HamburgerIcon, Logo } from '@/vectors'
import { motion, useAnimation } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
type Props = {}

const Navbar = ({ active, isDark }: { active?: string | any, isDark?: boolean }) => {
    const [menuOpen, setMenuOpen] = React.useState(false)


    const menuItems = [
        {
            name: "Home",
            linkTo: "/"
        },
        {
            name: "Project",
            linkTo: "#project"
        },
        {
            name: "About Me",
            linkTo: "#aboutme"
        },
        {
            name: "Resume",
            linkTo: "#resume"
        }
    ]
    const handleMenuItemClick = () => {
        setMenuOpen(false);
    };

    const controls = useAnimation();

    const toggleMenu = async () => {
        await controls.start({ opacity: 0, x: -20, transition: { duration: 0.2 }, }); // Animate out
        setMenuOpen(!menuOpen);
        await controls.start({ opacity: 1, x: 0, transition: { duration: 0.2 }, }); // Animate in
    };


    return (
        <MaxWidthWrapper>
            <header className='w-full h-20 flex items-center justify-between px-4 mb-10 sm:fixed sm:top-0 md:relative md:top-0 sm:bg-clip-padding hover:bg-clip-text'>
                <div className='flex-shrink-0'>
                    <Logo />
                </div>

                <nav className='hidden md:flex justify-center items-center space-x-8 font-medium text-md'>
                    {menuItems.map((item, index) => (
                        <MenuItem
                            {...item}
                            key={index}
                            active={active}
                            onClick={() => { handleMenuItemClick(); }}
                        />
                    ))}
                </nav>

                {/* Hamburger icon for smaller screens */}
                <div className='z-10 md:hidden'>
                    <motion.button onClick={toggleMenu} initial={{ opacity: 1, x: -20 }} animate={controls}>
                        <HamburgerIcon />
                    </motion.button>
                </div>

                <div className="hidden md:block">
                    <Button className="rounded-none">
                        <Link href="/contact">Contact Me</Link>
                    </Button>
                </div>

                {/* Mobile menu */}
                {menuOpen && (
                    <MobileMenu
                        setMenuOpen={setMenuOpen}
                        menuItems={menuItems}
                        active={active}
                        onItemClick={() => { handleMenuItemClick(); }}
                    />
                )}
            </header>
        </MaxWidthWrapper>
    );
};

const MobileMenu = ({ setMenuOpen, menuItems, active, onItemClick }: { setMenuOpen: (i: boolean) => void, menuItems: any[], active: string, onItemClick: () => void }) => {

    return (
        <MaxWidthWrapper>
            <div className="fixed top-0 left-0 w-full h-full bg-mainBackground z-50 overflow-y-hidden">
                <div className="flex items-center justify-between p-4 border-b border-gray-300">
                    <Logo />
                    <button
                        onClick={() => { setMenuOpen(false); onItemClick(); }}>
                        <HamburgerIcon />
                    </button>
                </div>
                <div className="w-full h-full flex flex-col items-center justify-center space-y-20 p-4">
                    {menuItems.map((item, index) => (
                        <MenuItem
                            {...item}
                            key={index}
                            active={active}
                            onClick={() => { onItemClick(); }}
                        />
                    ))}
                    <div>
                        <Button onClick={() => { onItemClick(); }} className='rounded-none'>
                            <Link href="/contact">Contact Me</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    );
};

export const MenuItem = ({ name, linkTo, active, onClick }: { name: string, linkTo: string, active: string, onClick?: () => void }) => (
    <motion.div initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
        
        className={`menu-item ${linkTo === active ? 'active' : ''}`}
        onClick={onClick}
    >
        <Link href={linkTo}>{name}</Link>
    </motion.div>
);

export default Navbar;