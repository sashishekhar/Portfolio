'use client';

import { Sun, Moon } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, color } from 'motion/react';
import Darkmode from './Darkmode';

const Navbar = () => {
    const links = [
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Blogs', href: '/blogs' },
        { name: 'Contact', href: '/contact' },
    ];

    const [hovered, setHovered] = useState<string | null>(null);

    // Scroll progress
    const { scrollY } = useScroll();
    const yTransform = useTransform(scrollY, [0, 80], [0, -20]);
    const widthTransform = useTransform(scrollY, [0, 80], ['94%', '57%']);
    const scaleTransform = useTransform(scrollY, [0, 80], [1, 0.9]);
    const shadowOpacity = useTransform(scrollY, [0, 80], [0.1, 0.4]);

    // Optional: lock fixed position after scrollY > 80
    const [isFixed, setIsFixed] = useState(false);
    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsFixed(latest > 80);
    });

    return (
        <motion.div
            className="flex mx-auto justify-center z-50 mt-2"
            style={{
                marginLeft: isFixed ? '10px' : '0px',
            }}
        >
            <motion.nav
                transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                className="h-[60px] rounded-full  flex items-center px-3 justify-between backdrop-blur-sm [box-shadow:0px_2px_3px_-1px_rgba(255,255,255,0.10),0px_1px_0px_0px_rgba(255,255,255,0.02),0px_0px_0px_1px_rgba(255,255,255,0.08)] transition-all duration-200"
                style={{

                    backgroundColor: isFixed ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)',
                    //   boxShadow: shadowOpacity.to(o => `0 4px 20px rgba(0,0,0,${o})`),
                    position: isFixed ? 'fixed' : 'relative',
                    top: isFixed ? '30px' : '3px',
                    left: 0, right: 0,
                    margin: '0 auto',
                    width: widthTransform,
                    y: yTransform,
                    scale: scaleTransform,
                }}
            >
                {/* Left - Logo */}
                <div className="flex items-center">
                    <Image
                        className="rounded-full border-2 border-neutral-600 dark:border-neutral-300"
                        src="/profile.png"
                        alt="Logo"
                        width={45}
                        height={45}
                    />
                </div>

                {/* Right - Links */}
                <motion.div
                    style={{
                        backgroundColor: isFixed ? 'transparent' : 'transparent',
                        
                    }}
                    className="flex flex-row gap-8 items-center justify-between dark:bg-neutral-700 bg-opacity-50 rounded-full pr-[0px] pl-4 py-2 relative">
                    <div className="flex relative">
                        {links.map((link) => (
                            <div
                                key={link.name}
                                className="relative"
                                onMouseEnter={() => setHovered(link.name)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                {hovered === link.name && (
                                    <motion.div
                                        layoutId="link-highlight"
                                        className="absolute inset-0 -inset-x-1 -inset-y-1 rounded-full bg-neutral-800 dark:bg-neutral-600 z-0"
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <motion.a
                                    
                                    href={link.href}
                                    className="text-neutral-800 dark:text-neutral-400 font-mono px-6 py-1.5 relative z-10 hover:text-neutral-100 dark:hover:text-neutral-100 transition"
                                >
                                    {link.name}
                                </motion.a>
                            </div>
                        ))}
                    </div>



                    {/* Theme Toggle */}
                    <Darkmode />
                </motion.div>
            </motion.nav>
        </motion.div>
    );
};

export default Navbar;
