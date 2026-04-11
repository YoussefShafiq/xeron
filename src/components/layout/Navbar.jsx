'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';
import MobileMenu from './MobileMenu';
import { NAV_LINKS } from '@/lib/constants.js';

const navLinks = NAV_LINKS;

const mobileMenuVariants = {
    hidden: {
        opacity: 0,
        height: 0,
        transition: {
            when: 'afterChildren',
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
    visible: {
        opacity: 1,
        height: 'auto',
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.1,
        },
    },
};

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', fn);
        return () => window.removeEventListener('scroll', fn);
    }, []);

    return (
        <nav
            className={`fixed z-50 transition-all duration-300 top-3 lg:top-5 left-3 right-3 w-auto lg:left-1/2 lg:right-auto lg:-translate-x-1/2 lg:w-7xl max-w-7xl rounded-3xl shadow-sm backdrop-blur-sm ${scrolled ? 'bg-purple-1000/5 border border-white/5' : 'bg-white/5  border border-white/5'}`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 lg:h-20 items-center">

                    {/* Logo */}
                    <Link href="/" className="shrink-0">
                        <Image
                            src="/Logo.svg"
                            alt="Logo"
                            width={140}
                            height={32}
                            className="w-[80px] md:w-[100px] lg:w-[120px] h-auto"
                        />
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden md:flex md:space-x-8 text-gray-300">
                        {navLinks.map((l, i) => (
                            <Link
                                key={i}
                                href={l.href}
                                className="opacity-50 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-base font-medium transition duration-300 hover:text-purple-50 hover:font-bold hover:opacity-100"
                            >
                                {l.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile hamburger — toggles ☰ / ✕ */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-expanded={isMenuOpen}
                            className="inline-flex items-center justify-center p-2 rounded-md text-purple-50/70 hover:text-purple-50 focus:outline-none transition duration-300"
                        >
                            <span className="sr-only">Toggle menu</span>
                            {isMenuOpen
                                ? <Icon icon="mdi:close" className="w-6 h-6" />
                                : <Icon icon="mdi:menu" className="w-6 h-6" />
                            }
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile dropdown — expands inside the navbar */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={mobileMenuVariants}
                        className="md:hidden overflow-hidden"
                    >
                        <MobileMenu
                            links={navLinks}
                            onClose={() => setIsMenuOpen(false)}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}